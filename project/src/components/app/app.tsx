import MainPage from '../../pages/main/main';
import { AppMainProps } from '../../types/types';

function App( {title, releaseDate, genre}: AppMainProps): JSX.Element {
  return (<MainPage title = {title} releaseDate = {releaseDate} genre = {genre}/>);
}

export default App;
