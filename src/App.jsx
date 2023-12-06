import React from 'react';
import Home from './Pages/Home/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from 'Pages/About/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
