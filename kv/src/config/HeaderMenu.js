import { UrlParams } from "e-ui-react";

const url = UrlParams().baseUrl;

export const HeaderMenu = [{ id:'Home', url: url+'Home', label:'Home' },
{ id:'MyDashboard', url:url+'MyDashboard', label:'My Dashboard' },
{ id:'BrowseMatrimony', url:url+'BrowseMatrimony', label:'Browse Matrimony' },
{ id:'MatchCalculator', url:url+'MatchCalculator', label:'Match Calculator' },
{ id:'CreateNewProfile', url:url+'CreateNewProfile#MentionProfile', label:'Create New Profile' },
{ id:'Authentication', url:url+'Authentication', label:'SignUp / Login' },];