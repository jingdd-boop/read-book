import './App.css';
import HomePage from './components/HomePage';
import PersonPage from './PersonPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/person' element={<PersonPage />} />
      </Routes>
    </div>
  );
}

export default App;
