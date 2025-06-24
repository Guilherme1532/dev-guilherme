/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://guilhermeaguiar.me',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://guilhermeaguiar.me/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404', '/500'],
}