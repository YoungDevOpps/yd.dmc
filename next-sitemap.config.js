// import type { IConfig } from "next-sitemap";

// const config: IConfig = {
//   siteUrl: "https://dmc-ci.com", // ton domaine principal
//   generateRobotsTxt: true, // génère robots.txt
//   changefreq: "weekly", // fréquence de mise à jour
//   priority: 0.8, // priorité des pages
//   sitemapSize: 5000, // max URLs par sitemap
//   exclude: [], // pages à exclure
// };

// export default config;

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://dmc-ci.com", // ton domaine principal
  generateRobotsTxt: true, // génère robots.txt
  changefreq: "weekly", // fréquence de mise à jour
  priority: 0.8, // priorité des pages
  sitemapSize: 5000, // max URLs par sitemap
  exclude: [], // pages à exclure
};

export default config;
