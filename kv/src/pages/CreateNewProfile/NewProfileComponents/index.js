import React from "react";
import { Pill, Colors, Card, UrlParams } from "e-ui-react";
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

  //  
const url = UrlParams().baseUrl;

const NewProfileComponents = ()=> {

    return(<>
   
    <Pill mode="vertical" 
        layout={{
            menu:{ xs:'3', sm:'3', md:'3', lg:'3', xl:'3', xxl:'3' },
            content:{  xs:'9', sm:'9', md:'9', lg:'9', xl:'9', xxl:'9' }
        }}
        menulinks={[
            { id:'MentionProfile', url: url+'CreateNewProfile#MentionProfile', label:'Mention Profile', content:(<MentionProfile />) },
            { id:'CommunityBackground', url: url+'CreateNewProfile#CommunityBackground', label:'Community Background', content:(<CommunityBackground />) },
            { id:'ContactInformation', url: url+'CreateNewProfile#ContactInformation', label:'Contact Information', content:(<ContactInformation />) },
            { id:'FamilyBackground', url: url+'CreateNewProfile#FamilyBackground', label:'Family Background', content:(<FamilyBackground />) },
            { id:'PreferenceOfSpouse', url: url+'CreateNewProfile#PreferenceOfSpouse', label:'Preference of Spouse', content:(<PreferenceOfSpouse />) },
            { id:'UploadPicture', url: url+'CreateNewProfile#UploadPicture', label:'Upload Picture', content:(<UploadPicture />) },
            { id:'Finish', url: url+'CreateNewProfile#Finish', label:'Finish', content:(<Finish />) }]} 
        activeId="CommunityBackground" 
        colorConfig={{
            active: { color: Colors.light, backgroundColor: Colors.primary },
            default: { color: Colors.secondary, backgroundColor: '' }
    }} />
    </>);
};

export default NewProfileComponents;