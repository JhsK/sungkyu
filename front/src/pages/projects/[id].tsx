import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import React from 'react';
import Header from 'src/components/Header';
import { getAllProjectsIds, getProjectsData } from 'src/lib/project';

const Viewer = dynamic(() => import('../../components/Blog/Post/PostViewer'), { ssr: false });

const Container = styled.div`
  width: 1200px;
  margin: 10rem auto 0 auto;
`;

export default function ProjectsItem({ projectsData }) {
  return (
    <>
      <Header logoColor />
      <Container>
        <Viewer content={projectsData.contentHtml} />
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectsData = await getProjectsData(params.id);
  return {
    props: {
      projectsData,
    },
  };
}
