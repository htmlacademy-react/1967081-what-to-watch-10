import FilmCard from '../../components/film-card/filmCard';
import LogoFooter from '../../components/logo-footer/logo-footer';
import Logo from '../../components/logo/logo';
import { FilmsType } from '../../types/types';

function MyList({ films }: FilmsType): JSX.Element {
  return (

    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a href="/" className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {films.map((film) => (
            <FilmCard film={film} key={film.id} />
          ))}
        </div>
      </section>
      <LogoFooter />
    </div>);
}

export default MyList;
