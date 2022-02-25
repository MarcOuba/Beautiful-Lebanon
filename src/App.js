import React from 'react';
import "./index.css";
import Body from "./Body.js";
import data from "./data";
import Navbar from './Navbar';



 export default function App(){
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
   <Navbar />
    {elements}

    </div>

   )
 }
