import React from "react";
import { Pill, Colors, Card, UrlParam3 } from "e-ui-react";
import MentionProfile from "@Pages/CreateNewProfile/NewProfileComponents/MentionProfile/index.js";
import CommunityBackground from "./CommunityBackground/index.js";

   
   const ContactInformation = ()=>{
    return (<>
     <div>
       <Card padding={15}>
        Menu#2 Component
       </Card>
     </div>
    </>);
   };
   
   const FamilyBackground = ()=>{
    return (<>
     <div>
       <Card padding={15}>
        Menu#2 Component
       </Card>
     </div>
    </>);
   };

   const PreferenceOfSpouse = ()=>{
    return (<>
     <div>
       <Card padding={15}>
        Menu#2 Component
       </Card>
     </div>
    </>);
   };

   const UploadPicture = ()=>{
    return (<>
     <div>
       <Card padding={15}>
        Menu#2 Component
       </Card>
     </div>
    </>);
   };

   const Finish = ()=>{
    return (<>
     <div>
       <Card padding={15}>
        Menu#2 Component
       </Card>
     </div>
    </>);
   };

  //  const url = UrlParams().baseUrl;

const NewProfileComponents = ()=> {
    return(<>
   

    <Pill mode="vertical" 
        layout={{
            menu:{ xs:'3', sm:'3', md:'3', lg:'3', xl:'3', xxl:'3' },
            content:{  xs:'9', sm:'9', md:'9', lg:'9', xl:'9', xxl:'9' }
        }}
        menulinks={[
            { id:'MentionProfile', url:'Authentication/#MentionProfile', label:'Mention Profile', content:(<MentionProfile />) },
            { id:'CommunityBackground', url:'Authentication/#CommunityBackground', label:'Community Background', content:(<CommunityBackground />) },
            { id:'ContactInformation', url:'Authentication/#ContactInformation', label:'Contact Information', content:(<ContactInformation />) },
            { id:'FamilyBackground', url:'Authentication/#FamilyBackground', label:'Family Background', content:(<FamilyBackground />) },
            { id:'PreferenceOfSpouse', url:'Authentication/#PreferenceOfSpouse', label:'Preference of Spouse', content:(<PreferenceOfSpouse />) },
            { id:'UploadPicture', url:'Authentication/#UploadPicture', label:'Upload Picture', content:(<UploadPicture />) },
            { id:'Finish', url:'Authentication/#Finish', label:'Finish', content:(<Finish />) }]} 
        activeId="MentionProfile" 
        colorConfig={{
            active: { color: Colors.light, backgroundColor: Colors.primary },
            default: { color: Colors.secondary, backgroundColor: '' }
    }} />
    </>);
};

export default NewProfileComponents;