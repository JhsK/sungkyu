import Head from 'next/head';
import React from 'react';
import AboutComponent from 'src/components/About';
import Header from 'src/components/Header';
import useScroll from 'src/hooks/useScroll';

const About = () => {
  const [headerPadding, logoSize] = useScroll(null);

  return (
    <>
      <Head>
        <title>Sungkyu - About</title>
        <meta
          name="description"
          content="프론트엔드 개발자 임성규에 대해 소개 합니다. 제가 사용해본 기술 및 경험에 대해 작성했습니다."
        />
        <meta property="og:title" content="Sungkyu About" />
        <meta
          property="og:description"
          content="프론트엔드 개발자 임성규에 대해 소개합니다. 제가 사용해본 기술 및 경험에 대해 작성했습니다."
        />
        <meta property="og:url" content="https://sungkyu.info/about" />
      </Head>
      <Header logoColor logoSize={logoSize} headerPadding={headerPadding} />
      <AboutComponent />
    </>
  );
};

export default About;
