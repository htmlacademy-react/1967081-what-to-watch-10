import { FilmType } from '../../types/types';

function FilmCard( props : FilmType ): JSX.Element {
  const {film} = props;
  const {description, posterImage, id} = film;
  return (
    <article className="small-film-card catalog__films-card">
      <div id = {`${id}`} className="small-film-card__image">
        <img src={posterImage} alt={description} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{description}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
