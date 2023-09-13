import React from "react";
import { Card, Colors, ProgressBar, Select, Row, Col, TextBox } from "e-ui-react";

const MentionProfile = ()=> {
    return(<>
    <Card borderRadius={8}>
        <div style={{padding:'15px', borderBottom:"1px solid black"}}>
        <h5 class="bs-header"><b>1.Mention Profile</b>
        <span className="pull-right">
            <h5 class="bs-header" style={{color:"black"}}>20% Completed</h5>
            <ProgressBar type="danger" progress="20" height="5" />
         </span>
        </h5>
        </div>
        <div className="mtop15p mbot15p" style={{marginLeft:"5px", borderBottom:"1px solid black"}}>
        <Select
            label="You are creating Profile for"
            placeholder="Select options"
            options={[{ id: 'self', label: 'Self', value: 'Self' }]}
            className="navbar-layout"
            width="130"
            fontSize="12"
            />
        </div>
        <div className="mtop15p mbot15p">
            <Row>
                <Col xl={6} xxl={6}>
                    <div className="mtop15p" style={{marginLeft:"5px"}}>
                        <TextBox name="surname" label="Surname" placeholder="Enter your Surname" />
                    </div>
                    <div className="mtop15p" style={{marginLeft:"5px"}}>
                    <Select
                        label="Select your Gender"
                        placeholder="Select gender"
                        options={[{ id: 'male', label: 'Male-(Bridegroom)', value: 'Male' },
                                { id: 'female', label: 'Female-(Bride)', value: 'Female' }]}
                        className="navbar-layout"
                        width="130"
                        fontSize="12"
                    />
                    </div>
                    <div className="mtop15p" style={{marginLeft:"5px"}}>
                    <Select
                        label="Marital Status"
                        placeholder="Select Status"
                        options={[{ id: 'married', label: 'Married', value: 'Married' },
                                { id: 'notMarried', label: 'Not Married', value: 'NotMarried' },
                                { id: 'divorced', label: 'Divorced', value: 'Divorced' },
                                { id: 'widow', label: 'Widow', value: 'Widow' },
                                { id: 'widower', label: 'Widower', value: 'Widower' }]}
                        className="navbar-layout"
                        width="130"
                        fontSize="12"
                    />
                    </div>
                    
                </Col>
                <Col xl={6} xxl={6}>
                    <div className="mtop15p" style={{marginLeft:"5px", marginRight:"5px"}}>
                        <TextBox name="name" label="Name" placeholder="Enter your Name" />
                    </div>
                    <div className="mtop15p" style={{marginLeft:"5px", marginRight:"5px"}}>
                        <TextBox name="motherTongue" label="Mother Tongue" placeholder="Enter your Mother Tongue" />
                    </div>
                </Col>
            </Row>
        </div>
        {/* background-color: #630062;color: #fff; */}
        
    </Card>
    </>);
};

export default MentionProfile; 