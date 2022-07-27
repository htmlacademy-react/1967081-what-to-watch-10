import { useState } from 'react';
import { FilmCardTabs } from '../../const';
import { FilmType } from '../../types/types';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';

function MoviePageTabs( {film} : FilmType): JSX.Element {
  const [activeTab, setActiveTab] = useState(FilmCardTabs.Overview);
  const renderTab = (): JSX.Element => {
    if (activeTab === FilmCardTabs.Overview) {
      return (<MoviePageOverview film = {film}/>);
    } else if (activeTab === FilmCardTabs.Details) {
      return (<MoviePageDetails film = {film}/>);
    }
    return (<MoviePageReviews film = {film}/>);
  };

  const onClickHandle = (event: React.MouseEvent, tab: FilmCardTabs) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === FilmCardTabs.Overview ? 'film-nav__item--active' : ''}`}>
            <a href = "/" className="film-nav__link" onClick={(event) => onClickHandle(event, FilmCardTabs.Overview)}>{FilmCardTabs.Overview}</a>
          </li>
          <li className={`film-nav__item ${activeTab === FilmCardTabs.Details ? 'film-nav__item--active' : ''}`}>
            <a href = "/" className="film-nav__link" onClick={(event) => onClickHandle(event, FilmCardTabs.Details)}>{FilmCardTabs.Details}</a>
          </li>
          <li className={`film-nav__item ${activeTab === FilmCardTabs.Reviews ? 'film-nav__item--active' : ''}`}>
            <a href = "/" className="film-nav__link" onClick={(event) => onClickHandle(event, FilmCardTabs.Reviews)}>{FilmCardTabs.Reviews}</a>
          </li>
        </ul>
      </nav>
      {renderTab()}
    </div >);
}

export default MoviePageTabs;
