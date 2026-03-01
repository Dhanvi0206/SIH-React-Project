import "./header.css";

import moe from "../images/moe.png";
import aicte from "../images/aicte.png";
import mic from "../images/mic.png";
import sih from "../images/sih.png";

function Header({showButtons}){

return(

<div className="headerWrapper">

<div className="headerContainer">

<div className="logoSection">

<img src={moe} alt="MOE"/>
<img src={aicte} alt="AICTE"/>
<img src={mic} alt="MIC"/>
<img src={sih} alt="SIH"/>

</div>

{showButtons && (

<div className="headerButtons">

<button>MIC Alumni</button>

<button>SIH Login</button>

</div>

)}

</div>

</div>

);

}

export default Header;