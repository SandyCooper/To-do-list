import React from "react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';


function Header({handleDeleteAll}){
    return(
        <div className="reset">
            <div className="reset-button" onClick={handleDeleteAll}><span>Reset</span> <span className="reset-icon"><RestartAltIcon /></span></div>
        </div>
    );
}

export default Header;