import React from "react";
import { Link } from "react-router-dom";
import { Card, Avatar, Badge, Button, ContainerFluid, Row, Col, Icon, Colors } from "e-ui-react";

const DisplayCard = ({ index })=>{
 const bgColors = ["#fbf4f4", "#eefbef", "#fdefff", "#fff6e9", "#eaf6ff"];
 return (<div style={{ marginBottom:'15px' }}>
 <Card backgroundColor={bgColors[index]} style={{ border:'2px solid #953062' }}>
    <div style={{ margin: '15px 5px' }}>
        <ContainerFluid>
            <Row>
                <Col xl={4} xxl={4}>
                    <div className="mtop5p">
                        <Avatar size={95} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" 
                            border={{ color:"#953062", size: 2 }} />
                    </div>
                </Col>
                <Col xl={8} xxl={8}>
                    <div style={{ paddingLeft:'8px' }}>
                    <h5 className="bs-header" style={{ marginTop:'5px' }}>
                        <b>Anup Chakravarthi</b>
                    </h5>
                    <div style={{ marginTop:'5px' }}>
                      <span style={{ color:'#777' }}>5' 6'' Height, Older by 5 years</span>
                    </div>
                    <div style={{ marginTop:'5px' }}>
                      <span style={{ color:'#555' }}>
                        <b><i>Working as Software Professional in WIPRO Company, Bangalore.</i></b>
                      </span>
                    </div>
                    </div>
                </Col>
            </Row>
            <Row>
              <Col xl={12} xxl={12}>
                <div className="mtop15p">
                  <Link to="#">
                    <Badge type="primary" label="Domestic Stay" size={11} style={{ marginBottom:'5px', marginRight:'5px' }} />
                  </Link>
                  <Link to="#">
                    <Badge type="primary" label="Domestic Work Permit" size={11} style={{ marginBottom:'5px', marginRight:'5px' }} />
                  </Link>
                  <Link to="#">
                    <Badge type="primary" label="Abroad Stay" size={11} style={{ marginBottom:'5px', marginRight:'5px' }} />
                  </Link>
                  <Link to="#">
                    <Badge type="primary" label="Abroad Work Permit" size={11} style={{ marginBottom:'5px', marginRight:'5px' }}  />
                  </Link>
                  <Link to="#">
                    <Badge type="primary" label="IT Techie Job" size={11} style={{ marginBottom:'5px', marginRight:'5px' }}  />
                  </Link>
                  <Link to="#">
                    <Badge type="primary" label="IT Techie Job" size={11} style={{ marginBottom:'5px', marginRight:'5px' }}  />
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
                <Col xl={9} xxl={9}>
                 <div style={{ marginTop:'10px' }}>
                      <span style={{ color:'#777' }}>
                        <Icon type="FontAwesome" name="fa-map-marker" size="16" style={{ color:'#f71100', marginRight:'5px' }} /> 
                        <b>Living in Hyderabad, India</b>
                      </span>
                 </div>
                </Col>
                <Col xl={3} xxl={3}>
                 <div align="right" style={{ marginTop:'5px', color: '#953062' }}>
                    <Icon type="FontAwesome" name="fa-arrow-circle-right" size="36" style={{ cursor:'pointer' }} />
                 </div>
                </Col>
            </Row>
        </ContainerFluid>
    </div>
 </Card>
 </div>);
};

export default DisplayCard;