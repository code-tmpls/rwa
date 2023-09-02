import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, Icon, Carousel, Badge, Card, Colors } from "e-ui-react";
import './index.css';

const Component1 = ()=>{
    return (<div className="section1Component">
     <h4 className="bs-header">Section #1</h4>
     <div>
     Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, 
     molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin 
     viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
     </div>
    </div>);
  };
 
  const Component2 = ()=>{
   return (<div className="section2Component">
     <h4 className="bs-header">Section #2</h4>
     <div>
     Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, 
     molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin 
     viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
     </div>
   </div>);
  };
 
  const Component3 = ()=>{
   return (<div className="section3Component">
     <h4 className="bs-header">Section #3</h4>
     <div>
     Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, 
     molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin 
     viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
    </div>
   </div>);
  };

  let data = [<>
    <img src="https://www.w3schools.com/bootstrap/la.jpg" class="d-block w-100" alt="..." />
    <div class="carousel-caption d-none d-md-block">
      <h4 className="bs-header">USA</h4>
      <p>Study Masters in Top Universities of USA with <b><i>Vk Abroad Consultancy</i></b></p>
    </div>
  </>,
  <><img src="https://www.w3schools.com/bootstrap/chicago.jpg" class="d-block w-100" alt="..." />
  <div class="carousel-caption d-none d-md-block">
      <h4 className="bs-header">USA</h4>
      <p>Study Masters in Top Universities of USA with <b><i>Vk Abroad Consultancy</i></b></p>
    </div>
  </>,
  <><img src="./assets/logo/home.png" class="d-block w-100" alt="..." />
  <div class="carousel-caption d-none d-md-block" style={{color:"black"}}>
      <h4 className="bs-header">USA</h4>
      <p>Study Masters in Top Universities of USA with <b><i>Vk Abroad Consultancy</i></b></p>
    </div>
  </>];

const HeaderContent = ()=>{
    return(<>
        <div style={{backgroundColor:"#006EB3", color:"white"}}>
            <ContainerFluid>
                <Row>
                    <Col xl={1} xxl={1}>
                    </Col>
                    <Col xl={7} xxl={7}>
                        <div className="mtop5p mbot5p" align="left">
                            <Icon type="FontAwesome" name="fa-envelope" size={16} /> info@vkAbroadconsultancy.com
                        </div>
                    </Col>
                    <Col xl={4} xxl={4}>
                    <div className="mtop5p mbot5p" align="left">
                        <Icon type="FontAwesome" name="fa-plane" size={20} style={{ marginRight: '10px' }} />
                        <span style={{ marginRight: '10px' }}><b>USA</b></span>
                        <span style={{ marginRight: '10px' }}><b>UK</b></span>
                        <span style={{ marginRight: '10px' }}><b>AUS</b></span>
                        <span style={{ marginRight: '10px' }}><b>CANADA</b></span>
                        <span><i>+ Many More</i></span>
                    </div>
                    </Col>
                </Row>
            </ContainerFluid>
        </div>
    </>);
};

const Home = ()=>{
 return (<>
 <HeaderContent />
 <Header menulinks={HeaderMenu} activeId="Home" />
 <Carousel data={data} />
 <div style={{height:"80px"}}></div>
 <div className="mbot15p">
    <div align="center" className="mtop15p mbot15p" style={{height:"100px"}}><Badge type="primary" model="rounded-pill" label="Our Edge" size="20"/></div>
    <ContainerFluid>
        <Row>
            <Col xl={4} xxl={4}>
                <div className="mto15p" style={{padding:"0 30px"}}>
                    <Card className="intro" padding={15} style={{height:"250px", 
                        width:"340px", backgroundColor:"#D2D0D0"}}>
                        <div align="center" style={{marginTop:"20px"}}><Icon type="FontAwesome" name="fa-book" size={46} style={{color:"dodgerblue"}}/></div>
                        <div className="mtop15p" align="center" style={{marginTop:"20px"}}><h3>Free Expert Guidance</h3></div>
                    </Card>
                </div>
            </Col>
            <Col xl={4} xxl={4}>
            <div className="mto15p" style={{padding:"0 30px"}}>
                    <Card className="intro" padding={15} style={{height:"250px", 
                        width:"340px", backgroundColor:"#D2D0D0"}}>
                        <div align="center" style={{marginTop:"20px"}}><Icon type="FontAwesome" name="fa-pencil" size={46} style={{color:"brown"}}/></div>
                        <div className="mtop15p" align="center" style={{marginTop:"20px"}}><h3>Identify and Suggest Courses</h3></div>
                    </Card>
                </div>
            </Col>
            <Col xl={4} xxl={4}>
            <div className="mto15p" style={{padding:"0 30px"}}>
                    <Card className="intro" padding={15} style={{height:"250px", 
                        width:"340px", backgroundColor:"#D2D0D0"}}>
                        <div align="center" style={{marginTop:"20px"}}><Icon type="FontAwesome" name="fa-check-circle-o" size={46} style={{color:"green"}}/></div>
                        <div className="mtop15p" align="center" style={{marginTop:"20px"}}><h3>Verify Financials & Visa Processing</h3></div>
                    </Card>
                </div>
            </Col>
        </Row>
    </ContainerFluid>
 </div>
 </>);
};

export default Home;