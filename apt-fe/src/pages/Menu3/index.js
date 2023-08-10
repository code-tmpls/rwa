import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const Menu3 = ()=>{
 return (<>
  <Header menulinks={HeaderMenu} activeId="Menu3" />
 </>);
};

export default Menu3;