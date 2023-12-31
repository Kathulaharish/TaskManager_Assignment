import HomePage from './pages/HomePage.js';
import {Routes, Route} from 'react-router-dom'
import Register from './pages/Register.js';
import Login from './pages/Login.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<Register/>}/> 
        <Route path='/login' element={<Login/>}/> 
      </Routes>
    </>
  );
}

export default App;
