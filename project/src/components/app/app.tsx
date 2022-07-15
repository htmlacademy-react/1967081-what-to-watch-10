import MainPage from '../../pages/main/main';
import { AppMainProps } from '../../types/types';

function App( {title, releaseDate, ganre}: AppMainProps): JSX.Element {
  return (<MainPage title = {title} releaseDate = {releaseDate} ganre = {ganre}/>);
}

export default App;
