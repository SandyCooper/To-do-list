import React, { useContext } from "react";
import SingleNote from "./singleNote";
import { UserContext } from "./simplyfy";


function NotesGroup(){

    const {nootes,searchnotes} = useContext(UserContext);
    let notes = nootes.filter(note => note.text.toLowerCase().includes(searchnotes))

        return (<div className="notes-group-area">
        {notes.map((note,i) => {
            return(
                <SingleNote key={i} id={note.id} text={note.text} date={note.date}/>
            );
        })}
    </div>);
}

export default NotesGroup;