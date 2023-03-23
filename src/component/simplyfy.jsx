import React,{createContext,useState, useReducer} from "react";
import { nanoid } from 'nanoid';

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

  const [notes,dispatch] = useReducer(reducer,[
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

  
    function handleDarkMode(){
      setDarkMode(prevValue => !prevValue);
    }


    return (
        <UserContext.Provider value={{nootes:notes,searchnotes:searchNotes,setsearchnotes:setSearchNotes,handledarkmode:handleDarkMode,disPatch:dispatch}}>
        <div className={`${darkMode && "dark-mode"}`}>
            {children}
        </div>
        </UserContext.Provider>
    );

}