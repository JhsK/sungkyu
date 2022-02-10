import { GetServerSideProps, GetStaticProps } from 'next';
import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { getPostsAPI } from 'src/api';
import BlogComponent from 'src/components/Blog';
import Header from 'src/components/Header';

const Blog = () => (
  <>
    <Header logoColor />
    <BlogComponent />
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('fasfsf');
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery('posts', () => getPostsAPI('DESC', 0, ''), { staleTime: 1000 });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Blog;
