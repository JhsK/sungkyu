import React, { useEffect, useState } from 'react';
import Header from 'src/components/Header';
import Main from 'src/components/Main';

const Home = () => {
  const [projectsAnimation, setProjectsAnimation] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const line = e.target.scrollingElement.scrollTop;
      console.log(e.target.scrollingElement.scrollTop);

      if (line > 900) console.log('heh');
      if (line > 1300) setProjectsAnimation(true);
      else setProjectsAnimation(false);
    });
  }, []);

  return (
    <>
      <Header />
      <Main projects={projectsAnimation} />
    </>
  );
};

export default Home;
