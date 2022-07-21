import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { FILMS } from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  TITLE: 'The Grand Budapest Hotel',
  RELEASE_DATE: 2014,
  GENRE: 'Drama',
};

root.render(
  <React.StrictMode>
    <App title = {Setting.TITLE} releaseDate = {Setting.RELEASE_DATE} genre = {Setting.GENRE} films = {FILMS}/>
  </React.StrictMode>,
);
