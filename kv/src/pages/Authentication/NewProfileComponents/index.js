import React from "react";
import { Pill, Colors, Card } from "e-ui-react";
import MentionProfile from "@Pages/Authentication/NewProfileComponents/MentionProfile/index.js";

   
   const CommunityBackground = ()=>{
    return (<>
     <div>
       <Card padding={15}>
        Menu#1 Component
       </Card>
     </div>
    </>);
   };
   
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

const NewProfileComponents = ()=> {
    return(<>
    <Pill mode="vertical" 
        layout={{
            menu:{ xs:'2', sm:'2', md:'2', lg:'2', xl:'2', xxl:'2' },
            content:{  xs:'10', sm:'10', md:'10', lg:'10', xl:'10', xxl:'10' }
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