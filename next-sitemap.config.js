/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://guilhermeaguiar.me",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/_next/",
      },
      {
        userAgent: "*",
        allow: "/project-files/",
      },
      {
        userAgent: "*",
        allow: "/skills/",
      },
    ],
  },
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/404", "/500"],
};
