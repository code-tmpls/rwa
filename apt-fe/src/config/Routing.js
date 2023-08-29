import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from "@Pages/Welcome/index.js";
import Home from "@Pages/Home/index.js";
import Exam from "@Pages/Exam/index.js";
import Menu2 from "@Pages/Menu2/index.js";
import Menu3 from "@Pages/Menu3/index.js";
import Menu4 from "@Pages/Menu4/index.js";
import Menu5 from "@Pages/Menu5/index.js";
import Menu6 from "@Pages/Menu6/index.js";
import Menu7 from "@Pages/Menu7/index.js";
import Menu8 from "@Pages/Menu8/index.js";

export const AppRouting = ()=>{
 return (<BrowserRouter basename="/">
    <Routes>
      <Route exact path="/" element={<Welcome/>} />
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/exam" element={<Exam />} />
      <Route exact path="/menu2" element={<Menu2 />} />
      <Route exact path="/menu3" element={<Menu3 />} />
      <Route exact path="/menu4" element={<Menu4 />} />
      <Route exact path="/menu5" element={<Menu5 />} />
      <Route exact path="/menu6" element={<Menu6 />} />
      <Route exact path="/menu7" element={<Menu7 />} />
      <Route exact path="/menu8" element={<Menu8 />} />
    </Routes>
 </BrowserRouter>);
};