import React from "react";
import { useParams } from 'react-router-dom';
import { ContainerFluid, Row, Col, Avatar } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const ProfileFullView = ()=>{
 const { profileId } = useParams();
 return (<>
  <Header menulinks={HeaderMenu} activeId="BrowseMatrimony" />
  <ContainerFluid>
    <Row>
        <Col xl={4} xxl={4}>
            <Row>
                <Col xl={5} xxl={4}>
                  <div className="mtop15p">
                    <Avatar size={150} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" />
                  </div>  
                </Col>
                <Col xl={7} xxl={8}>
                    <h4 className="bs-header mtop25p"><b>Narendra Modi</b></h4>
                </Col>
            </Row> 
        </Col>
        <Col xl={5} xxl={5}>
            
        </Col>
        <Col xl={3} xxl={3}>
            <div className="mtop15p mbot15p" style={{borderBottom:"2px solid black"}}>
                <h4 className="bs-header" style={{marginBottom:"5px"}}><b>Similar Profiles</b></h4> 
            </div>
        </Col>
    </Row>
  </ContainerFluid>
 {profileId}
 </>);
};

export default ProfileFullView;