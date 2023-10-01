import React from "react";
import { Row, Col } from "e-ui-react";

const displayDetailsData = [{
    "title" : "Basic Details",
    "data" : {
        "Height" : "5 ft 6 in (174 cm)",
        "Age" : "31 years",
        "Martial Status" : "Unmarried",
        "Gender" : "Male",
        "Physical Status" : "Normal",
        "Mother Tongue" : "Telugu, Hindi, English"
    }
 },
 {
    "title" : "Religion Information",
    "data" : {
        "Religion" : "Hindu",
        "Caste" : "Brahmin Niyogi",
        "Subcaste" : "Aruvela Niyogi",
        "Gothram" : "Kaundinyasa",
        "Raasi" : "Makara (Capricorn)",
        "Star" : "Uthrashada",
        "Kuja Dosham" : "No"
    }
 },
 {
    "title" : "Professional Details",
    "data" : {
        "Education" : "B. Tech (Electronics and Electrical Engineering)",
        "Occupation" : "Software Professional",
        "Employed In" : "Private Sector",
        "Company" : "WIPRO Company, Benguluru",
        "Annual Income" : "Rs. 5 - 6 Lakhs"
    }
 }];

const Details = ()=>{

 const DisplayDetails = ({ title, data }) =>{
  const k = Object.keys(data); 
  return (<>
    <div className="mtop15p mbot15p" style={{borderBottom:"2px solid black"}}>
     <h4 className="bs-header" style={{marginBottom:"5px"}}><b>{title}</b></h4> 
    </div>
    <div style={{ borderRadius:'8px', backgroundColor:'#eee', padding:'15px' }}>
     {k?.map((dataKey, index)=>{
        return (<>
         <div className={(index>0?"mtop10p":"")}>
          <Row>
           <Col xl={4} xxl={4}>
             <b>{dataKey} <span className="pull-right">:</span></b>
           </Col>
           <Col xl={8} xxl={8}>{data?.[dataKey]}</Col>
          </Row>
         </div>    
        </>);
     })}
    </div>
  </>);
 };

 return (<>
 {displayDetailsData?.map((displayData)=>{
    return (<>
     <DisplayDetails title={displayData?.title} data={displayData?.data} />
    </>);
 })}
 </>);
};

export default Details;