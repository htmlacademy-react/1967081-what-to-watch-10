import React from 'react';
import { FilmLevels } from '../../const';

import { FilmType } from '../../types/types';

function MoviePageOverview({ film }: FilmType): JSX.Element {
  const { description, rating, scoresCount, director, starring } = film;
  const getLevel = () => {
    if (!rating || (rating >= 0 && rating < 2)) {
      return FilmLevels.Bad;
    } else if (rating >= 2 && rating < 5) {
      return FilmLevels.Normal;
    } else if (rating >= 5 && rating < 8) {
      return FilmLevels.Good;
    } else if (rating >= 8 && rating < 10) {
      return FilmLevels.VeryGood;
    }
    return FilmLevels.Awesome;
  };

  const getFilmStarring = () => starring.map((elem, index) => {
    if (index === 0) {
      return elem;
    } else if (index > 0 && index <= 3) {
      return `, ${elem}`;
    } else if (index === 4) {
      return ' and other';
    }
    return '';
  });

  const filmLevel = getLevel();
  const filmStarring = getFilmStarring();
  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{filmLevel}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {filmStarring}</strong></p>
      </div>
    </React.Fragment>
  );
}

export default MoviePageOverview;
