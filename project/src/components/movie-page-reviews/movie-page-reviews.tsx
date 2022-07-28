import React from 'react';
import { COMMENTS } from '../../mocks/comments';
import { FilmType } from '../../types/types';
import FilmCommentsColumn from '../film-comments-column/film-comments-column';

function MoviePageReviews({ film }: FilmType): JSX.Element {
  const { id } = film;
  const filmComments = COMMENTS.filter((elem ,index) => elem.id === id);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <FilmCommentsColumn columnNumber = {1} filmComments={filmComments} />
      </div>
      <div className="film-card__reviews-col">
        <FilmCommentsColumn columnNumber = {2} filmComments={filmComments}/>
      </div>
    </div>
  );
}

export default MoviePageReviews;

