import AOS from 'aos';
import React, { useEffect } from 'react';
import useDevice from 'src/hooks/useDevice';
import Footer from '../Footer';
import MobileIntroduceText from '../share/MobileIntroduceText';
import Experience from './Experience';
import Introduce from './Introduce';

const AboutComponent = () => {
  const isFold = useDevice(400);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div>
      {isFold ? <MobileIntroduceText /> : <Introduce />}
      <Experience />
      <Footer />
    </div>
  );
};

export default AboutComponent;
