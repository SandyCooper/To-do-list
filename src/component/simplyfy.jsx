import React,{createContext,useState,useEffect} from "react";
import { nanoid } from 'nanoid';

export const UserContext = createContext();


export default function Simplyfy({children}){

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
        <UserContext.Provider value={{nootes:notes,searchnotes:searchNotes,setsearchnotes:setSearchNotes,bgimg:bgImg,addnotes:addNotes,deleteonenote:deleteOneNote,deleteallnote:deleteAllNote,handledarkmode:handleDarkMode}}>
        <div className={`${darkMode && "dark-mode"}`}>
            {children}
        </div>
        </UserContext.Provider>
    );

}