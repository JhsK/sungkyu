import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Header from 'src/components/Header';
import Typing from 'src/components/Main/Typing';
import Intro from 'src/components/Main/Intro';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

const Home = () => {
  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      console.log('gage');
      // console.log(e.target.scrollingElement.scrollTop);
      AOS.refresh();
    });
  }, []);

  return (
    <>
      <Container>
        <Header />
        <Typing />
        <Intro />
      </Container>
    </>
  );
};

export default Home;
