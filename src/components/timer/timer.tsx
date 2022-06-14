import { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

type TimerProps = {
  duration: number,
  start?:boolean,
}

function Timer({duration, start}: TimerProps): JSX.Element {

  // const [play, setPlay] = useState(false);
  // const [key, setKey] = useState(0);
  return (

    <div className="timer">
      <CountdownCircleTimer
        // key={key}
        isPlaying={start}
        duration={duration}
        colors={'#f75c7a'}
        size={80}
        trailColor={'#e93504'}
        strokeWidth={40}
        strokeLinecap={'butt'}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>


  );
}

export default Timer;
