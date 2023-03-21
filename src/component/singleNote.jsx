import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function SingleNote({id,text,date,handleOneDelete}){

    function handleSingleDeleteClick(){
        handleOneDelete(id);
    }

    return(
        <div className="single-note">
            <div className="single-note-text">{text}</div>
            <div className="single-note-date">{date}</div>
            <div className="single-note-delete-button" onClick={handleSingleDeleteClick} title="Delete"><DeleteIcon fontSize="small"/></div>
        </div>
    );
}

export default SingleNote;