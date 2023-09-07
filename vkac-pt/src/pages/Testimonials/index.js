import React from "react";
import { ContainerFluid, Row, Col, Avatar, CardSlider } from "e-ui-react";

const HomeTestimonial1 = ()=> {
return(<>
<div>
    <h1 style={{fontFamily:"cursive"}}>Customers Review</h1>
    <Avatar size={100} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" />
</div>
</>);
};

const HomeTestimonials = [
    {
      backgroundColor:'#cee5fd',
      content: (<div className="mtop15p" style={{color:"black"}}>
                "The guidance I received from VK Abroad consultancy in preparing for my study abroad 
                experience was invaluable. They helped me navigate through the visa application process, 
                ensuring I had all the necessary documents in order. Their personalized approach made me 
                feel valued and supported throughout my study abroad journey. Thank you for being available 
                and responsive through phone calls and WhatsApp whenever required"
              </div>)
    },
    {
      backgroundColor:'#d7f9f0',
      content: (<div className="mtop15p" style={{color:"black"}}>
      "The guidance I received from VK Abroad consultancy in preparing for my study abroad 
      experience was invaluable. They helped me navigate through the visa application process, 
      ensuring I had all the necessary documents in order. Their personalized approach made me 
      feel valued and supported throughout my study abroad journey. Thank you for being available 
      and responsive through phone calls and WhatsApp whenever required"
    </div>)
    },
    {
      backgroundColor:'#f8f9fa',
      content: (<div className="mtop15p" style={{color:"black"}}>
      "The guidance I received from VK Abroad consultancy in preparing for my study abroad 
      experience was invaluable. They helped me navigate through the visa application process, 
      ensuring I had all the necessary documents in order. Their personalized approach made me 
      feel valued and supported throughout my study abroad journey. Thank you for being available 
      and responsive through phone calls and WhatsApp whenever required"
    </div>)
    },
    {
      backgroundColor:'#ffa8fc',
      content: (<div className="mtop15p" style={{color:"black"}}>
      "The guidance I received from VK Abroad consultancy in preparing for my study abroad 
      experience was invaluable. They helped me navigate through the visa application process, 
      ensuring I had all the necessary documents in order. Their personalized approach made me 
      feel valued and supported throughout my study abroad journey. Thank you for being available 
      and responsive through phone calls and WhatsApp whenever required"
    </div>)
    },
    {
      backgroundColor:'#f8f9fa',
      content: (<div className="mtop15p" style={{color:"black"}}>
      "The guidance I received from VK Abroad consultancy in preparing for my study abroad 
      experience was invaluable. They helped me navigate through the visa application process, 
      ensuring I had all the necessary documents in order. Their personalized approach made me 
      feel valued and supported throughout my study abroad journey. Thank you for being available 
      and responsive through phone calls and WhatsApp whenever required"
    </div>)
    },
  ];

const Testimonials =()=> {
return(<>
            <div className="mtop15p mbot15p">
            <CardSlider template={1} content={HomeTestimonials} />
            </div>
</>);
};

export default Testimonials;