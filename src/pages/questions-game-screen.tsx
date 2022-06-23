import { useEffect, useState } from 'react';
import Button from '../components/buttons/button';
import Leaderboard from '../components/leaderboard/leaderboard';
import { Link, useNavigate } from 'react-router-dom';
import { store } from '../store/store';
import { fetchCategoriesAction } from '../store/api-actions';
import { useSelector } from 'react-redux';
import { RootState } from '../store/root-reducer';
import { Category } from '../types/questions';

const POINTS = [100, 200, 300, 400, 500];
const THEMES = ['Компьютерные игры', 'Технологии', 'Прошлое и будущее', 'Известные люди'];

function QuestionsGameScreen() {
  const categories = useSelector(({QUESTIONS}: RootState) => QUESTIONS.categories);

  useEffect(() => {
    store.dispatch(fetchCategoriesAction('3'));
  }, []);

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
                categories && categories.map((category: Category) => (
                  <div key={category._id} className="categories__item points">
                    <h2>{category.name}</h2>
                    <div className="points__list">
                      {
                        category.questions.map((question) => (
                          <Link to={`/question/${category._id}/${question.points}`} key={question.id} className='points__item'>{question.points}</Link>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
            {showLeaderboard &&
              <Leaderboard />}
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
