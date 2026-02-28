import "./header.css";

import moe from "../images/moe.png";
import aicte from "../images/aicte.png";
import mic from "../images/mic.png";
import sih from "../images/sih.png";

function Header({showButtons}){

return(

<div className="header">

<div className="logoSection">

<img src={moe} alt="moe"/>

<img src={aicte} alt="aicte"/>

<img src={mic} alt="mic"/>

<img src={sih} alt="sih"/>

</div>


{showButtons && (

<div className="buttonSection">

<button>MIC Alumni</button>

<button>SIH Login</button>

</div>

)}


</div>

);

}

export default Header;