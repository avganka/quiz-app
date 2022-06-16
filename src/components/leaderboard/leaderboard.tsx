function Leaderboard():JSX.Element {
  return (
    <div className='score'>
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
  );
}

export default Leaderboard;
