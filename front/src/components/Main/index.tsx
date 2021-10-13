import React, { useEffect, useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import Typing from './Typing';
import Intro from './Intro';
import Projects from './Projects';
import Blog from './Blog';

const Main = ({ projects, blog }) => (
  // <ReactPageScroller onBeforePageScroll={setScrollPage}>
  //   <Typing />
  //   <Intro scrollPage={scrollPage} />
  // </ReactPageScroller>
  <>
    <Typing />
    <Intro />
    <Projects projects={projects} />
    <Blog blog={blog} />
  </>
);

export default Main;
