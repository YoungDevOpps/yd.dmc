import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permet de générer un site statique (si besoin)
  // output: "export",

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
