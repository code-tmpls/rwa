import React from "react";
import { useParams } from 'react-router-dom';
import { ContainerFluid, Row, Col, Avatar, Icon, Button } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BasicDetails from './components/BasicDetails/index.js';
import './index.css';

const ProfileFullView = ()=>{
 const { profileId } = useParams();
 const data = {};
 return (<>
  <Header menulinks={HeaderMenu} activeId="BrowseMatrimony" />
  <ContainerFluid>
    <Row>
        <Col xl={4} xxl={4}>
            <Row>
                <Col xl={4} xxl={4}>
                  <div className="mtop15p">
                    <Avatar size={120} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" />
                  </div>  
                </Col>
                <Col xl={8} xxl={8}>
                    <h4 className="bs-header mtop25p"><b>Narendra Modi</b></h4>
                    <div className="mtop5p">Profile created by Parent</div>
                    <div className="mtop15p">
                        <Icon type="FontAwesome" name="fa-user-o" size={16} style={{ marginLeft:'3px', marginRight:'5px' }} /> 
                        15 Oct 1991, 5 ft 6 in ( 172 cm )
                    </div>
                    <div className="mtop10p">
                        <Icon type="FontAwesome" name="fa-graduation-cap" size={16} style={{ marginRight:'5px' }} /> 
                        B.Tech (Electronics and Electrical Engineering)
                    </div>
                    <div className="mtop10p">
                        <Icon type="FontAwesome" name="fa-map-marker" size={16} style={{  marginLeft:'5px', marginRight:'12px' }} /> 
                        Hyderabad, India
                    </div>
                    <div className="mtop10p">
                        <Icon type="FontAwesome" name="fa-clock-o" size={16} style={{  marginLeft:'2px', marginRight:'12px' }} /> 
                        Activity 1 week ago
                    </div>
                </Col>
            </Row> 
            <Row>
                <Col xl={5} xxl={5}>
                    <div className="mtop15p">
                        <Button type="outline-primary" label="Add to your Shortlist" />
                    </div>
                </Col>
                <Col xl={6} xxl={6}>
                    <div align="left" className="mtop15p" style={{ color:'green' }}>
                     {data?.isRequestSent?(
                      <>
                         <Icon type="FontAwesome" name="fa-check" size="16" style={{ marginTop:'8px', marginRight:'5px' }} /> 
                      <b>Your Request Sent</b>
                      </>
                    ):(<Button type="success" label="Send your Request" size={11} />)}
                  </div>
                </Col>
            </Row>
            <Row>
                <Col xl={12} xxl={12}>
                    <BasicDetails />
                    <div style={{ marginTop:'15px', padding:'15px', backgroundColor:'#eee', borderRadius:'8px' }}>
                        <Row>
                            <Col xl={6} xxl={6}>
                            <table  class="table profileFullView" style={{ border:'0px' }}>
                                <tbody>
                                    <tr>
                                        <td><b>Profile created for :</b></td>
                                        <td>Son</td>
                                    </tr>
                                    <tr>
                                        <td><b>Height :</b></td>
                                        <td>5 ft 8 in</td>
                                    </tr>
                                </tbody>
                            </table>
                            </Col>
                            <Col xl={6} xxl={6}>
                            <table  class="table profileFullView" style={{ border:'0px' }}>
                                <tbody>
                                    <tr>
                                        <td><b>Gender :</b></td>
                                        <td>Male</td>
                                    </tr>
                                    <tr>
                                        <td><b>Age :</b></td>
                                        <td>31 years</td>
                                    </tr>
                                </tbody>
                            </table>
                            </Col>
                        </Row>
                    </div>
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