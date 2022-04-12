import React from 'react';
import styled from '@emotion/styled';
import useDevice from 'src/hooks/useDevice';
import Introduce from './Introduce';
import Skill from './Skill';
import Footer from '../Footer';
import MobileIntroduceText from '../share/MobileIntroduceText';
import Experience from './Experience';

const Container = styled.div`
  /* height: 100%; */
`;

const AboutComponent = () => {
  const isFold = useDevice(300);

  return (
    <Container>
      {isFold ? <MobileIntroduceText /> : <Introduce />}
      <Experience />
      {/* <Skill /> */}
      <Footer />
    </Container>
  );
};

export default AboutComponent;
