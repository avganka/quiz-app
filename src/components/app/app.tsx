import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartMenu from '../../pages/start-menu';
import { AppRoutes } from '../../const';
import QuestionsGameScreen from '../../pages/questions-game-screen';
import TeamsCreatingScreen from '../../pages/teams-creating-screen';
import QuestionScreen from '../../pages/question-screen';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<StartMenu/>}/>
        <Route path={AppRoutes.GAME} element={<QuestionsGameScreen/>}/>
        <Route path={AppRoutes.TEAMS} element={<TeamsCreatingScreen />} />
        <Route path={`${AppRoutes.QUESTION}/:categoryId/:questionId`} element={<QuestionScreen />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
