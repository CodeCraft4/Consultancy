import React from "react";
import Home from "./Pages/Home/Index";
import { Route, Routes } from "react-router-dom";
import About from "Pages/About/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
