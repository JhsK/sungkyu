import styled from '@emotion/styled';
import AOS from 'aos';
import React, { useEffect } from 'react';
import useDevice from 'src/hooks/useDevice';
import Footer from '../Footer';
import MobileIntroduceText from '../share/MobileIntroduceText';
import Experience from './Experience';
import Introduce from './Introduce';

const Container = styled.div`
  /* height: 100%; */
`;

const AboutComponent = () => {
  const isFold = useDevice(400);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <Container>
      {isFold ? <MobileIntroduceText /> : <Introduce />}
      <Experience />
      <Footer />
    </Container>
  );
};

export default AboutComponent;
