import React, { useEffect, useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import Typing from './Typing';
import Intro from './Intro';

const Main = () => (
  // <ReactPageScroller onBeforePageScroll={setScrollPage}>
  //   <Typing />
  //   <Intro scrollPage={scrollPage} />
  // </ReactPageScroller>
  <>
    <Typing />
    <Intro />
  </>
);

export default Main;
