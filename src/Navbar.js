import React from "react";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";





export default function Navbar(props){
return(
<div className="Navbar-container">
<h4><FontAwesomeIcon className="globe-icon" icon={faGlobeAmericas}></FontAwesomeIcon>My favorite visited places in Lebanon</h4>

<div className="mode">
{props.darkMode ===false && <FontAwesomeIcon className="sun-icon icon" icon={faSun}></FontAwesomeIcon>}
{props.darkMode===true && <FontAwesomeIcon className="moon-icon icon" icon={faMoon}></FontAwesomeIcon>}
<button  className={props.darkMode ? "mode-button-darkMode mode-button" : "mode-button-lightMode mode-button"} onClick={props.toggleDarkMode}>{props.darkMode ? "Dark Mode" : "Light Mode"}</button>
</div>
</div>
)
}