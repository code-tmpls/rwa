import React from "react";
import { ContainerFluid, Card } from "e-ui-react";
import ProfileDetail1 from "./ProfileDetail1/index.js";


const MentionProfile = ()=> {
    return(<>
        <ContainerFluid>
            <div className="bs-profile-table mbot15p">
            <Card className="intro" padding={15} borderRadius={10}>
                <ProfileDetail1 />
            </Card>
            </div>
        </ContainerFluid>
    </>);
};

export default MentionProfile; 
 {/* background-color: #630062;color: #fff; */} 