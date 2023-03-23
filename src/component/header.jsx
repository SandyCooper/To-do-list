import React, { useContext } from "react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { ACTION, UserContext } from "./simplyfy";


function Header(){

    const {disPatch} = useContext(UserContext);

    return(
        <div className="reset">
            <div className="reset-button" onClick={() => disPatch({type:ACTION.DELETE_ALL_NOTES})}><span>Reset</span> <span className="reset-icon"><RestartAltIcon /></span></div>
        </div>
    );
}

export default Header;