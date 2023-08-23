import React, { useEffect } from "react";
import { ContainerFluid, Row, Col, Card, Accordian  } from "e-ui-react";
import { getMatchCalculatorContext } from '@Pages/MatchCalculator/index.js';

const KundaliniDesc = ()=>{
 const matchCalculatorContext = getMatchCalculatorContext();
 useEffect(()=>{
  console.log("calculatorFormData", matchCalculatorContext?.calculatorFormData);
 },[matchCalculatorContext?.calculatorFormData]);

 const AccordianHeader = ({ title, score, total })=>{
    return (<div>
        <h5 className="bs-header">
            <b>{title}
                <div className="pull-right">(Score: <span style={{ color:'dodgerBlue', fontSize:'16px' }}>{score}</span> / {total})</div>
            </b>
        </h5>
        </div>);
 };

 return (<>
    <ContainerFluid>
        <Row>
          <Col xl={12} xxl={12}>
            <div style={{ color:'#953062' }}>
              <h3 className="bs-header" style={{ borderBottom:'2px solid #953062', marginBottom:'15px' }}>
                <b>Ashtakootami Kundalini Matching</b>
              </h3>
            </div>
          </Col>
        </Row>
        <Row>
            <Col xl={12} xxl={12}>
                <Card padding={15} backgroundColor="#fff6e9" style={{  border:'2px solid #953062' }}>
                    <Row>
                        <Col xl={5} xxl={5}>
                            <div align="center" style={{ backgroundColor:'#555', color:'#fff', padding:'8px' }}><b>BRIDE DETAILS</b></div>
                            <div className="table-responsive">
                                <table className="table">
                                 <tbody style={{ backgroundColor:'#fff' }}>
                                    <tr><td><b>Name :</b></td><td>Test Name</td></tr>
                                    <tr><td><b>Zodiac Sign (Raasi) :</b></td><td>Test Name</td></tr>
                                    <tr><td><b>Star (Nakshatram) :</b></td><td>Test Name</td></tr>
                                 </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col xl={5} xxl={5}>
                            <div align="center" style={{ backgroundColor:'#555', color:'#fff', padding:'8px' }}><b>BRIDEGROOM DETAILS</b></div>
                            <div className="table-responsive">
                                <table className="table">
                                 <tbody style={{ backgroundColor:'#fff' }}>
                                    <tr><td><b>Name :</b></td><td>Test Name</td></tr>
                                    <tr><td><b>Zodiac Sign (Raasi) :</b></td><td>Test Name</td></tr>
                                    <tr><td><b>Star (Nakshatram) :</b></td><td>Test Name</td></tr>
                                 </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col xl={2} xxl={2}>
                            <div align="center" style={{ fontSize:'14px' }}><b>MATCH SCORE</b></div>
                            {/* Green bg- #dcffdd, border-#4caf50, color - #2b952f
                                Red bg - #ffe6e5 border- #f44336, color - #d73c30 */}
                            <div align="center" style={{ marginTop:'15px', fontSize:'22px', padding:'15px', border:'1px solid #4caf50', backgroundColor:'#dcffdd' }}><b>21.5 / 36</b></div>
                            <div align="center" style={{ marginTop:'15px', color: '#4caf50' }}><b>Good to Proceed</b></div>
                        </Col>
                    </Row>
                    
                </Card>
            </Col>
            <Col xl={12} xxl={12}>
                <div className="mtop15p">
                    <Accordian id="AccordianExample" 
                    data={[
                        {   id:"Item#1", 
                            title: ( <AccordianHeader title="#1. Varna Kutami" score={1} total={1} />), component:"This is the first item's accordion body"  },
                        { id:"Item#2", title: (<AccordianHeader title="#2. Vashya Kutami" score={1} total={2} />), component:"This is the Second item's accordion body"  },
                        { id:"Item#3", title: (<AccordianHeader title="#3. Tarabhalam Kutami" score={1} total={3} />), component:"This is the Third item's accordion body"  },
                        { id:"Item#3", title: (<AccordianHeader title="#4. Yoni Kutami" score={1} total={4} />), component:"This is the Third item's accordion body"  },
                        { id:"Item#3", title: (<AccordianHeader title="#5. Graha Kutami" score={1} total={5} />), component:"This is the Third item's accordion body"  },
                        { id:"Item#3", title: (<AccordianHeader title="#6. Gana Kutami" score={1} total={6} />), component:"This is the Third item's accordion body"  },
                        { id:"Item#3", title: (<AccordianHeader title="#7. Bhakoot Kutami" score={1} total={7} />), component:"This is the Third item's accordion body"  },
                        { id:"Item#3", title: (<AccordianHeader title="#8. Nadi Kutami" score={1} total={8} />), component:"This is the Third item's accordion body"  }
                        ]}  />
                </div>
                
                
            </Col>
        </Row>
    </ContainerFluid>
 </>);
};

export default KundaliniDesc;