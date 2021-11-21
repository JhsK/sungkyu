import React, { useEffect, useState } from 'react';
import AboutComponent from 'src/components/About';
import Header from 'src/components/Header';
import useScroll from 'src/hooks/useScroll';

const About = () => {
  const [headerPadding, logoSize] = useScroll(null);

  return (
    <>
      <Header logoColor logoSize={logoSize} headerPadding={headerPadding} />
      <AboutComponent />
    </>
  );
};

export default About;
