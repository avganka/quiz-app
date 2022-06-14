import { useState } from 'react';
import Button from '../components/buttons/button';
import Player from '../components/player/player';
import Timer from '../components/timer/timer';
import GAME_RULES from '../game-rules';


function QuestionScreen() {
  const [start, setStart] = useState(false);

  return (
    <div className='app'>
      <div className="header">
        <Timer duration={GAME_RULES.roundDuration} />
      </div>
      <div className="container">
        {/* <div className="question question-image">
          <div className='question-image__wrapper'>
            <img src="./mock-film.jpeg" alt=""/>
          </div>
          <p>Назовите фильм</p>
        </div> */}
        {/* <div className="question question-text">
          <p>20-е годы — английский полковник-альпинист Говард-Бери, 60-е годы — американский кинооператор-любитель Роджер Паттерсон, 80-е годы — киргизский чабан Омуш. В этот, далеко неполный список, можно включить и Александра Привалова, благодаря еще одному герою знаменитой дилогии братьев Стругацких. Назовите этого героя.</p>
        </div> */}
        <div className="question question-audio">
          <Player duration={GAME_RULES.roundDuration} src={'https://www.dropbox.com/s/t32waag3ib20b28/OneDance-Drake.mp3'} />
          <p>Назовите исполнителя песни</p>
        </div>

        {/* <h1>Результаты раунда</h1>
        <div className="round-results">
          <ul className="round-results__teams">
            <li className='round-results__team'>
              <img src="./avatars/rabbit.svg" alt="" width='35px' />
              <p>Суровые обезьяны</p>
              <span className="round-results__current-value">30500</span>
            </li>
            <li className='round-results__team active'>
              <img src="./avatars/rabbit.svg" alt="" width='35px' />
              <p>Суровые обезьяны</p>
              <span className="round-results__current-value">20100</span>
              <span className="round-results__add-value">+100</span>
            </li>
          </ul>
        </div> */}


      </div>


      <div className='footer'>
        <Button btnStyle='danger'>Неправильно</Button>
        <Button btnStyle='success'>Правильно</Button>
      </div>
    </div>
  );
}

export default QuestionScreen;
