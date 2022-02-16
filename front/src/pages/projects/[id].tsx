import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import React from 'react';
import Header from 'src/components/Header';
import { getAllProjectsIds, getProjectsData } from 'src/lib/project';

const Viewer = dynamic(() => import('../../components/Blog/Post/PostViewer'), { ssr: false });

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 10rem auto 0 auto;

  @media ${(props) => props.theme.HDPC} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.PC} {
    max-width: 700px;
  }

  @media ${(props) => props.theme.TABLET} {
    max-width: 500px;
  }

  @media ${(props) => props.theme.MOBILE} {
    max-width: 350px;
  }
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
