"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function ReCaptchaProviderClient({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(
    "process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY",
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  );
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
