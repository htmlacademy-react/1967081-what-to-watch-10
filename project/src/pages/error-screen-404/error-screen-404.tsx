import { Link } from 'react-router-dom';

function ErrorScreen404(): JSX.Element {
  return (
    <div className="error-screen-404">
      <h1>Error 404</h1>
      <Link to="/">Go to main page</Link>
    </div>);
}

export default ErrorScreen404;
