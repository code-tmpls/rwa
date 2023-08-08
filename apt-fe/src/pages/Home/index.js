import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Component1 from './components/Component1/index.js';
import Component2 from './components/Component2/index.js';

const Home = ()=>{
 return (<>
 <Header menulinks={HeaderMenu} activeId="Home" />
 <Component1 />
 <Component2 />
 </>);
};

export default Home;