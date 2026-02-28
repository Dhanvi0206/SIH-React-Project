import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./application.css";

function Application(){

const navigate = useNavigate();

const [solution,setSolution]=useState("");

const [file,setFile]=useState(null);

const [members,setMembers]=useState([
{
name:"",
email:"",
mobile:"",
gender:"",
category:"",
nationality:"Indian",
stream:"",
year:""
}
]);


/* ADD MEMBER */

const addMember=()=>{

if(members.length>=5){
alert("Maximum 5 Members Allowed");
return;
}

setMembers([
...members,
{
name:"",
email:"",
mobile:"",
gender:"",
category:"",
nationality:"Indian",
stream:"",
year:""
}
]);

};



/* MEMBER UPDATE */

const handleChange=(index,field,value)=>{

const temp=[...members];
temp[index][field]=value;
setMembers(temp);

};



/* PPT VALIDATION */

const handleFileChange=(e)=>{

const selected=e.target.files[0];

if(!selected) return;

const name=selected.name.toLowerCase();

if(!name.endsWith(".ppt") && !name.endsWith(".pptx")){

alert("Only PPT files (.ppt or .pptx) allowed");
e.target.value="";
return;

}

setFile(selected);

};



/* VALIDATION CHECK */

const isFormValid = () => {

const memberFilled = members[0].name.trim() !== "";

const abstractFilled = solution.trim() !== "";

const pptUploaded = file !== null;

return memberFilled && abstractFilled && pptUploaded;

};



/* SUBMIT */

const submitForm=()=>{


if(members[0].name.trim()===""){

alert("Mandatory Field Missing: Please enter at least one Team Member (Leader)");

return;

}

if(solution.trim()===""){

alert("Mandatory Field Missing: Please enter Abstract");

return;

}

if(file===null){

alert("Mandatory Field Missing: Please upload PPT");

return;

}


navigate("/confirmation",{

state:{

members:members,
solution:solution

}

});

};



return(

<div>

<Header showButtons={false}/>


<div className="applicationPage">


<h2 className="teamTitle">

Team Members Details

</h2>



<table className="teamTable">

<thead>

<tr>

<th>Name</th>
<th>Email</th>
<th>Mobile</th>
<th>Gender</th>
<th>Category</th>
<th>Nationality</th>
<th>Stream</th>
<th>Year</th>

</tr>

</thead>



<tbody>

{members.map((m,index)=>(

<tr key={index}>

<td>

<input
placeholder={index===0?
"Leader Full Name":
"Member Full Name"}
onChange={(e)=>handleChange(index,"name",e.target.value)}
/>

</td>


<td>

<input
placeholder="Email"
onChange={(e)=>handleChange(index,"email",e.target.value)}
/>

</td>


<td>

<input
placeholder="Mobile"
onChange={(e)=>handleChange(index,"mobile",e.target.value)}
/>

</td>


<td>

<select onChange={(e)=>handleChange(index,"gender",e.target.value)}>

<option>Gender</option>
<option>Male</option>
<option>Female</option>

</select>

</td>


<td>

<select onChange={(e)=>handleChange(index,"category",e.target.value)}>

<option>Category</option>
<option>General</option>
<option>OBC</option>
<option>SC</option>
<option>ST</option>

</select>

</td>


<td>

<select onChange={(e)=>handleChange(index,"nationality",e.target.value)}>

<option>Indian</option>

</select>

</td>


<td>

<select onChange={(e)=>handleChange(index,"stream",e.target.value)}>

<option>CSE</option>
<option>IT</option>
<option>ECE</option>
<option>EEE</option>

</select>

</td>


<td>

<select onChange={(e)=>handleChange(index,"year",e.target.value)}>

<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>

</select>

</td>

</tr>

))}

</tbody>

</table>



<div className="addMemberDiv">

<button className="addBtn" onClick={addMember}>

+ Add Member

</button>

</div>



<div className="leaderNote">

Note: First Member Is Team Leader. It is recommended to include at least 1 female member in each team.

</div>



<div className="solutionBox">

<h3>

Abstract (0–5000 Words)

</h3>

<textarea

maxLength="5000"

placeholder="Enter Abstract Here"

onChange={(e)=>setSolution(e.target.value)}

/>

</div>



<div className="uploadWrapper">

<h3>

Upload PPT

</h3>


<input

className="fileInput"

type="file"

accept=".ppt,.pptx"

onChange={handleFileChange}

/>


<p className="pptNote">

Note: PPT must be uploaded in the given template format only.

</p>


</div>



<button

className="submitBtn"

onClick={submitForm}

disabled={!isFormValid()}

>

Submit Application

</button>



</div>


</div>

);

}

export default Application;