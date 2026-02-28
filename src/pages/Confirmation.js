import { useLocation } from "react-router-dom";
import Header from "../components/Header";

function Confirmation(){

const location=useLocation();

const members=location.state?.members || [];
const solution=location.state?.solution || "";

return(

<div>

<Header showButtons={false}/>


<div style={{padding:"40px"}}>

<h2 align="center">

Application Submitted Successfully

</h2>



<h3>

Team Members

</h3>


{members.map((m,i)=>(

<div key={i}>

{m.name} - {m.email}

</div>

))}



<h3 style={{marginTop:"30px"}}>

Abstract

</h3>


<p>

{solution}

</p>


</div>


</div>

);

}

export default Confirmation;