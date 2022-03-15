import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { getMainPostsAPI } from 'src/api';
import Header from 'src/components/Header';
import Main from 'src/components/Main';

const Home = () => {
  const [logoColor, setLogoColor] = useState(false);
  return (
    <>
      <Head>
        <meta name="description" content="프론트엔드 개발자 Sungkyu의 기술 블로그 입니다." />
        <meta property="og:title" content="Sungkyu Blog" />
        <meta property="og:description" content="프론트엔드 개발자 Sungkyu의 기술 블로그 입니다." />
        <meta property="og:url" content="https://sungkyu.info" />
      </Head>
      <Header logoColor={logoColor} mainBool />
      <Main setLogoColor={setLogoColor} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('main', getMainPostsAPI, { staleTime: 5000 });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
