import React from 'react';
import Login from './components/Login';
import Register from './components/Register'
import Home from './components/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
