import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { getPostsAPI } from 'src/api';
import BlogComponent from 'src/components/Blog';
import Header from 'src/components/Header';

const Blog = () => (
  <>
    <Head>
      <title>Sungkyu - Blog</title>
      <meta name="description" content="프론트엔드 개발자 임성규의 공부 기록입니다." />
      <meta property="og:title" content="Sungkyu Blog" />
      <meta property="og:description" content="프론트엔드 개발자 임성규의 공부 기록입니다." />
      <meta property="og:url" content="https://sungkyu.info/blog" />
    </Head>
    <Header logoColor />
    <BlogComponent />
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(['posts', null, ''], () => getPostsAPI('DESC', 0, ''), {
    staleTime: 3000,
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Blog;
