import React, { useEffect } from "react";
import { ContainerFluid, Row, Col, Card, Accordian  } from "e-ui-react";
import { getMatchCalculatorContext } from '@Pages/MatchCalculator/index.js';
import Kundalini from '@Pages/MatchCalculator/temp-data/kundalini.json';
import './index.css';

const KundaliniDesc = ()=>{
 const matchCalculatorContext = getMatchCalculatorContext();

 useEffect(()=>{
  console.log("calculatorFormData", matchCalculatorContext?.calculatorFormData);
 },[matchCalculatorContext?.calculatorFormData]);

const CandidateDetails = ({ title, details })=>{    
 return (<>
    <div align="center" style={{ backgroundColor:'#555', color:'#fff', padding:'8px', textTransform: 'uppercase' }}>
     <b>{title}</b>
    </div>
    <div className="table-responsive">
        <table className="table">
            <tbody style={{ backgroundColor:'#fff' }}>
            {Object.keys(details).map(key => (<tr key={key}><td><b>{key} :</b></td><td>{details[key]}</td></tr>))}
            </tbody>
        </table>
    </div>
 </>);
};

 const MatchScore = ()=>{
    return (<>
        <div align="center" style={{ fontSize:'14px' }}><b>MATCH SCORE</b></div>
        {/* Green bg- #dcffdd, border-#4caf50, color - #2b952f
            Red bg - #ffe6e5 border- #f44336, color - #d73c30 */}
        <div align="center" style={{ marginTop:'15px', fontSize:'22px', padding:'15px', border:'1px solid #4caf50', backgroundColor:'#dcffdd' }}><b>21.5 / 36</b></div>
        <div align="center" style={{ marginTop:'15px', color: '#4caf50' }}><b>Good to Proceed</b></div>
    </>);
 };

 const AccordianBuilder = ({ kundalini })=>{
    
    const AccordianHeader = ({ title, score, total })=>{
        return (<div>
            <h5 className="bs-header">
                <b>{title}
                    <div className="pull-right">( Score : <span style={{ paddingLeft:'5px', color:'dodgerBlue', fontSize:'16px' }}>{score}</span> / {total} )</div>
                </b>
            </h5>
            </div>);
    };

    const Kutami = ({ brideName, bridegroomName, details })=>{
        return (<ContainerFluid>
        <Row>
            <Col xl={5} xxl={4}>
                <CandidateDetails title={brideName} details={details?.bride} />
            </Col>
            <Col xl={4} xxl={4}>
                    <CandidateDetails title={bridegroomName} details={details?.bridegroom} />
            </Col>
            <Col xl={3} xxl={4}>
                <div align="right" style={{ marginTop:'10px', marginBottom:'15px', float: 'right' }}>
                {Object.keys(details?.result).map(key => (<>
                    <div style={{ float: 'left', marginRight:'15px' }}><b>{key} :</b></div>
                    <div style={{ float: 'left' }}>
                        <span style={{  padding:'10px', border: '1px solid #ccc', backgroundColor:'#eee' }}>
                            <b>{details?.result?.[key]}</b>
                        </span>
                    </div>
                </>))}
                </div>
            </Col>
        </Row>
        </ContainerFluid>);
    };

    const AccordianData = [];
    const brideName = kundalini?.bride?.["Name"];
    const bridegroomName = kundalini?.bridegroom?.["Name"];
    const kutamis = Object.keys( kundalini?.matchCompatibility );
    const matchScoreObtained = kundalini?.matchScore?.obtained;
    const matchScoreTotal = kundalini?.matchScore?.total;
    kutamis?.map((kutami, index)=>{
        const obtained = kundalini?.matchCompatibility?.[kutami]?.score?.obtained;
        const total = kundalini?.matchCompatibility?.[kutami]?.score?.total;
        AccordianData.push({
            id: kutami,
            title: (<AccordianHeader title={"#"+(index+1)+". "+kutami} score={obtained} total={total} />),
            component:(<Kutami brideName={brideName} bridegroomName={bridegroomName} details={kundalini?.matchCompatibility?.[kutami]} />)
        });
    });

    return (<>
    <Accordian id="AccordianExample" data={AccordianData} />
    <ContainerFluid>
        <Row>
            <Col xl={6} xxl={6}>
                <div style={{ paddingTop:'15px' }}>
                    <h5 className="bs-header"><b>TOTAL</b></h5>
                </div>
            </Col>
            <Col xl={6} xxl={6}>
                <div align="right" className="matchCalculator-kundalini-totalScore">
                    <h5 className="bs-header">
                        <b>( Score :  
                            <span style={{ paddingLeft:'5px', color:'dodgerBlue', fontSize:'16px' }}>
                                {matchScoreObtained}</span> / {matchScoreTotal} )</b>
                    </h5>
                </div>
            </Col>
        </Row>
    </ContainerFluid>
    </>);
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
                            <CandidateDetails title="BRIDE DETAILS" 
                                details ={{
                                            "Name": "TestName",
                                            "Zodiac Sign (Raasi)": "TestName",
                                            "Star (Nakshatram)": "TestName"
                                        }} />
                        </Col>
                        <Col xl={5} xxl={5}>
                            <CandidateDetails title="BRIDEGROOM DETAILS"
                                details ={{
                                    "Name": "TestName",
                                    "Zodiac Sign (Raasi)": "TestName",
                                    "Star (Nakshatram)": "TestName"
                                 }} />
                        </Col>
                        <Col xl={2} xxl={2}>
                            <MatchScore />
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col xl={12} xxl={12}>
                <div className="mtop15p">
                    <AccordianBuilder kundalini={Kundalini} />
                </div>
                
                
            </Col>
        </Row>
    </ContainerFluid>
 </>);
};

export default KundaliniDesc;