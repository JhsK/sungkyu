import React, { useEffect } from 'react';
import Header from 'src/components/Header';
import Main from 'src/components/Main';

const Home = () => {
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const line = e.target.scrollingElement.scrollTop;
      console.log(e.target.scrollingElement.scrollTop);

      if (line > 900) console.log('heh');
    });
  }, []);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default Home;
