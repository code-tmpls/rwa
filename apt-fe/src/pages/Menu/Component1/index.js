import React from "react";
import { ContainerFluid ,Row ,Col, Card, Colors, Badge } from "e-ui-react";
import { Switch, Choice, Button, TextBox, ProgressBar, Hover } from "e-ui-react";

const Component1 = () =>{
return(<>
<ContainerFluid>
    <Row>
        <Col xl={4} xxl={4}>
      <div>
        <div style={{padding: '5px'}}>
            <h5>Section-A</h5><br />
            <Row><Col xl={6} xxl={6}><b>Marks: 25</b></Col>
            <Col xl={6} xxl={6}>
            <b>Questions: 10</b>
            </Col>
            </Row>
            </div>
            <div style={{padding: '5px'}}>
            <Card backgroundColor={Colors.light}>
                <Row>
                    <Col xl={6} xxl={6}><b>Questions</b>
                    <Row>
        <Col>
          <Badge type="success" label="01" size="12" style={{ marginRight: '5px', marginBottom: '5px' }} />

          <Badge type="success" label="02" size="12" style={{ marginRight: '5px', marginBottom: '5px' }} />

          <Badge type="success" label="03" size="12" style={{ marginRight: '5px', marginBottom: '5px' }} />

          <Badge type="danger" label="04" size="12" style={{ marginRight: '5px', marginBottom: '5px' }} />

          <Badge type="danger" label="05" size="12" style={{ marginRight: '5px', marginBottom: '5px' }} />

          <Badge type="success" label="06" size="12" style={{ marginRight: '5px', marginBottom: '5px' }} />

          <Badge type="warning" label="07" size="12" style={{ marginRight: '5px', marginBottom: '5px' }} />

          <Badge type="info" label="08" size="12" style={{ marginRight: '5px', marginBottom: '5px' }} />

          <Badge type="warning" label="09" size="12" style={{ marginRight: '5px', marginBottom: '5px' }} />

          <Badge type="info" label="10" size="12" style={{ marginRight: '5px', marginBottom: '5px' }} />
        </Col>
        </Row>
      </Col>
                    <Col xl={6} xxl={6}>
                    <Badge type="success" label="4" size="12" style={{ marginRight: '5px', marginBottom: '5px' }} /> <b> Questions Answered</b><br />
                    <Badge type="danger" label="2" size="12" style={{ marginRight: '5px', marginBottom: '5px' }} /> <b> Not Answered</b><br />
                    <Badge type="warning" label="4" size="12" style={{ marginRight: '5px', marginBottom: '5px' }} /> <b> Not Yet visited</b><br />
                    <Badge type="info" label="4" size="12" style={{ marginRight: '5px', marginBottom: '5px' }} /> <b> Review for Later</b><br />
                    </Col>
                 
                </Row>   
            </Card>
            </div>            
    </div>
        </Col>
        <Col xl={8} xxl={8}>
            <h4><b>Section-A</b></h4><br />
            <Row>
                <Col xl={4} xxl={4}>
                    <h4><b>Question-01</b></h4>
                    <div style={{padding:'5px'}}><b>Time Left !!!</b>
                      <ProgressBar type="info" progress="75" height="18" value="00:20:00" />
                      <div style={{paddingTop:'10px'}}><b>Average Time taken to solve a question:</b>
                      <TextBox name="surname" /></div>
                      <div style={{paddingTop:'5px'}}><Choice type="checkbox" id="numbers" name="numbers"
                    value={[{ id:1, label:"Mark for Review", value:"1"}]} 
                    disabled={false} />
                    </div> 
                    </div>
                    
                </Col>
                <Col xl={8} xxl={8}>
                  <div>
                <Switch type="radio" id="numbers" name="numbers" 
                    value={[{ id:1, label:"Clear Response", value:"Clear Response"}]} 
                    disabled={false} />
                    </div>
                <div>
                    <b><i>500 was invested at 12% per annum simple interest and a certain sum of money 
                    invested at 10% per annum simple interest. If the sum of the interest on both 
                    the sum after 4 years is 480, the latter sum of money is ?</i></b>
                    </div>
                    <div>
                      <Row>
                        <Col xl={4} xxl={4}><Choice type="radio" id="numbers" name="numbers"
                             value={[{ id:1, label:"450 ", value:"1"},
                                    { id:2, label:"750 ", value:"2" },
                                    { id:3, label:"600 ", value:"3" },
                                    { id:4, label:"550 ", value:"4" }]} 
                    disabled={false} />
                    </Col>
                    <Col xl={8} xxl={8}>
                    </Col>
                  </Row>
                  <div>
                    <Row>
                      <Col xl={6} xxl={6}>
                      <Button type="danger" label="Report Question" size={11} />
                      <Hover type="tooltip" placement="right" component={<Button type="secondary" label="Next Question" size={11} />} 
                  hoverContent="Click to go to the next question" />
                      </Col>
                    </Row>
                </div>
                    </div>
                </Col>
            </Row>            
         </Col>
    </Row>
</ContainerFluid>
</>);
};


export default Component1;