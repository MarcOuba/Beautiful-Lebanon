import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import GoogleFontLoader from "react-google-font-loader";


export default function Body(props){
    
    <GoogleFontLoader
    fonts={[
      {
        font: 'Roboto',
        weights: [400, '400i'],
      },
      {
        font: 'Roboto Mono',
        weights: [400, 700],
      },
    ]}
    subsets={['cyrillic-ext', 'greek']}
  />
 
    return(
        <div style={{ fontFamily: 'Poppins, sans-serif' }} className="Page-container">

<img src={props.places.img} />
    <div className="Body-container">
    <p className="location-text">
        <FontAwesomeIcon className="location-icon" icon={faMapMarkerAlt}/>{props.places.location}
    </p>
    <a className="google-maps" href={props.places.googleMaps}>View on Google Maps</a>
<h1 className="title">{props.places.title}</h1>
<p style={{ fontFamily: 'Poppins, sans-serif' }} className="day-visited">{props.places.visitDate}</p>
<aside className="description">{props.places.description}</aside>
</div>
</div>


    )

}
