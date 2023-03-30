import './App.css';
import { Home, Test, LoginPage, TestInfo } from './pages';
import { ProtectedRoutes } from './components';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<Home />}></Route>
          <Route path='test' element={<Test />}></Route>
          <Route path='info' element={<TestInfo />}></Route>
        </Route>
        <Route path='auth' element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
