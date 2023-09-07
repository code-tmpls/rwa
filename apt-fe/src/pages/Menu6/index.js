import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { CardSlider, ContainerFluid, Col, Row, Avatar } from "e-ui-react";



const HomeTestimonial1 = ()=> {
  return(<>
  <div className="mtop15p" align="center">
      <h1 style={{fontFamily:"cursive"}}>Customers Review</h1>
      <Avatar size={100} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" />
      <Row>
          <Col xl={1} xxl={1}></Col>
          <Col xl={10} xxl={10}>
              <div className="mtop15p mbot15p text-black-50" align="center">
                  <h5 style={{fontFamily:"sans-serif"}}>
                  "The guidance I received from VK Abroad consultancy in preparing for my study abroad 
                  experience was invaluable. They helped me navigate through the visa application process, 
                  ensuring I had all the necessary documents in order. Their personalized approach made me 
                  feel valued and supported throughout my study abroad journey. Thank you for being available 
                  and responsive through phone calls and WhatsApp whenever required"
                  </h5>
              </div>
          </Col>
          <Col xl={1} xxl={1}></Col>
      </Row>
  </div>
  </>);
  };
  

const content = [
    {
      backgroundColor:'red',
      staticDisplay: (<div align="center">Test#1</div>),
      content: (<div><HomeTestimonial1 /></div>)
    },
    {
      backgroundColor:'green',
      staticDisplay: (<div align="center">Test#2</div>),
      content: (<div>Hello World</div>)
    },
    {
      backgroundColor:'yellow',
      staticDisplay: (<div align="center">Test#3</div>),
      content: (<div>Hello World</div>)
    },
    {
      backgroundColor:'orange',
      staticDisplay: (<div align="center">Test#4</div>),
      content: (<div>Hello World</div>)
    },
    {
      backgroundColor:'purple',
      staticDisplay: (<div align="center">Test#5</div>),
      content: (<div>Hello World</div>)
    },
  ];


const Menu6 = ()=>{
 return (<>
  <Header menulinks={HeaderMenu} activeId="Menu6" />
  <ContainerFluid>
    <Row>
        <Col xl={2} xxl={2}></Col>
        <Col xl={8} xxl={8}>
            <div className="mtop15p">
                <CardSlider template={1} content={content} />
            </div>
        </Col>
        <Col xl={2} xxl={2}></Col>
    </Row>
  </ContainerFluid>
  
 </>);
};

export default Menu6;