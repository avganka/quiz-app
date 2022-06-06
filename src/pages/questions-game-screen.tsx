import Button from '../components/buttons/button';

const POINTS = [100, 200, 300, 400, 500];
const THEMES = ['Компьютерные игры', 'Технологии', 'Прошлое и будущее', 'Известные люди'];

function QuestionsGameScreen() {


  return (
    <>
      <div className='app'>
        <div className="container">
          <h1>Раунд 1</h1>
          <div className="categories">
            <div className="categories__list">
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
            <div className="score">
              <ul className="score__list">
                <li className='score__item first top1'>
                  <span className="score__position">1</span>
                  <img src="./avatars/rabbit.svg" alt="" width='35px'/>
                  <p>Суровые обезьяны</p>
                  <span className="score__value">10520</span>
                </li>
                <li className='score__item second top2'>
                  <span className="score__position">2</span>
                  <img src="./avatars/cat.svg" alt="" width='35px'/>
                  <p>Суровые обезьяны</p>
                  <span className="score__value">10510</span>
                </li>
                <li className='score__item third top3'>
                  <span className="score__position">3</span>
                  <img src="./avatars/deer.svg" alt="" width='35px'/>
                  <p>Суровые обезьяны</p>
                  <span className="score__value">505</span>
                </li>
                <li className='score__item fourth top4'>
                  <span className="score__position">3</span>
                  <img src="./avatars/dog.svg" alt="" width='35px'/>
                  <p>Суровые обезьяны</p>
                  <span className="score__value">505</span>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className='footer'>
          <Button btnStyle='danger' close></Button>
          <Button btnStyle='warning' leaderboard></Button>
        </div>
      </div>

      {/* <div className="modal">
        <div className="modal__content">
          <input type="text" placeholder='Введите название команды' />
          <button className='button button-navigation'>
            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
          </button>
          <button className='button button-success'>Готово</button>
        </div>
      </div> */}
    </>
  );
}

export default QuestionsGameScreen;
