import React, { useEffect, useState } from 'react';

const useDevice = (width: number) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= width) {
        setIsMobile(true);
      } else setIsMobile(false);
    }
  }, []);
  return isMobile;
};

export default useDevice;
