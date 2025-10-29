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

    if (!data.success || data.score < 0.5) {
      return NextResponse.json(
        { error: "Suspicious activity detected (possible bot)." },
        { status: 403 }
      );
    }

    // 2️⃣ Préparation de l'email
    const mailOptions = {
      from: `"Formulaire Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL, // email qui reçoit les messages
      subject: `Nouveau message de ${formData.name || "un utilisateur"}`,
      text: `
        Nom: ${formData.name || "N/A"}
        Entreprise: ${formData.companyName || "N/A"}
        Email: ${formData.email || "N/A"}
        Téléphone: ${formData.phone || "N/A"}
        Sujet: ${formData.subject || "N/A"}
        Message: ${formData.message || "N/A"}
      `,
      html: `
       <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #f1f5f9;
      margin: 0;
      padding: 0;
    }

    .email-container {
      max-width: 600px;
      margin: 40px auto;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      background-color: #ffffff;
      border: 1px solid #e2e8f0;
    }

    .header {
      background: linear-gradient(90deg, #006699, #3b82f6);
      padding: 25px;
      text-align: center;
      color: #ffffff;
    }

    .header h2 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
    }

    .fields {
      padding: 20px 25px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .fields p {
      margin: 0;
      font-size: 16px;
      color: #1e293b;
    }

    .fields p strong {
      display: inline-block;
      min-width: 100px;
      color: #0369a1;
      padding: 2px 6px;
      border-radius: 4px;
    }

    .message-box {
      background: #e0f2fe;
      margin: 0 25px 20px 25px;
      padding: 20px;
      border-radius: 12px;
      font-size: 16px;
      line-height: 1.5;
      color: #0f172a;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    }

    .footer {
      font-size: 14px;
      color: #64748b;
      text-align: center;
      padding: 15px;
    }

  </style>
        <div class="email-container">
          <div class="header">
            <h2>Nouveau message visiteur</h2>
          </div>

          <div class="fields">
            <p><strong>Nom :</strong> ${formData.name}</p>
            <p><strong>Entreprise :</strong> ${formData.companyName}</p>
            <p><strong>Email :</strong> ${formData.email}</p>
            <p><strong>Téléphone :</strong> ${formData.phone}</p>
            <p><strong>Sujet :</strong> ${formData.subject}</p>
          </div>

          <div class="message-box">
            ${formData.message}
          </div>

          <p class="footer">
            Ceci est un message envoyé depuis votre formulaire de contact.
          </p>
        </div>
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
