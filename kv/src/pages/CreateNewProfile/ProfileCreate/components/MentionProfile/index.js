import React from "react";
import Header from "./../../commons/header.js";
import { ContainerFluid, Col, Row, Select, TextBox, Button, ProgressBar, Card } from "e-ui-react";

const MentionProfile = ()=> {
    return(<>
        <ContainerFluid>
            <div className="bs-profile-table mbot15p">
            <Card className="intro" padding={15} borderRadius={10}>
            <Header title="1. Mention Profile" />
    <div className="bs-profile-contents">
        <Select
            placeholder="Select an option"
            label="You are creating Profile for"
            options={[{ id: 'self', label: 'Self', value: 'Self' }]}
            className="navbar-layout"
            width="250"
            fontSize="12"
        />
    </div>
    <div className="bs-profile-contents mtop15p">
        <Row>
            <Col xl={6} xxl={6}>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                    <TextBox name="surname" label="Surname" placeholder="Enter your Surname" />
                </div>
                <div className="mtop15p mbot15p">
                <Select
                    placeholder="Select your Gender"
                    label="Gender"
                    options={[{ id: 'bride', label: 'Women (Bride)', value: 'Women' },
                    { id: 'brideGroom', label: 'Men (BrideGroom)', value: 'Men' }]}
                    className="navbar-layout"
                    width="100%"
                    fontSize="12"
                />
                </div>
                <div className="mtop15p mbot15p">
                <Select
                    placeholder="Select your Marital Status"
                    label="Status"
                    options={[{ id: 'married', label: 'Married', value: 'Married' },
                    { id: 'unmarried', label: 'Not Married', value: 'Unmarried' },
                    { id: 'divorced', label: 'Divorced', value: 'Divorced' },
                    { id: 'widow', label: 'Widow', value: 'Widow' },
                    { id: 'widower', label: 'Widower', value: 'Widower' }]}
                    className="navbar-layout"
                    width="100%"
                    fontSize="12"
                />
                </div>
                <div className="mtop15p mbot15p" style={{paddingTop:"32px"}}>
                    <TextBox name="occupation" label="Occupation" placeholder="Enter your Occupation" />
                </div>
                <div className="mtop15p mbot15p">
                    <TextBox name="occupationType" label="Occupation Type" placeholder="Enter your Occupation Type" />
                </div>
            </Col>
            <Col xl={6} xxl={6}>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="name" label="Name" placeholder="Enter your Name" />
                </div>
                <div className="mtop15p mbot15p">
                    <TextBox name="motherTongue" label="Mother Tongue" placeholder="Enter your Mother Tongue" />
                </div>
                <div className="mtop15p mbot15p">
                    <Select
                        placeholder="Feet"
                        label="Height"
                        options={[{ id: 'one', label: '1 Feet', value: '1' },
                        { id: 'two', label: '2 Feet', value: '2' },
                        { id: 'three', label: '3 Feet', value: '3' },
                        { id: 'four', label: '4 Feet', value: '4' },
                        { id: 'five', label: '5 Feet', value: '5' },
                        { id: 'six', label: '6 Feet', value: '6' },
                        { id: 'seven', label: '7 Feet', value: '7' },
                        { id: 'eight', label: '8 Feet', value: '8' }
                    ]}
                        className="navbar-layout"
                        fontSize="12"
                    />
                        <Select
                        placeholder="Inches"
                        options={[{ id: 'one', label: '1 Inches', value: '1' },
                        { id: 'two', label: '2 Inches', value: '2' },
                        { id: 'three', label: '3 Inches', value: '3' },
                        { id: 'four', label: '4 Inches', value: '4' },
                        { id: 'five', label: '5 Inches', value: '5' },
                        { id: 'six', label: '6 Inches', value: '6' },
                        { id: 'seven', label: '7 Inches', value: '7' },
                        { id: 'eight', label: '8 Inches', value: '8' },
                        { id: 'nine', label: '9 Inches', value: '9' },
                        { id: 'ten', label: '10 Inches', value: '10' },
                        { id: 'eleven', label: '11 Inches', value: '11' },
                        { id: 'twelve', label: '12 Inches', value: '12' },
                    ]}
                        className="navbar-layout"
                        fontSize="12"
                    />
                </div>
                <div className="mtop15p mbot15p">
                    <TextBox name="highestDegree" label="Highest Degree" placeholder="Enter your Highest Degree" />
                </div>
                <div className="mtop15p mbot15p">
                <Select
                    placeholder="Select Living Status"
                    label="Living Status"
                    options={[{ id: 'married', label: 'Married', value: 'Married' },
                    { id: 'unmarried', label: 'Not Married', value: 'Unmarried' },
                    { id: 'divorced', label: 'Divorced', value: 'Divorced' },
                    { id: 'widow', label: 'Widow', value: 'Widow' },
                    { id: 'widower', label: 'Widower', value: 'Widower' }]}
                    className="navbar-layout"
                    width="100%"
                    fontSize="12"
                />
                </div>
            </Col>
        </Row>
        </div>
            <div className="mtop15p mbot15p" align="center">
                <Button type="primary" label="Next" size={11} />
            </div>
            </Card>
            </div>
        </ContainerFluid>
    </>);
};

export default MentionProfile; 
 {/* background-color: #630062;color: #fff; */} 