import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Header from 'src/components/Header';
import Typing from 'src/components/Main/Typing';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

const Home = () => {
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      console.log(e.target.scrollingElement.scrollTop);
    });
  }, []);

  return (
    <>
      <Container>
        <Header />
        <Typing />
      </Container>
    </>
  );
};

export default Home;
