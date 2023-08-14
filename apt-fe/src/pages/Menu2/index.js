import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const Menu2 = ()=>{
 return (<>
  <Header menulinks={HeaderMenu} activeId="Menu2" />
  <headerCA />
 </>);
};

export default Menu2;