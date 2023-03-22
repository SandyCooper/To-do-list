import React, { useContext } from "react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { UserContext } from "./simplyfy";


function Header(){

    const {deleteallnote} = useContext(UserContext);

    return(
        <div className="reset">
            <div className="reset-button" onClick={deleteallnote}><span>Reset</span> <span className="reset-icon"><RestartAltIcon /></span></div>
        </div>
    );
}

export default Header;