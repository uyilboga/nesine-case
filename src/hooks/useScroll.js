import { useState, useEffect } from 'react';

const useScroll = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleScroll = () => {
    const { innerHeight, pageYOffset } = window;
    const { offsetHeight } = document.body;

    if (innerHeight + pageYOffset >= offsetHeight) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return currentPage;
};

export default useScroll;
