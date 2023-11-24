'use client';
import { useState, useEffect } from 'react';
import HomeScreenDesktop from './screens/HomeScreenDesktop';
import HomeScreenMobile from './screens/HomeScreenMobile';

export default function Home() {
  const isBrowser = () => typeof window !== 'undefined';

  const [windowSize, setWindowSize] = useState(
    isBrowser() && [window.innerWidth, window.innerHeight]
  );

  useEffect(() => {
    if (isBrowser()) {
      const handleWindowResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
      };

      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }
  }, []);
  return windowSize[0] <= 1024 ? <HomeScreenMobile /> : <HomeScreenDesktop />;
}
