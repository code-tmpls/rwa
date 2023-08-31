import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col } from "e-ui-react";
const Menu2 = ()=>{
 
return (<>
<Header menulinks={HeaderMenu} activeId="Menu2" /> 
</>);
};

export default Menu2;