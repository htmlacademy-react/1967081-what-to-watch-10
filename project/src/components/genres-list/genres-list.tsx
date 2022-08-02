import { FilmsType } from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre, changeFilms} from '../../reducer/action';
function GenresList({ films }: FilmsType): JSX.Element {
  const stateGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();
  const handleOnClickButton = (event: React.MouseEvent, elem : string) => {
    event.preventDefault();
    dispatch(changeGenre({genre: elem}));
    dispatch(changeFilms());
  };
  const getGenres = () => {
    const newGenres = ['All genres'];
    films.forEach((elem) => newGenres.includes(elem.genre) ? '' : newGenres.push(elem.genre));
    return newGenres;
  };
  const genres = getGenres();
  const createGenresList = () => (
    genres.map((elem) => (
      <li key={elem} className={`catalog__genres-item ${ stateGenre === elem ? 'catalog__genres-item--active' : ''}`}>
        <a href="/" onClick={(event) => handleOnClickButton(event, elem)} className="catalog__genres-link">{elem}</a>
      </li>)
    )
  );
  return (
    <ul className="catalog__genres-list">
      {createGenresList()}
    </ul>
  );
}

export default GenresList;
