import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Component1 from './components/Component1/index.js';
import Component2 from './components/Component2/index.js';

const Home = ()=>{
  const location = useLocation();
 // console.log("location", location);
 return (<>
 
 <Header menulinks={HeaderMenu} activeId="Home" />
 <div align="right">
  <Link to="/exam">Help</Link>
 </div>
 <Component1 />
 <Component2 />
 
 </>);
};

export default Home;