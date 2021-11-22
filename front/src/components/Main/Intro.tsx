import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { lightTheme } from 'src/theme';
import AOS from 'aos';
import 'aos/dist/aos.css';
import IntroduceText from '../share/IntroduceText';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${lightTheme.BACKGROUND_INTRO_COLOR};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Intro = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Container>
      <Section>
        <Content>
          <IntroduceText />
        </Content>
      </Section>
    </Container>
  );
};

export default Intro;
