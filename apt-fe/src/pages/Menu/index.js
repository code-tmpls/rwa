import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Component1 from './Component1/index.js';

const Menu = ()=>{
 return (<>
 <Header menulinks={HeaderMenu} activeId="Menu" />
 <Component1 />
 </>);
};

export default Menu;