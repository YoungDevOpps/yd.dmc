import type { NextConfig } from "next";

// const isExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  // Permet de générer un site statique (si besoin)
  // output: isExport ? "export" : undefined,

  // Dossier de sortie du build
  distDir: "build",

  /* config options here */
  images: {
    unoptimized: true, // désactive l’optimisation automatique (utile pour export statique)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
