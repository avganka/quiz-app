import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../components/buttons/button';
import Player from '../components/player/player';
import AudioQuestion from '../components/question-types/audio-question';
import ImageQuestion from '../components/question-types/image-question';
import TextQuestion from '../components/question-types/text-question';
import Timer from '../components/timer/timer';
import GAME_RULES from '../game-rules';
import { RootState } from '../store/root-reducer';
import { Category, Question } from '../types/questions';


function QuestionScreen() {
  const {categoryId, questionId} = useParams();
  const categories = useSelector(({ QUESTIONS }: RootState) => QUESTIONS.categories);
  const currentQuestion = categories.find((category : Category) => category._id === categoryId)?.questions;
  // .find((question: Question) => question.id === questionId);
  console.log(currentQuestion);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://127.0.0.1:8080/quiz/categories/${categoryId}`);
      const {data} = res.data;
      return data;
    };
    fetchData();
  }, []);

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
