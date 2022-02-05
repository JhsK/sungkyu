import React, { useState } from 'react';
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import useAuth from 'src/hooks/useAuth';

const Home = () => {
  const [logoColor, setLogoColor] = useState(false);

  return (
    <>
      <Header logoColor={logoColor} mainBool />
      <Main setLogoColor={setLogoColor} />
    </>
  );
};

export default Home;
