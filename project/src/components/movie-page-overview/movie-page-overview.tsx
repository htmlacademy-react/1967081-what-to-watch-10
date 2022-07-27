import React from 'react';
import { Levels } from '../../const';
import { FilmType } from '../../types/types';

function MoviePageOverview({ film }: FilmType): JSX.Element {
  const { description, rating, scoresCount, director } = film;
  const level = Levels[rating];
  const filmStarring = '123';
  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{level}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {filmStarring}</strong></p>
      </div>
    </React.Fragment>
  );
}

export default MoviePageOverview;
