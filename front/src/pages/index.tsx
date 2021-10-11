import React from 'react';
import styled from '@emotion/styled';
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Typing from 'src/components/Main/Typing';
import Intro from 'src/components/Main/Intro';

// const Container = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100vh;
//   overflow: auto;
//   scroll-snap-type: y mandatory;
// `;

const Home = () => (
  <>
    <Header />
    <Main />
  </>
);

export default Home;
