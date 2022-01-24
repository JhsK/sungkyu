import React from 'react';
import { getAllPostIds, getPostData } from 'src/lib/posts';

export default function Post({ postData }) {
  return (
    <>
      <span>{postData.title}</span>
      <span>{postData.id}</span>
      <span>{postData.date}</span>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </>
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
