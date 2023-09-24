import React from "react";
import { ContainerFluid, Col, Row, Select, TextBox, Button, DateTimePicker } from "e-ui-react";

const ProfileDetail2 = ()=>{
return(<>
    <div className="bs-profile-headers mbot15p">
        2. Birth, Zodiac and Community Background
    </div>
    <div className="bs-profile-contents mtop15p">
        <Row>
            <Col xl={6} xxl={6}>
            <div className="mtop15p">
                <DateTimePicker label="Date and Time of Birth" type="dateTimePicker" id="dateTime" name="dateTime" />
            </div>
            <div className="mtop15p mbot15p">
                    <Select
                        placeholder="Select Shakha"
                        label="Shakha"
                        options={[{ id: 'one', label: '1 Feet', value: '1' }]}
                        className="navbar-layout"
                        fontSize="12"
                    />
                </div>
                <div className="mtop15p mbot15p">
                    <Select
                        placeholder="Select Upa shakha"
                        label="Upa shakha"
                        options={[{ id: 'one', label: '1 Feet', value: '1' }]}
                        className="navbar-layout"
                        fontSize="12"
                    />
                </div>
                <div className="mtop15p mbot15p">
                    <Select
                        placeholder="Select Gothram"
                        label="Gothram"
                        options={[{ id: 'one', label: '1 Feet', value: '1' }]}
                        className="navbar-layout"
                        fontSize="12"
                    />
                </div>
                <div className="mtop15p mbot15p">
                    <Select
                        placeholder="Select Raashi (Zodiac-sign)"
                        label="Raasi (Zodiac-sign)"
                        options={[{ id: 'aries', label: 'Aries (Mesha Raasi)', value: 'Aries' },
                        { id: 'taurus', label: 'Taurus (Vrushaba Raasi)', value: 'Taurus' },
                        { id: 'gemini', label: 'Gemini (Midhuna Raasi)', value: 'Gemini' },
                        { id: 'cancer', label: 'Cancer (Karkataka Raasi)', value: 'Cancer' },
                        { id: 'aries', label: 'Aries (Mesha Raasi)', value: 'Aries' },
                        { id: 'aries', label: 'Aries (Mesha Raasi)', value: 'Aries' },
                        { id: 'aries', label: 'Aries (Mesha Raasi)', value: 'Aries' },
                        { id: 'aries', label: 'Aries (Mesha Raasi)', value: 'Aries' }
                    ]}
                        className="navbar-layout"
                        fontSize="12"
                    />
                </div>
            </Col>
            <Col xl={6} xxl={6}>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="bornCountry" label="Born Country" placeholder="Enter the Country Name" />
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="bornState" label="Born State" placeholder="Enter the State Name" />
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="bornLocation" label="Born Location" placeholder="Enter the Location" />
                </div>
                <div className="mtop15p mbot15p">
                    <TextBox name="highestDegree" label="Highest Degree" placeholder="Enter your Highest Degree" />
                </div>
                <div className="mtop15p mbot15p">
                <Select
                    placeholder="Select Living Status"
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
            </Col>
        </Row>
        </div>
            <div className="mtop15p mbot15p" align="center">
                <Button type="primary" label="Next" size={11} />
            </div>

</>);
};

export default ProfileDetail2;