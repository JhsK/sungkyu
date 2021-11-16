import React, { useEffect, useState } from 'react';
import Header from 'src/components/Header';
import Main from 'src/components/Main';

const Home = () => {
  const [logoColor, setLogoColor] = useState(false);
  const [projectsAnimation, setProjectsAnimation] = useState(false);
  const [blogAnimation, setBlogAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const line = e.target.scrollingElement.scrollTop;
      // console.log(e.target.scrollingElement.scrollTop);
      // console.log(window.scrollY);

      if (line < 300) setLogoColor(false);
      if (line > 500) setLogoColor(true);
      if (line > 1300) setProjectsAnimation(true);
      else setProjectsAnimation(false);
      if (line > 2650) setBlogAnimation(true);
      else setBlogAnimation(false);
    };
    window.addEventListener('scroll', handleScroll);
    // window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header logoColor={logoColor} />
      <Main projects={projectsAnimation} blog={blogAnimation} />
    </>
  );
};

export default Home;
