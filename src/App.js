import './App.css';
import DisplayArea from './Components/DisplayArea/DisplayArea';
import SearchField from './Components/Navbar/Navbar';
import TextTypeArea from './Components/TextTypeArea/TextTypeArea';
import NoteState from './Context/NoteState';


function App() {

  
  return (
    <>
      <NoteState>
        
         <SearchField />
         <TextTypeArea />
         <DisplayArea />   
         
         
         </NoteState>
    </>
  );
}

export default App;
