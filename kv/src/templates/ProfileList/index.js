import React from "react";
import { Col } from "e-ui-react";
import MatrimonyList from '@TempData/matrimony-list.json';
import DisplayCard from './components/DisplayCard/index.js';

const ProfileList = () =>{
 return (<>
 {MatrimonyList?.map((data, index)=>{
  return (<Col xl={4} xxl={3}>
    <DisplayCard data={data} index={index} />
  </Col>);
 })}
 </>);
};

export default ProfileList;