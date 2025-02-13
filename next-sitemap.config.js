/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://dev-charles.vercel.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ["https://dev-charles.vercel.app/dynamic-sitemap.xml"],
  },
  exclude: ["/server-sitemap.xml"], // Add any pages you want to exclude
};
