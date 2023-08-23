import React from "react";
import { Card, Avatar, Badge, ContainerFluid, Row, Col, Icon } from "e-ui-react";

const DisplayCard = ()=>{
 return (<>
 <Card padding={15}>
    <div style={{ marginTop:'-3px' }}>
        <span style={{ backgroundColor:'dodgerBlue', padding:'5px', borderTopLeftRadius:'6px', borderTopRightRadius:'6px' }}>1991 Batch</span>
    </div>
    <div style={{ padding:'15px' }}>
        <ContainerFluid>
            <Row>
                <Col xl={4} xxl={4}>
                    <Avatar size={75} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" />
                </Col>
                <Col xl={8} xxl={8}>
                    <h5 className="bs-header" style={{ marginTop:'5px' }}>
                        <b>Anup Chakravarthi</b>
                    </h5>
                    <div style={{ marginTop:'5px' }}>
                      <span style={{ color:'#777' }}><i>Designation</i></span>
                    </div>
                    <div style={{ marginTop:'5px' }}>
                      <span style={{ color:'#777' }}>
                        <Icon type="FontAwesome" name="fa-home" />
                      </span>
                    </div>
                </Col>
            </Row>
        </ContainerFluid>
    </div>
 </Card>
 </>);
};

export default DisplayCard;