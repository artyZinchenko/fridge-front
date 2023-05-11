import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSetTitle = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const pathnameArr = pathname.split('/');

    if (pathnameArr[1].length > 0) {
      document.title = pathnameArr[1] + ' | ' + 'MealMaster';
    } else {
      document.title = 'MealMaster';
    }
  }, [pathname]);

  return;
};
