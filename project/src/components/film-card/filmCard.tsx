import { useState } from 'react';
import { FilmType } from '../../types/types';
import VideoPlayer from '../video-player/video-player';

function FilmCard({ film }: FilmType): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const { description, posterImage, id } = film;
  let timer: NodeJS.Timeout | null = null;
  const handleArticleOnMouseEnter = () => {
    timer = setTimeout(() => {
      setIsPlaying(true);
    }, 1000);
  };
  const handleArticleOnMouseLeave = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    setIsPlaying(false);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={handleArticleOnMouseEnter}
      onMouseLeave={handleArticleOnMouseLeave}
    >
      <div id={`${id}`} className="small-film-card__image">
        {isPlaying ?
          <VideoPlayer film={film} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
          :
          <img src={posterImage} alt={description} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{description}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
