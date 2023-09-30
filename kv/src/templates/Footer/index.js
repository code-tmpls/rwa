import React from "react";
import { ContainerFluid, Row, Col, Icon, TextArea, Button } from "e-ui-react";
import './index.css';

const Footer = () =>{
    return(<div className="footer-title">
        <ContainerFluid>
            <Row style={{borderBottom:"2px solid #fff"}}>
                <Col xl={3} xxl={3}>
                    <div className="mtop15p" style={{marginLeft:"8px"}}>
                        <a className="navbar-brand" href="#">
                            <div style={{ fontFamily: 'kvfont001', fontSize:'22px', marginTop:'8px' }}>
                                <span style={{ color:'white', fontSize:"50px" }}>KalyanaVeena.com</span>
                            </div>
                        </a>
                    </div>
                    <div className="mbot15p text-white-50" style={{fontFamily:"Franklin Gothic Book", fontSize:"16px", marginLeft:"8px"}}>
                    Bringing Hearts Together with Love and Commitment <br/>
                    Your Trusted Partner in Matrimonial Bliss<br/>
                    Connecting Souls for a Lifetime of Happiness<br/>
                    Where Love Finds Its Perfect Match<br/>
                    </div>
                </Col>
                <Col xl={3} xxl={3}>
                    <div className="mtop15p mbot15p" style={{fontFamily:"Franklin Gothic Book", color:"#fff", paddingTop:"15px"}} align="center">
                    <h2>About Us</h2>
                    </div>
                    <div className="mtop15p mbot15p text-white-50" style={{fontFamily:"Franklin Gothic Book", fontSize:"16px", paddingTop:"8px"}} align="center">
                    Company<br/>
                    Community<br/>
                    Customers feedback<br/>
                    </div>
                </Col>
                <Col xl={3} xxl={3}>
                    <div className="mtop15p mbot15p" style={{fontFamily:"Franklin Gothic Book", color:"#fff", paddingTop:"15px"}} align="center">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="mtop15p mbot15p text-white" style={{fontFamily:"Franklin Gothic Book", fontSize:"16px", paddingTop:"8px"}} align="center">
                    <div className="input-group">
                        <Icon type="FontAwesome" name="fa-envelope-o" size={18} />
                        <span style={{marginLeft:"5px"}}>kalyanaveena.matrimonialservices@gmail.com</span>
                    </div>
                    <div className="mtop15p input-group">
                        <Icon type="FontAwesome" name="fa-phone" size={20} />
                        <span style={{marginLeft:"8px"}}><b>+91 -</b>8309675744</span>
                    </div>
                    </div>
                        <div className="mtop15p mbot15p">
                            <TextArea name="message" placeholder="Enter your Queries" lines={2} />
                        </div>
                        <div className="mtop15p mbot15p">
                            <Button type="warning" label="Send Message" size={11} />
                        </div>
                </Col>
                <Col xl={3} xxl={3}>
                    <div className="mtop15p mbot15p" style={{fontFamily:"Franklin Gothic Book", color:"#fff", paddingTop:"15px"}} align="center">
                        <h2>Follow Us</h2>
                    </div>
                    <div className="input-group">
                        <a href="https://www.facebook.com" target="_blank" className="text-white">
                        <div className="facebook social-media-icon mtop15p" style={{ width:'40px', height:'40px',padding:'10px', border:'1px solid #fff', borderRadius:"20px", marginRight:"8px" }}>
                            <Icon type="FontAwesome" name="fa-facebook" size={20} />
                        </div>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" className="text-white">
                        <div className="instagram  social-media-icon mtop15p" style={{ width:'40px', height:'40px',padding:'10px', border:'1px solid #fff', borderRadius:"20px", marginRight:"8px"  }}>
                            <Icon type="FontAwesome" name="fa-instagram" size={20} />
                        </div>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" className="text-white">
                        <div className="linkedin social-media-icon mtop15p" style={{ width:'40px', height:'40px',padding:'10px', border:'1px solid #fff', borderRadius:"20px", marginRight:"8px"  }}>
                            <Icon type="FontAwesome" name="fa-linkedin" size={20} />
                        </div>
                        </a>
                            <a href="https://www.twitter.com" target="_blank" className="text-white">
                            <div className="twitter  social-media-icon mtop15p" style={{ width:'40px', height:'40px',padding:'10px', border:'1px solid #fff', borderRadius:"20px", marginRight:"8px"  }}>
                                <Icon type="FontAwesome" name="fa-twitter" size={20} />
                            </div>
                            </a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl={6} xxl={6}>
                    <div className="mtop15p mbot15p input-group" style={{fontFamily:"Franklin Gothic Book", color:"#fff", paddingTop:"15px"}} align="center">
                    <Icon type="FontAwesome" name="fa-copyright" size={20} />
                        <h5 style={{marginLeft:"8px"}}>Designed and Developed by <b>ANUP HT-CLAN Pvt Ltd.</b></h5>
                    </div>
                </Col>
                <Col xl={6} xxl={6}>
                    
                </Col>
            </Row>
        </ContainerFluid>
    </div>);
};

export default Footer;