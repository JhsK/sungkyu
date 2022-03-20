import styled from '@emotion/styled';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import useDevice from 'src/hooks/useDevice';
import IntroduceText from '../share/IntroduceText';
import MobileIntroduceText from '../share/MobileIntroduceText';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
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
  const isFold = useDevice(300);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Container>
      <Section>
        <Content>{isFold ? <MobileIntroduceText /> : <IntroduceText />}</Content>
      </Section>
    </Container>
  );
};

export default Intro;
