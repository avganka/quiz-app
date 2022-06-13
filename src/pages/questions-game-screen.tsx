import { useState } from 'react';
import Button from '../components/buttons/button';
import Leaderboard from '../components/leaderboard/leaderboard';
import Modal from '../components/modals/modal';
import { Transition, CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';

const POINTS = [100, 200, 300, 400, 500];
const THEMES = ['Компьютерные игры', 'Технологии', 'Прошлое и будущее', 'Известные люди'];

function QuestionsGameScreen() {
  const [showLeaderboard, setShowLeaderboard] = useState<boolean>(false);
  const navigate = useNavigate();

  const leaderboardHandler = () => {
    setShowLeaderboard((prev) => !prev);
  };

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <div className='app'>
        <div className="container">
          <h1>Раунд 1</h1>
          <div className='question-game-screen'>

            <div className={`categories ${showLeaderboard ? 'hide' : ''}`} >
              {
                THEMES.map((theme) => (
                  <div key={theme} className="categories__item points">
                    <h2>{theme}</h2>
                    <ul className="points__list">
                      {
                        POINTS.map((point) => (
                          <li key={point} className='points__item'>{point}</li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
            </div>
            {showLeaderboard &&
               <Leaderboard/>}
          </div>
        </div>


        <div className='footer'>
          <Button btnStyle='danger' back onClick={backHandler}></Button>
          <Button btnStyle='warning' leaderboard onClick={leaderboardHandler}></Button>
        </div>
      </div>
      {/* <Modal/> */}

    </>
  );
}

export default QuestionsGameScreen;
