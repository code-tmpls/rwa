import React, { useState } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import FilterMenu from './components/FilterMenu/index.js';
import DisplayCard from './components/DisplayCard/index.js';

const BrowseMatrimony = ()=>{

  const DisplayList = ()=>{
    return (<>
      <ContainerFluid>
        <Row>
          <Col xl={4} xxl={3}>
            <DisplayCard />
          </Col>
          <Col xl={4} xxl={3}>
            <DisplayCard />
          </Col>
          <Col xl={4} xxl={3}>
            <DisplayCard />
          </Col>
          <Col xl={4} xxl={3}>
            <DisplayCard />
          </Col>
        </Row>
      </ContainerFluid>
    </>);
  };

 return (<>
 <Header menulinks={HeaderMenu} activeId="BrowseMatrimony" />
 <ContainerFluid>
  <Row>
    <Col xl={3} xxl={2}>
      <FilterMenu />
    </Col>
    <Col xl={9} xxl={10}>
      <DisplayList />
    </Col>
  </Row>
  </ContainerFluid>
 </>);
};

export default BrowseMatrimony;