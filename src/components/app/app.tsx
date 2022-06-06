import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartMenu from '../../pages/start-menu';
import { AppRoutes } from '../../const';
import QuestionsGameScreen from '../../pages/questions-game-screen';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<StartMenu/>}/>
        <Route path={AppRoutes.GAME} element={<QuestionsGameScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
