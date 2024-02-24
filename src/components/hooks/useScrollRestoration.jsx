// useScrollRestoration.js
import { useEffect } from 'react';

const useScrollRestoration = () => {
  useEffect(() => {
    const saveScrollPosition = () => {
      localStorage.setItem('scrollPosition', JSON.stringify(window.scrollY));
    };

    const restoreScrollPosition = () => {
      const scrollPosition = JSON.parse(localStorage.getItem('scrollPosition'));
      if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
      }
    };

    window.addEventListener('beforeunload', saveScrollPosition);
    restoreScrollPosition();

    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, []);
};

export default useScrollRestoration;
