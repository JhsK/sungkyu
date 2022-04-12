import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const fields = [
    {
      loc: 'https://sungkyu.info/projects/Tre',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://sungkyu.info/projects/Groupstory',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://sungkyu.info/blog/3',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://sungkyu.info/blog/5',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://sungkyu.info/blog/7',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://sungkyu.info/blog/8',
      lastmod: new Date().toISOString(),
    },
  ];
  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default () => {};
