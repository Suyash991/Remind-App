import React from 'react'
import './Navbar.css'
import {useState,useContext} from 'react'
import SearchPopup from '../SearchPopup/SearchPopup'
import noteContext from '../../Context/NoteContext'



function Navbar(props) {
 const [search,setSearch] = useState("")
 const notesData=useContext(noteContext)
 
 const [toggle, settoggle] = useState("false")
 const [searchNotes,setSearchNotes]=useState([])


let onClickList = (sno)=>
{
  
  setSearchNotes(notesData.notes.filter((ele)=> {return ele.sno===sno}))
  setSearch("")
  settoggle("true")
     
}


 let dropdownRender =()=>
  {
    if(search)
    {
    return (
      <ul className='dropdownlist' >
    {notesData.notes.filter((val)=>
    {
      
      if(search === "")
      {
        
        return val
      }
      else if(val.title.toLowerCase().includes(search.toLowerCase()))
      {
       
        return val
      }
     return ""
    }
    ).map((val)=>{

         return <li key={val.sno} onClick={()=>onClickList(val.sno)}>{val.title}</li>
    })
  }
     
      
     </ul>
    )
    }
    else
    {
      return (<div></div>)
    }
  }  
  let onChangeClickHandler=(e)=>
  {
          setSearch(e.target.value)

  }
      
  
  return (

    <div>
      <div className="navbar-container">
         <div className='navbar-wrapper'>
            <h3 className='navbar-title'>Remind</h3>
            <div className="navbar-search-section">
           <input type="search" className='search-input' value={search} onChange={(e)=>onChangeClickHandler(e)} name="searchBox" id="search"  placeholder='Search title here....'/>
           
           {dropdownRender()}
           </div>
          
         </div>
        
    </div>
    <SearchPopup toggle={toggle}  searchNotes={searchNotes} settoggle={settoggle}/>
    </div>
  )
}

export default Navbar