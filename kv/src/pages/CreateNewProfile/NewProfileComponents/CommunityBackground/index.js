import React from "react";
import { ContainerFluid, Card } from "e-ui-react";
import ProfileDetail2 from "./ProfileDetail2/index.js";

const CommunityBackground = ()=> {
    return(<>
    <ContainerFluid>
        <div className="bs-profile-table mbot15p">
            <Card className="intro" padding={15} borderRadius={10}>
                <ProfileDetail2 />
            </Card>
        </div>
    </ContainerFluid>
    </>);
};

export default CommunityBackground;