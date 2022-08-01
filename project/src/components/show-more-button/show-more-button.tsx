import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeMaxRenderedFilmsQuantity } from '../../reducer/action';

function ShowMoreButton(): JSX.Element {
  const renderedFilmsQuantityStep = 8;
  const stateFilms = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();
  const maxRenderedFilmsQuantity = useAppSelector((state) => state.maxRenderedFilmsQuantity);
  const handlerShowMoreButtonClick = () => {
    if (maxRenderedFilmsQuantity + renderedFilmsQuantityStep < stateFilms.length) {
      dispatch(changeMaxRenderedFilmsQuantity({maxRenderedFilmsQuantity :maxRenderedFilmsQuantity + renderedFilmsQuantityStep}));
    } else {
      dispatch(changeMaxRenderedFilmsQuantity({maxRenderedFilmsQuantity: stateFilms.length} ));
    }
  };
  return (
    <div className={`catalog__more ${stateFilms.length > maxRenderedFilmsQuantity ? '' : 'visually-hidden'}`}>
      <button className="catalog__button" type="button" onClick={handlerShowMoreButtonClick}>Show more</button>
    </div>
  );
}

export default ShowMoreButton;
