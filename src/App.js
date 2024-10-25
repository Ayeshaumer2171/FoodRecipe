import './App.css';
import MainPage from './components/MainPage';
import MealInfo from './components/MealInfo';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <MainPage />}/>
        <Route path='/:mealid' element={ <MealInfo />}/>

      </Routes>
     

      </BrowserRouter>
          </div>
  );
}

export default App;
