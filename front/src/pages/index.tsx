import React, { useState } from 'react';
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import useAuth from 'src/hooks/useAuth';

const Home = () => {
  const [logoColor, setLogoColor] = useState(false);
  const currentUser = useAuth();
  console.log(currentUser);
  return (
    <>
      <Header logoColor={logoColor} />
      <Main setLogoColor={setLogoColor} />
    </>
  );
};

export default Home;
