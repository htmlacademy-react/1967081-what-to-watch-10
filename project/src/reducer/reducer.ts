import {createReducer} from '@reduxjs/toolkit';
import { GENRES } from '../const';
import { FILMS } from '../mocks/films';
import { changeGenre, changeFilms, changeMaxRenderedFilmsQuantity } from './action';

const beginRenderedFilmsQuantity = 8;

const initialState = {
  genre: 'All genres',
  films: FILMS,
  maxRenderedFilmsQuantity: beginRenderedFilmsQuantity
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
      state.maxRenderedFilmsQuantity = beginRenderedFilmsQuantity;
    })
    .addCase(changeFilms, (state) => {
      state.films = FILMS.filter((elem) => elem.genre === state.genre || state.genre === GENRES.ALLGENRES);
    })
    .addCase(changeMaxRenderedFilmsQuantity, (state, action) => {
      const {maxRenderedFilmsQuantity} = action.payload;
      state.maxRenderedFilmsQuantity = maxRenderedFilmsQuantity;
    });
});

export {reducer};
