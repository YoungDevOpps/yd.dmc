import transporter from "@/lib/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { token, ...formData } = await req.json();

    // 1️⃣ Vérification du reCAPTCHA côté serveur
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const res = await fetch(verifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await res.json();

    console.log("data =>", data);

    // data contient un objet comme :
    // {
    //   success: true,
    //   score: 0.9,
    //   action: "contact_form",
    //   challenge_ts: "2025-10-26T12:00:00Z",
    //   hostname: "ton-domaine.com"
    // }

    // if (!data.success || data.score < 0.5) {
    //   return NextResponse.json(
    //     { error: "Suspicious activity detected (possible bot)." },
    //     { status: 403 }
    //   );
    // }

    // 2️⃣ Préparation de l'email
    const mailOptions = {
      from: `"Formulaire Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL, // email qui reçoit les messages
      subject: `Nouveau message de ${formData.name || "un utilisateur"}`,
      text: `
        Nom: ${formData.name || "N/A"}
        Email: ${formData.email || "N/A"}
        Message: ${formData.message || "N/A"}
      `,
      html: `
        <p><strong>Nom:</strong> ${formData.name || "N/A"}</p>
        <p><strong>Email:</strong> ${formData.email || "N/A"}</p>
        <p><strong>Message:</strong> ${formData.message || "N/A"}</p>
      `,
    };

    // 4️⃣ Envoi de l'email
    await transporter.sendMail(mailOptions);

    // ✅ Si tout est bon, tu traites ton message normalement
    console.log("Formulaire validé :", formData);

    return NextResponse.json({ message: "Message reçu avec succès !" });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors du traitement du formulaire." },
      { status: 500 }
    );
  }
}
