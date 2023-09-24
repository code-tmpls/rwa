import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "@Pages/Home/index.js";
import BrowseMatrimony from "@Pages/BrowseMatrimony/index.js";
import MatchCalculator from "@Pages/MatchCalculator/index.js";
import CreateNewProfile from "@Pages/CreateNewProfile/index.js";
import Authentication from "@Pages/Authentication/index.js";

export const AppRouting = ()=>{
 return (<BrowserRouter basename="/">
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Home" element={<Home/>} />
      <Route exact path="/BrowseMatrimony" element={<BrowseMatrimony />} />
      <Route exact path="/MatchCalculator" element={<MatchCalculator />} />
      <Route exact path="/CreateNewProfile" element={<CreateNewProfile />} />
      <Route exact path="/Authentication" element={<Authentication />} />
    </Routes>
 </BrowserRouter>);
};