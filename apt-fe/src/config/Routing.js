import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "@Pages/Home/index.js";
import Exam from "@Pages/Exam/index.js";
import Menu2 from "@Pages/Menu2/index.js";
import Menu3 from "@Pages/Menu3/index.js";

export const AppRouting = ()=>{
 return (<BrowserRouter basename="/">
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/exam" element={<Exam />} />
      <Route exact path="/menu2" element={<Menu2 />} />
      <Route exact path="/menu3" element={<Menu3 />} />
    </Routes>
 </BrowserRouter>);
};