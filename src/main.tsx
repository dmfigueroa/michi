import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { navigatorDetector } from 'typesafe-i18n/detectors';
import TypesafeI18n from './i18n/i18n-react';
import { detectLocale } from './i18n/i18n-util';
import router from './router';
import './styles/globals.css';

const locale = detectLocale(navigatorDetector);

const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (isDarkMode) {
  document.body.classList.add('dark');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (e.matches) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TypesafeI18n locale={locale}>
      <RouterProvider router={router} />
    </TypesafeI18n>
  </React.StrictMode>,
);
