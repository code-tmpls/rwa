import React, { useState } from "react";
import { Card, Form, Switch, Choice, Dropdown, DateTimePicker, Range  } from "e-ui-react";

const FilterMenu = ()=>{
    const [ dropdownValue, setDropdownValue ] = useState("");
    const menuOptions = [{
        options:[{ label:"Telugu", value:"Telugu" }] 
      },
      { 
        options:[{ label:"Hindi", value:"Hindi" }] 
      },
      { 
        options:[{ label:"Tamil", value:"Tamil" }]
      },
      { 
        options:[{ label:"Kannada", value:"Kannada" }]
      },
      { 
        options:[{ label:"Malayalam", value:"Malayalam" }]
      }]; 
 return (<div style={{ marginBottom:'25px' }}>

  <Card style={{ border:"2px solid #953062" }}>
  <div align="center" style={{ backgroundColor:'#953062', color:'#fff', padding:'8px' }}><b>FILTER PROFILES</b></div>
  <div style={{ padding:'15px' }}>
  <Form name="browseMatrimonyFilter" btnSubmit={{
                 align:'center',
                 btnType:'primary',
                 label:'Search Profiles',
                 size: 11
             }}
             btnReset={{
                 btnType:'danger',
                 label:'Reset',
                 size: 11
             }}
             onSubmit={async(form, isValidForm, triggerReset)=>{
                 // 
     
                // triggerReset();
             }}
             onReset={async()=>{
                
             }}
             >
    <div style={{ margin: '0px 5px' }}>
        <div>
            <Choice type="radio" id="lookingFor" name="lookingFor" label="I'm looking for" 
                    value={[{ id:1, label:"Bride", value:"1"},
                            { id:2, label:"Bridegroom", value:"2" }]} 
                    disabled={false} />
        </div><hr style={{ borderBottom:'1px solid #953062', opacity: 1 }}/>
        <div className="mtop15p">
            <DateTimePicker type="datePicker" label="My Date of Birth" id="dateOfBirth" name="dateOfBirth" />
            <div className="mtop15p">
              <Range name="ageDifference" label="Age Difference (5 years - 8 years)" start={5} end={8} />
            </div>
        </div><hr style={{ borderBottom:'1px solid #953062', opacity: 1 }}/>
        <div className="mtop15p">
            <Switch type="checkbox" id="maritalStatus" name="maritalStatus" label="Marital Status" 
                    value={[{ id:1, label:"Unmarried", value:"1"},
                            { id:2, label:"Divorced", value:"2" },
                            { id:3, label:"Widow", value:"3" },
                            { id:4, label:"Widower", value:"4" }]} 
                    disabled={false} />
        </div><hr style={{ borderBottom:'1px solid #953062', opacity: 1 }}/>
        <div className="mtop15p">
            <Dropdown id="motherTonguePreference" name="motherTonguePreference" placeholder="Mother Tongue Preference" 
                label="Mother Tongue" 
                menu={menuOptions} 
                value={dropdownValue}
                container={{
                  searchLabel:"Search a Language" 
                }} />
        </div><hr style={{ borderBottom:'1px solid #953062', opacity: 1 }}/>
        <div className="mtop15p">
                <Switch type="checkbox" id="profession" name="profession" label="Profession" 
                    value={[{ id:1, label:"Private Sector", value:"1"},
                            { id:2, label:"Government officer", value:"2" },
                            { id:3, label:"Software Engineer", value:"3" },
                            { id:4, label:"Defence Services", value:"4" },
                            { id:5, label:"Businessman", value:"5" },
                            { id:6, label:"Doctor", value:"6" },]} 
                    disabled={false} />
            </div>
        </div>
   </Form>
  </div>
  </Card>
 </div>);
};

export default FilterMenu;