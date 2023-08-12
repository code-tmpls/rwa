import React from "react";
import Home from "@Pages/Home/index.js";
import Exam from "@Pages/Exam/index.js";
import Menu2 from "@Pages/Menu2/index.js";
import Menu3 from "@Pages/Menu3/index.js";

export const Routes = [
    { path:"/", component:<Home /> },
    { path:"home", component:<Home /> },
    { path:"exam", component:<Exam /> },
    { path:"menu2", component:<Menu2 /> },
    { path:"menu3", component:<Menu3 /> }
];