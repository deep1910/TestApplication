import './App.css';
import { Home, Test, LoginPage } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='test' element={<Test/>}></Route>
        <Route path='auth' element={<LoginPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
