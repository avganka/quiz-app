import Button from '../components/buttons/button';
import Player from '../components/player/player';
import AudioQuestion from '../components/question-types/audio-question';
import ImageQuestion from '../components/question-types/image-question';
import TextQuestion from '../components/question-types/text-question';
import Timer from '../components/timer/timer';
import GAME_RULES from '../game-rules';


function QuestionScreen() {
  return (
    <div className='app'>
      <div className="header">
        <Timer duration={GAME_RULES.roundDuration} />
      </div>
      <div className="container">
        <ImageQuestion />
        {/* <AudioQuestion /> */}
        {/* <TextQuestion /> */}
      </div>
      <div className='footer'>
        <Button btnStyle='danger'>Неправильно</Button>
        <Button btnStyle='success'>Правильно</Button>
      </div>
    </div>
  );
}

export default QuestionScreen;
