import { Link } from 'react-router-dom';

function StartMenu(): JSX.Element {

  return (
    <div className='app'>
      <div className='logo'>
        <img src="./logo.png" alt="logo"/>
      </div>
      <div className='menu'>
        <Link to={'/rooms'} className='button button-menu'>Начать игру</Link>
        <Link to={'/player'} className='button button-menu'>Player</Link>
        <Link to={'/test'} className='button button-menu'>Test</Link>
        <Link to={'/room'} className='button button-menu'>Room</Link>
        <Link to={'/questions'} className='button button-menu'>Questins</Link>
        <Link to={'/question'} className='button button-menu'>Questin</Link>
      </div>
    </div>
  );
}

export default StartMenu;
