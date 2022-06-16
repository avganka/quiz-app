import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import GAME_RULES from '../../game-rules';
import { startRoundTimer } from '../../store/game-process/game-process';

const START_POS = 10;
const VOLUME = 0.1;

type PlayerProps = {
  src: string,
}

function Player({ src }: PlayerProps): JSX.Element {
  const songDuration = GAME_RULES.roundDuration / 3;
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const track = useRef<HTMLAudioElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (track.current) {
      const audio = track.current;
      audio.load();
      audio.currentTime = START_POS;
      audio.volume = VOLUME;
    }
  }, [track]);


  const controlMusicHandler = () => {
    if (track.current) {
      const audio = track.current;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            dispatch(startRoundTimer());
            if (isMusicPlaying) {
              audio.pause();
              audio.currentTime = START_POS;
              setIsMusicPlaying(false);
            } else {
              audio.currentTime = START_POS;
              audio.play();
              setIsMusicPlaying(true);
            }
          })
          .catch((error) => {
            throw new Error(error);
          });
      }
    }
  };

  const onTimeUpdateHandler = (evt: SyntheticEvent<HTMLAudioElement>) => {
    const song = evt.currentTarget;

    if ((song.currentTime - START_POS) > (songDuration - 1)) {
      song.volume = VOLUME * 0.5;
    }
    if ((song.currentTime - START_POS) > (songDuration - 0.5)) {
      song.volume = VOLUME * 0.3;
    }
    if ((song.currentTime - START_POS) > (songDuration)) {
      song.volume = VOLUME * 0.1;
    }

    if (song.currentTime >= (START_POS + songDuration)) {
      song.pause();
      song.volume = VOLUME;
      setIsMusicPlaying(false);
    }
  };

  return (
    <div className="wrapper">
      <div className={`player-controls ${isMusicPlaying ? 'playing' : ''}`} onClick={controlMusicHandler}>
        <span className="play control-button" ></span>
        <span className="pause control-button--paused"></span>
      </div>
      <audio id="player" ref={track} onTimeUpdate={onTimeUpdateHandler}>
        <source src={src} type="audio/mp3" />
      </audio>
    </div>

  );
}

export default Player;
