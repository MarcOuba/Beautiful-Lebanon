import React from "react";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";


function ToggleDarkMode(){
    if(document.getElementById('mode-button').textContent=="Dark Mode"){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        document.getElementById('mode-button').textContent="Light Mode"
        document.getElementById("sun-icon").style.visibility="visible";
        document.getElementById("moon-icon").style.visibility="hidden"
        document.getElementById('mode-button').style.backgroundColor="white"
        document.getElementById('mode-button').style.color="black"
       
    }
    else{
        document.body.style.backgroundColor="white"
        document.body.style.color="black";
        document.getElementById('mode-button').textContent="Dark Mode"
        document.getElementById("sun-icon").style.visibility="hidden"
        document.getElementById("moon-icon").style.visibility="visible"
        document.getElementById('mode-button').style.backgroundColor="black"
        document.getElementById('mode-button').style.color="white"
       
       
    }
}


export default function Navbar(){
return(
<div className="Navbar-container">
<h4><FontAwesomeIcon className="globe-icon" icon={faGlobeAmericas}></FontAwesomeIcon>My favorite visited places in Lebanon</h4>
<FontAwesomeIcon id="sun-icon" icon={faSun}></FontAwesomeIcon>
<FontAwesomeIcon id="moon-icon" icon={faMoon}></FontAwesomeIcon>
<button  id="mode-button" onClick={ToggleDarkMode}>Click to change mode</button>
</div>
)
}