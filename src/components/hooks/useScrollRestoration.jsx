import { useEffect } from 'react';

export const useScrollRestoration = () => {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const scrollPosition = localStorage.getItem('scrollPosition');

    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
    } else {
      window.scrollTo(0, 0);
    }

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('scrollPosition', window.pageYOffset.toString());
    });

    return () => {
      window.removeEventListener('beforeunload', () => {
        localStorage.setItem('scrollPosition', window.pageYOffset.toString());
      });
    };
  }, []);
};
