import React,{useEffect, useState} from "react";
import { nanoid } from 'nanoid';
import Search from "./component/search";
import Header from "./component/header";
import CreateNote from "./component/createNotes";
import NotesGroup from "./component/notesGroup";
import DarkModeIcon from '@mui/icons-material/DarkMode';

function App() {

  const [notes,setNotes] = useState([
    {
      id:nanoid(),
      text:"test1",
      date:"today"
    },
    {
      id:nanoid(),
      text:"test2",
      date:"today"
    },
    {
      id:nanoid(),
      text:"test3",
      date:"today"
    }
  ]);
  const [darkMode,setDarkMode] = useState(false);
  const [searchNotes,setSearchNotes] = useState("");
  const [bgImg,setBgImg] = useState(false)
  
  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem("client-data"));
    if(saveNotes){
      setNotes(saveNotes)
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("client-data",JSON.stringify(notes));
  },[notes]);

  function addNotes(note){
    const newDoList = {
      id:nanoid(),
      text:note,
      date:new Date().toLocaleDateString()
    };
    const newNote = [...notes,newDoList];
    setNotes(newNote);
    setBgImg(false);
  }

  function deleteOneNote(id){
    const newNotes = notes.filter(note => {return(note.id !== id);});
    setNotes([...newNotes]);
  }

  function deleteAllNote(){
    setNotes([]);
    setBgImg(false);
  }

  function handleDarkMode(){
    setDarkMode(prevValue => !prevValue);
  }

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div title="Dark Mode" className="dark-mode-button" onClick={handleDarkMode}><DarkModeIcon fontSize="large"/></div>

      <Header handleDeleteAll={deleteAllNote} isBgImage={bgImg}/>

      <Search handleSearch={setSearchNotes} searchNotes={searchNotes}/>

      <CreateNote onClick={addNotes}/>

      <NotesGroup notes={notes.filter(note => note.text.toLowerCase().includes(searchNotes))} handleOneDelete={deleteOneNote} isBgImage={bgImg}/>
    </div>
  );
}

export default App;
