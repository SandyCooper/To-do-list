import React,{createContext,useState, useReducer, useEffect} from "react";
import { nanoid } from 'nanoid';
import useLocalStorage from "./useLocalStorage";

export const UserContext = createContext();

export const ACTION = {
  ADD_TODO : 'addTodo',
  DELETE_ONE_NOTE : 'deleteOneNote',
  DELETE_ALL_NOTES : 'deleteAllNotes'
}

function reducer(notes,action){
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...notes,UseReducerAddTodo(action.payload.note)];
    case ACTION.DELETE_ONE_NOTE:
      const newNotes = notes.filter(note => {return(note.id !== action.payload.iD);});
      return [...newNotes];
    case ACTION.DELETE_ALL_NOTES:
      return [];
    default:
      return notes
  }
}

function UseReducerAddTodo(note){
  const newDoList = {
    id:nanoid(),
    text:note,
    date:new Date().toLocaleDateString()
  };
  return newDoList;
}


export default function Simplyfy({children}){

  const [notes,dispatch] = useReducer(reducer,[]);
  const [width,setWidth] = useState(window.innerWidth);
  const [darkMode,setDarkMode] = useState(false);
  const [searchNotes,setSearchNotes] = useState("");
  const [overlay,setOverlay] = useState(false);

  const [seton,setSeton] = useLocalStorage("react-todo-datas",notes);

  function updateWidth(){
    setWidth(window.innerWidth);
  }

  useEffect(() => { return setSeton(notes)},[notes]);
  useEffect(() => {
    window.addEventListener("resize",updateWidth);

    return () => {
    window.removeEventListener("resize",updateWidth);
    }
  },[]);


  function handleDarkMode(){
    setDarkMode(prevValue => !prevValue);
  }
  function handleAddButtonClick() {
    setOverlay(true);
  }

    return (
        <UserContext.Provider value={{nootes:seton,searchnotes:searchNotes,setsearchnotes:setSearchNotes,handledarkmode:handleDarkMode,disPatch:dispatch,winWidth:width,overLay:overlay,setoverlay:setOverlay,handleaddbuttonclick:handleAddButtonClick}}>
        <div className={`${darkMode && "dark-mode"}`}>
            {children}
        </div>
        </UserContext.Provider>
    );

}