import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import ProgressBar from '../progress-bar/progress-bar';
// import ProgressBar from '../progress-bar/progress-bar';
// import styles from './audio-player.module.scss';


const START_POS = 20;
const SONG_FRAGMENT_DURATION = 6;

type PlayerProps = {
  src: string,
}

function Player({ src }: PlayerProps): JSX.Element {
  const [songProgress, setSongProgress] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const track = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (track.current) {
      const audio = track.current;
      audio.currentTime = START_POS;
      audio.volume = 1;
    }
  }, [track]);


  const controlMusicHandler = () => {
    if (track.current) {
      const audio = track.current;
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
    }
  };

  const onTimeUpdateHandler = (evt: SyntheticEvent<HTMLAudioElement>) => {
    const song = evt.currentTarget;

    if (song.currentTime >= (START_POS + SONG_FRAGMENT_DURATION)) {
      song.pause();
      setIsMusicPlaying(false);
    }

    if ((song.currentTime - START_POS) > (SONG_FRAGMENT_DURATION - 1)) {
      song.volume = 0.7;
    }
    if ((song.currentTime - START_POS) > (SONG_FRAGMENT_DURATION)) {
      song.volume = 0.3;
    }

    setSongProgress((song.currentTime - START_POS) * 100 / SONG_FRAGMENT_DURATION);
  };


  return (
    // <div className={styles.container}>
    //   <audio ref={track} preload="metadata" onTimeUpdate={onTimeUpdateHandler} >
    //     <source src={src} type="audio/mp3" />
    //     Ваш web-браузер не поддерживает HTML элемент «<a href="/html/audio/">audio</a>».
    //   </audio>
    //   <div onClick={controlMusicHandler} className={`${styles['control-button']} ${isMusicPlaying ? styles['control-button--paused'] : ''}`}></div>
    //   <ProgressBar progressPercent={songProgress} />
    // </div>
    <div className="wrapper">
      <div className={`player-controls ${isMusicPlaying ? 'playing' : ''}`} onClick={controlMusicHandler}>
        <span className="play control-button" ></span>
        <span className="pause control-button--paused"></span>
      </div>
      <audio id="player" ref={track} onTimeUpdate={onTimeUpdateHandler}>
        <source src="https://www.dropbox.com/s/t32waag3ib20b28/OneDance-Drake.mp3?raw=1" type="audio/mp3" />
      </audio>
    </div>

  );
}

export default Player;
