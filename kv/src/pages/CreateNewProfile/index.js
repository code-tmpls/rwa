import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col } from "e-ui-react";
import ProfileCreate from "./ProfileCreate/index.js";

const CreateNewProfile = ()=>{
 return (<>
 <Header menulinks={HeaderMenu} activeId="CreateNewProfile" />
 <ContainerFluid>
    <div className="mtop15p mbot15p">
        <Row>
            <Col xl={9} xxl={9}>
                <ProfileCreate />
            </Col>
            <Col xl={3} xxl={3}>
                <div className="mbot15p" style={{borderBottom:"2px solid black"}}>
                    <h4 className="bs-header" style={{marginBottom:"5px"}}><b>Your other Profiles</b></h4> 
                </div>
            </Col>
        </Row>
    </div>
 </ContainerFluid>
 </>);
};

export default CreateNewProfile;