import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { FILMS } from './mocks/films';
import { store } from './store';

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
    <Provider store={store}>
      <App title={Setting.TITLE} releaseDate={Setting.RELEASE_DATE} genre={Setting.GENRE} films={FILMS} />
    </Provider>
  </React.StrictMode>,
);
