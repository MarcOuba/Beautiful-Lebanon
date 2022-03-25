import React from 'react';
import "./index.css";
import Body from "./Body.js";
import data from "./data";
import Navbar from './Navbar';



 export default function App(){

  const [darkMode,setDarkMode]=React.useState(true)

  function toggleDarkMode(){
    darkMode ?  document.body.style.backgroundColor="#100F16 " :  document.body.style.backgroundColor="#EEEEEE "
    darkMode ?  document.body.style.color="#EEEEEE " :  document.body.style.color="#100F16 "
    setDarkMode(prevMode => !prevMode)
  }
      const elements=data.map(places =>
        {
            return(
                <Body
            key={places.id}
            places={places}
            />
            )
        }
        )
return(
             
   <div>   
   <Navbar
   darkMode={darkMode}
   toggleDarkMode={toggleDarkMode}
    />
    {elements}
    
    </div>

   )
 }
