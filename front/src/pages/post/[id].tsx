import dynamic from 'next/dynamic';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllPostIds, getPostData } from 'src/lib/project';
import styled from '@emotion/styled';

const Viewer = dynamic(() => import('../../components/Blog/Post/PostViewer'), { ssr: false });

const Container = styled.div`
  padding: 2rem;
`;

export default function Post({ postData }) {
  console.log(postData);
  return (
    <Container>
      {/* <span>{postData.title}</span>
      <span>{postData.id}</span>
      <span>{postData.date}</span>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{postData.contentHtml}</ReactMarkdown> */}
      <Viewer content={postData.contentHtml} />
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
