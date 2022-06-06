import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartMenu from '../../pages/start-menu';
import { AppRoutes } from '../../const';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<StartMenu/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
