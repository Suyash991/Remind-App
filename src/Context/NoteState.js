import noteContext from "./NoteContext";
import {useState,useEffect} from 'react'

const NoteState =(props)=>{
    
    let initNotes;
  if(localStorage.getItem("Notes")===null)
  {
    initNotes=[]
  }
  else
  {
    initNotes =JSON.parse(localStorage.getItem("Notes"));
  }
  const [notes, setNotes] = useState(initNotes)

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes))
  }, [notes])


  const updateNotesInfo=(currentNote)=>
  {
    console.log(currentNote)
    let check1='title' in currentNote;
    let check2 ='descripton' in currentNote;

    let tit;
    let desc;
    
    if(check1 && check2)
    {
      tit=currentNote.title
      desc=currentNote.descripton
  }
    else if(check1)
    {
      
        
       
        tit=currentNote.title
        desc=currentNote[0].description
    
  }
  else if(check2)
  {
        tit=currentNote[0].title
      desc=currentNote.descripton
  }
  else
  {
    tit=currentNote[0].title
    desc=currentNote[0].description
  }

    let updatedNote=notes.map((ele)=>{

       if(currentNote[0].sno===ele.sno)
       {
        return {...ele, title:tit,description:desc}
       }

       return ele


    })
    
  setNotes(updatedNote)
}
 


  
const addNotes= (title,desc)=>
{
  let sno;
        if(notes.length===0)
        {
          sno=1;
        }
        else
        {
          sno=notes[notes.length-1].sno +1;
        }
        const newNote=
        {
          sno:sno,
          title:title,
          description:desc
        }
        setNotes([...notes,newNote])
        
}
const deleteNotes=(sno)=>
{
    setNotes(notes.filter((note)=>{
      return note.sno !== sno

    }))
}

    return (
        <noteContext.Provider value={{notes,setNotes,deleteNotes,addNotes,updateNotesInfo}}>
             {props.children}
        </noteContext.Provider>
    )
}

export default NoteState