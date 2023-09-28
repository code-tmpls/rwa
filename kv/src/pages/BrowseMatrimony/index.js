import React, { useState } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import FilterMenu from './components/FilterMenu/index.js';
import DisplayCard from './components/DisplayCard/index.js';
import MatrimonyList from '@TempData/matrimony-list.json';

const BrowseMatrimony = ()=>{

  const DisplayList = ()=>{
    return (<>
      <ContainerFluid>
        <Row>
          <Col xl={12} xxl={12}>
            <div style={{ color:'#953062' }}>
              <h3 className="bs-header" style={{ borderBottom:'2px solid #953062', marginBottom:'15px' }}>
                <b>Browse Matrimony Profiles</b>
              </h3>
            </div>
          </Col>
        </Row>
        <Row>
          {MatrimonyList?.map((data, index)=>{
            return (<Col xl={4} xxl={3}>
              <DisplayCard data={data} index={index} />
            </Col>);
          })}
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