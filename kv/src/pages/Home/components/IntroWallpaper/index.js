import React from "react";
import ProfileSearchForm from './components/ProfileSearchForm/index.js'; 
import { ContainerFluid, Row, Col, LazyBackgroundImage, UrlParams } from "e-ui-react";
import './index.css';

const IntroWallpaper = () =>{
   // const img = 'https://matchthemes.com/demohtml/tilia/images/home/slider-1.jpg';
    const img = UrlParams().baseUrl+'assets/images/matrimony-wallpaper.jpg';
    return (<>  
    <LazyBackgroundImage src={img} alt="My Image" className="home-intro-wallpaper">
        <ContainerFluid style={{ paddingTop:'15px' }}>
            <Row>
                <Col xl={8} xxl={9}></Col>
                <Col xl={4} xxl={3}>
                    <ProfileSearchForm />
                </Col>
            </Row>
        </ContainerFluid>
     </LazyBackgroundImage>
    </>);
};

export default IntroWallpaper;