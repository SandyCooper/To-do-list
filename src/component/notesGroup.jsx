import React from "react";
import SingleNote from "./singleNote";


function NotesGroup({notes,handleOneDelete,isBgImage}){
        return (<div className="notes-group-area">
        {isBgImage ? <div className="red"></div> : (notes.map((note,i) => {
            return(
                <SingleNote key={i} id={note.id} text={note.text} date={note.date} handleOneDelete={handleOneDelete}/>
            );
        }))}
    </div>);
}

export default NotesGroup;