import React from "react";
import { Card, Colors } from 'e-ui-react';
import Queries from './Queries/index.js';

const RecentQA = ()=>{
    return(<>
     <div style={{ padding:'15px' }}>
        <Card backgroundColor={Colors.light}>
        <Queries />
        </Card>
        </div>
    </>)
};
export default RecentQA;