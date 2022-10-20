import React from 'react'
import PopupForm from '../PopupForm/PopupForm'
import './DisplayArea.css'
import {useState,useContext} from 'react'
import noteContext from '../../Context/NoteContext'


function DisplayArea(props) {
   const [trigger, setTrigger] = useState("false")
   const [currentNote,setCurrentNote]=useState([]);
   const notesData=useContext(noteContext)

  let clickUpadteHandler=(sno)=>
   {
         setCurrentNote(notesData.notes.filter((ele)=> {return ele.sno===sno}))
         setTrigger("true");
        
        
   }
   
 
  return (
    <>
          <h1 className='display-heading'>Notes List</h1>
     <div className='display-container'>    
    <div className='display-wrapper'>
      
    {
        notesData.notes.map((ele)=>{
         return (
            <div key= {ele.sno} className='display-area'> 
            <h4 className='display-title'>{ele.title}</h4>
            <p>{ele.description}</p>
            <button className="btn-sm" onClick={()=>{notesData.deleteNotes(ele.sno)}}>Delete</button>
            <button className="btn-sm" onClick={()=>{clickUpadteHandler(ele.sno)}}>Update</button>
         </div>
         )

        })
       

    }

    </div>
    { trigger==="true"?
    <div>
    <PopupForm toggle={trigger} setToggle={setTrigger} currentNote={currentNote} />
    </div> : <div></div>
}
    </div>
    
    </>
  )
}

export default DisplayArea