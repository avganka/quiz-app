import Player from '../player/player';

function AudioQuestion(): JSX.Element {
  return (
    <div className='question'>
      <Player src={'https://muzm.net/uploads/music/2021/09/Yes_Yes__Jaxomy_Crisis_-_Montero_Call_Me_By_Your_Name.mp3'} />
      <p className='question__text'>Назовите исполнителя песни</p>
    </div>
  );
}

export default AudioQuestion;
