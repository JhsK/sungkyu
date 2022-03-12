module.exports = {
  siteUrl: 'https://sungyku.info',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://sungkyu.info/server-sitemap.xml', // <==== Add here
    ],
  },
};
