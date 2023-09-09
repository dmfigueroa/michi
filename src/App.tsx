import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const App = () => {
  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [window.matchMedia('(prefers-color-scheme: dark)').matches]);

  return <RouterProvider router={router} />;
};

export default App;
