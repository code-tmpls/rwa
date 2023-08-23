import React, { useState } from "react";
import { Card, Switch, Choice, Dropdown, TextBox } from "e-ui-react";

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
  }
]; 
 return (<div style={{ marginBottom:'25px' }}>
  <Card padding={15}>
    <div style={{ padding: '15px' }}>
        <div>
            <Choice type="radio" id="numbers" name="numbers" label="I'm looking for" 
                    value={[{ id:1, label:"Bride", value:"1"},
                            { id:2, label:"Bridegroom", value:"2" }]} 
                    disabled={false} />
        </div><hr/>
        <div className="mtop15p">
            <Switch type="checkbox" id="age" name="age" label="Age Preference" 
                    value={[{ id:1, label:"21 -25", value:"1"},
                            { id:2, label:"25-30", value:"2" },
                            { id:3, label:"30-35", value:"3" },
                            { id:4, label:"35-40", value:"4" },
                            { id:5, label:"40 + ", value:"5" }]} 
                    disabled={false} />
        </div><hr/>
        <div className="mtop15p">
            <Choice type="radio" id="maritalStatus" name="maritalStatus" label="Marital Status" 
                    value={[{ id:1, label:"Unmarried", value:"1"},
                            { id:2, label:"Divorced", value:"2" },
                            { id:3, label:"Widow", value:"3" },
                            { id:4, label:"Widower", value:"4" }]} 
                    disabled={false} />
        </div><hr/>
        <div className="mtop15p">
            <Dropdown placeholder="Mother Tongue Preference" label="Mother Tongue" 
                    searchLabel="Search a Language" menu={menuOptions} 
                    value={dropdownValue} />
        </div><hr/>
        <div className="mtop15p">
                <Choice type="radio" id="profession" name="profession" label="Profession" 
                    value={[{ id:1, label:"Private Sector", value:"1"},
                            { id:2, label:"Government officer", value:"2" },
                            { id:3, label:"Software Engineer", value:"3" },
                            { id:4, label:"Defence Services", value:"4" },
                            { id:5, label:"Businessman", value:"5" },
                            { id:6, label:"Doctor", value:"6" },]} 
                    disabled={false} />
            </div>
        </div>
  </Card>
 </div>);
};

export default FilterMenu;