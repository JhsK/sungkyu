import Head from 'next/head';
import React from 'react';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import ProjectsComponent from 'src/components/Projects';

const Project = () => (
  <>
    <Head>
      <title>Sungkyu - Project</title>
      <meta name="description" content="프론트엔드 개발자 임성규가 진행한 개인 및 팀프로젝트 목록입니다." />
      <meta property="og:title" content="Sungkyu Project" />
      <meta property="og:description" content="프론트엔드 개발자 임성규가 진행한 개인 및 팀프로젝트 목록입니다." />
      <meta property="og:url" content="https://sungkyu.info/project" />
    </Head>
    <Header logoColor />
    <ProjectsComponent />
    <Footer />
  </>
);

export default Project;
