import { Link } from 'react-router-dom';
import { AppRoutes } from '../const';

function StartMenu(): JSX.Element {

  return (
    <div className='app'>
      <div className='logo'>
        <img src='./logo.png" alt="logo' />
      </div>
      <div className='menu'>
        <Link to={AppRoutes.TEAMS} className='button button-menu'>Начать игру</Link>
        <Link to={AppRoutes.GAME} className='button button-menu'>Раунд</Link>
      </div>
    </div>
  );
}

export default StartMenu;
