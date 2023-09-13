import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, Alert, Card } from "e-ui-react";
import NewProfileComponents from "@Pages/Authentication/NewProfileComponents/index.js";


const Authentication = ()=>{
 return (<>
 <Header menulinks={HeaderMenu} activeId="Authentication" />
 <ContainerFluid>
    <div className="mtop15p mbot15p">
        <Row>
            <Col xl={9} xxl={9}>
                <div className="mbot15p" style={{borderBottom:"2px solid black"}}>
                    <h4 class="bs-header" style={{marginBottom:"5px"}}><b>Create new Profile</b></h4> 
                </div>
                <div className="mtop15p">
                    <Alert type="success" show={true} body={<div>Success! Indicates a successful or positive action</div>} />
                </div>
                <Row>
                    <Col xl={12} xxl={12}>
                        <div className="mtop15p mbot15p">
                            <NewProfileComponents />
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xl={3} xxl={3}>
                <div className="mbot15p" style={{borderBottom:"2px solid black"}}>
                    <h4 class="bs-header" style={{marginBottom:"5px"}}><b>Your other Profiles</b></h4> 
                </div>
            </Col>
        </Row>
    </div>
 </ContainerFluid>
 </>);
};

export default Authentication;