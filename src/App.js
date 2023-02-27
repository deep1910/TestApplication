import './App.css';
import { Home, Test } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='test' element={<Test/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
