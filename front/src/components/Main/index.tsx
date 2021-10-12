import React, { useEffect, useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import Typing from './Typing';
import Intro from './Intro';
import Projects from './Projects';

const Main = ({ projects }) => (
  // <ReactPageScroller onBeforePageScroll={setScrollPage}>
  //   <Typing />
  //   <Intro scrollPage={scrollPage} />
  // </ReactPageScroller>
  <>
    <Typing />
    <Intro />
    <Projects projects={projects} />
  </>
);

export default Main;
