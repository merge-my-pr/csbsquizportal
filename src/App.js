import './App.css';
import { Route, Routes } from 'react-router-dom';
import QuizQuestions from './pages/QuizQuestions';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <div>

    <Routes>
      <Route path='/' element={<QuizQuestions/>}/>
      <Route path='/results' element={<ResultPage/>}/>
    </Routes>

  </div>
  );
}

export default App;
