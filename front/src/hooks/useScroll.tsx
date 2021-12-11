import React, { useEffect, useState } from 'react';

type scrollArray = [boolean, number];

const useScroll = (initalValue = null): scrollArray => {
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

  return [headerPadding, logoSize];
};

export default useScroll;
