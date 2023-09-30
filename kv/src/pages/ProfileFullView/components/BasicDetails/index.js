import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";

const BasicDetails = ()=>{
 return (<>
 <div className="mtop15p mbot15p" style={{borderBottom:"2px solid black"}}>
    <h4 className="bs-header" style={{marginBottom:"5px"}}><b>Basic Details</b></h4> 
 </div>
 <div style={{ backgroundColor:'#eee', padding:'15px' }}>
    <div>
    <Row>
        <Col xl={2} xxl={2}>
            <b>Height <span className="pull-right">:</span></b>
        </Col>
        <Col xl={4} xxl={4}>5 ft 6 in (174 cm)</Col>
        <Col xl={3} xxl={3}>
            <b>Age <span className="pull-right">:</span></b>
        </Col>
        <Col xl={3} xxl={3}>31 years</Col>
    </Row>
    </div>
    <div className="mtop10p">
    <Row>
        <Col xl={6} xxl={6}></Col>
        <Col xl={3} xxl={3}>
            <b>Gender  <span className="pull-right">:</span></b>
        </Col>
        <Col xl={3} xxl={3}>Male</Col>
    </Row>
    </div>
    <div className="mtop10p">
    <Row>
        <Col xl={6} xxl={6}></Col>
        <Col xl={3} xxl={3}>
            <b>Gender  <span className="pull-right">:</span></b>
        </Col>
        <Col xl={3} xxl={3}>Male</Col>
    </Row>
    </div>
 </div>
 </>);
};

export default BasicDetails;