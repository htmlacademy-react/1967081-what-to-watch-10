import { FilmReviewType } from '../../types/types';
type FilmCommentType = {
  filmReview: FilmReviewType;
}

function FilmComment( {filmReview} : FilmCommentType): JSX.Element {
  const { user , rating, comment, date} = filmReview;
  const author = user.name;
  const newDate = new Date(date);
  const year = newDate.toLocaleDateString('en', { year: 'numeric' });
  const month = newDate.toLocaleDateString('en', { month: 'short' });
  const monthLong = newDate.toLocaleDateString('en', { month: 'long' });
  const day = newDate.toLocaleDateString('en', { day: '2-digit' });
  return (
    < div className="review" >
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime= {`${year}-${month}-${day}`}>{`${monthLong} ${day}, ${year}`}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div >
  );
}

export default FilmComment;
