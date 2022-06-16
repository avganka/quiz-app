import { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { stopRoundTimer } from '../../store/game-process/game-process';
import { RootState } from '../../store/root-reducer';

type TimerProps = {
  duration: number
}

function Timer({ duration }: TimerProps): JSX.Element {
  const start = useSelector(({ GAME }: RootState) => GAME.isRoundStart);
  const dispatch = useDispatch();
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!start) {
      setKey((prev) => prev + 1);
    }
  }, [start]);

  return (

    <div className="timer" >
      <CountdownCircleTimer
        key={key}
        isPlaying={start}
        duration={duration}
        colors={'#f75c7a'}
        size={80}
        trailColor={'#4e5057'}
        strokeWidth={40}
        strokeLinecap={'butt'}
        onComplete={() => {
          dispatch(stopRoundTimer());
        }}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>


  );
}

export default Timer;
