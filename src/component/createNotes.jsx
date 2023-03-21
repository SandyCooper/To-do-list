import React,{useState} from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';


function CreateNote({onClick}){

    const [newDos,setNewDos] = useState("");

    function handleNewNoteChange(event){
        const {value} = event.target;
        setNewDos(value);
    }

    function handleAddClick(){
        if(newDos !== ""){
            onClick(newDos);
            setNewDos("");
        }
    }

    return(
        <div>
            <div className="create-note">
                <textarea className="new-note-input" type="text" onChange={handleNewNoteChange} value={newDos} placeholder="Write What you want to Remember!"></textarea>
                <div title="Add" className="new-note-button" onClick={handleAddClick}><AddCircleIcon fontSize="large"/></div>
            </div>
        </div>
    );
}

export default CreateNote;