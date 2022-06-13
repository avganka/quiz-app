import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartMenu from '../../pages/start-menu';
import { AppRoutes } from '../../const';
import QuestionsGameScreen from '../../pages/questions-game-screen';
import TeamsCreatingScreen from '../../pages/teams-creating-screen';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<StartMenu/>}/>
        <Route path={AppRoutes.GAME} element={<QuestionsGameScreen/>}/>
        <Route path={AppRoutes.TEAMS} element={<TeamsCreatingScreen />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
