import React, { useEffect, useState } from 'react';
import AboutComponent from 'src/components/About';
import Header from 'src/components/Header';

const About = () => {
  const [headerPadding, setHeaderPadding] = useState(false);
  const [logoSize, setLogoSize] = useState(60);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setHeaderPadding(true);
        setLogoSize(30);
      } else if (window.scrollY <= 0) {
        setHeaderPadding(false);
        setLogoSize(60);
      }
    });
  }, []);

  return (
    <>
      <Header logoColor logoSize={logoSize} headerPadding={headerPadding} />
      <AboutComponent />
    </>
  );
};

export default About;
