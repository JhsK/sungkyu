import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { getMainPostsAPI } from 'src/api';
import Header from 'src/components/Header';
import Main from 'src/components/Main';

const Home = () => {
  const [logoColor, setLogoColor] = useState(false);
  return (
    <>
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
