import React, { useEffect, useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import AOS from 'aos';
import Typing from './Typing';
import Intro from './Intro';
import 'aos/dist/aos.css';

const Main = () => {
  const [scrollPage, setScrollPage] = useState(0);

  return (
    <ReactPageScroller onBeforePageScroll={setScrollPage}>
      <Typing />
      <Intro scrollPage={scrollPage} />
    </ReactPageScroller>
  );
};

export default Main;
