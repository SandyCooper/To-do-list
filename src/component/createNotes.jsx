import React,{useContext, useState} from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { UserContext, ACTION } from "./simplyfy";


function CreateNote(){

    const {disPatch,setoverlay,overLay,winWidth} = useContext(UserContext);


    const [newDos,setNewDos] = useState("");

    function handleNewNoteChange(event){
        const {value} = event.target;
        setNewDos(value);
    }

    function handleAddClick(){
        if(newDos !== ""){
            disPatch({type:ACTION.ADD_TODO,payload:{note:newDos}});
            setNewDos("");
            setoverlay(false);
        }
    }
    function handleCloseButtonClick(){
        setoverlay(false);
    }

    return(
        <>
        {winWidth < 501 ? <div id={overLay ? "overlay" : null}>
            {overLay ? 
                (<><div className="create-note">
                    <textarea className="new-note-input" type="text" onChange={handleNewNoteChange} value={newDos} placeholder="Write What you want to Remember!"></textarea>
                    <div title="Add" className="new-note-button" onClick={handleAddClick}><AddCircleIcon fontSize="large" /></div>
                </div>{winWidth < 501 ? <div onClick={handleCloseButtonClick} className="close-button">
                        X
                    </div> : null}</>
            ) : null }
        </div> : <><div className="create-note">
                    <textarea className="new-note-input" type="text" onChange={handleNewNoteChange} value={newDos} placeholder="Write What you want to Remember!"></textarea>
                    <div title="Add" className="new-note-button" onClick={handleAddClick}><AddCircleIcon fontSize="large" /></div>
                </div>{winWidth < 501 ? <div onClick={handleCloseButtonClick} className="close-button">
                        X
                    </div> : null}</>}
                    </>
    );
}

export default CreateNote;