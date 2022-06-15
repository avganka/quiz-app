import { SyntheticEvent, useEffect, useRef, useState } from 'react';

const START_POS = 20;

type PlayerProps = {
  src: string,
  duration: number,
}

function Player({ src, duration }: PlayerProps): JSX.Element {
  const songDuration = duration / 3;
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const track = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (track.current) {
      const audio = track.current;
      audio.load();
      audio.currentTime = START_POS;
      audio.volume = 1;
    }
  }, [track]);


  const controlMusicHandler = () => {
    if (track.current) {
      const audio = track.current;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (isMusicPlaying) {
              audio.pause();
              audio.currentTime = START_POS;
              setIsMusicPlaying(false);
            } else {
              audio.currentTime = START_POS;
              audio.volume = 1;
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

    if (song.currentTime >= (START_POS + songDuration)) {
      song.pause();
      setIsMusicPlaying(false);
    }

    if ((song.currentTime - START_POS) > (songDuration - 1)) {
      song.volume = 0.7;
    }
    if ((song.currentTime - START_POS) > (songDuration)) {
      song.volume = 0.3;
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
