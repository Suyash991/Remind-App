import React from 'react'
import './SearchPopup.css'

function SearchPopup(props) {
    
    
    return (props.toggle ==="true")? ( 
  
        <div  className='popup-page'>
        <div className='popup-box  popup-container'> 
        <h4 className='display-title'> {props.searchNotes[0].title}</h4>
        <p>{props.searchNotes[0].description}</p>
        <button className="btn-sm" onClick={()=>props.settoggle("false")}>Close</button>
       
     </div>
     </div>
      ):""
    }


export default SearchPopup