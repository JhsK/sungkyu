// import { getSortedPostsData } from '../lib/posts'
import React from 'react';
import { getSortedPostsData } from '../lib/project';

export default function Home({ allPostsData }) {
  console.log(allPostsData);
  return (
    <>
      {allPostsData.map(({ id, date, title }) => (
        <span key={id}>
          {title}
          <br />
          {id}
          <br />
          {date}
        </span>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
