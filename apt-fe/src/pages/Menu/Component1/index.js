import React from "react";
import { ContainerFluid ,Row ,Col, Card, Colors, Badge } from "e-ui-react";

const Component1 = () =>{
return(<>
<ContainerFluid>
    <Row>
        <Col xl={3} xxl={3}>
        <div style={{ textAlign: 'center' }}>
            <h4><b>Sections</b></h4>
            <hr/>
        </div>
        <div>
            <h5>Section-A</h5>
            <br />
            <Row><Col xl={6} xxl={6}>
            <b>Marks: 25</b>
            </Col>
            <Col xl={6} xxl={6}>
            <b>Questions: 10</b>
            </Col>
            </Row>
            </div>
            <div>
            <Card backgroundColor={Colors.light}>
                <Row>
                    <Col xl={8} xxl={8}><b>Questions</b>
                    <Row>
        <Col>
          <Badge type="dark" label="01" size="12" style={{ marginRight: '5px' }} />
        </Col>
        <Col>
          <Badge type="dark" label="02" size="12" style={{ marginRight: '5px' }} />
        </Col>
        <Col>
          <Badge type="dark" label="03" size="12" style={{ marginRight: '5px' }} />
        </Col>
        <Col>
          <Badge type="dark" label="04" size="12" style={{ marginRight: '5px' }} />
        </Col>
        <Col>
          <Badge type="dark" label="05" size="12" style={{ marginRight: '5px' }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Badge type="dark" label="06" size="12" style={{ marginRight: '5px' }} />
        </Col>
        <Col>
          <Badge type="dark" label="07" size="12" style={{ marginRight: '5px' }} />
        </Col>
        <Col>
          <Badge type="dark" label="08" size="12" style={{ marginRight: '5px' }} />
        </Col>
        <Col>
          <Badge type="dark" label="09" size="12" style={{ marginRight: '5px' }} />
        </Col>
        <Col>
          <Badge type="dark" label="10" size="12" style={{ marginRight: '5px' }} />
        </Col>
      </Row>
      </Col>
                    <Col xl={4} xxl={4}>
                        Questions Answered:
                        <br />
                        Not Answered:
                        <br />
                        Left by Seen:
                        <br />
                    </Col>
                 
                </Row>   
            </Card>
            </div>
            
        </Col>
        <Col xl={4} xxl={4}>
            <Row>
                <Col xl={4} xxl={4}>
                    <h4><b>Question-01</b></h4>
                </Col>
                <Col xl={8} xxl={8}>
                <div>
                    <b><i>500 was invested at 12% per annum simple interest and a certain sum of money 
                    invested at 10% per annum simple interest. If the sum of the interest on both 
                    the sum after 4 years is 480, the latter sum of money is ?</i></b>
                    </div>
                </Col>
            </Row>
        </Col>
        <Col xl={5} xxl={5}>
        
        </Col>
    </Row>
</ContainerFluid>
</>);
};


export default Component1;