/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://guilhermeaguiar.me",
  generateRobotsTxt: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/404", "/500"],
  additionalPaths: async (config) => {
    const projects = require("./src/data/projects.json");
    return [
      { loc: "/", priority: 1.0, changefreq: "weekly" },
      ...projects.map((project) => ({
        loc: `/projects/${project.id}`,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.8,
      })),
    ];
  },
};
