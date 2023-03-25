import React, { useContext } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { UserContext } from "./simplyfy";

export default function Toggle(){

    const {handledarkmode,overLay} = useContext(UserContext);

    return (
        <>
        {overLay ? null : <div title="Dark Mode" className="dark-mode-button" onClick={handledarkmode}><DarkModeIcon fontSize="large"/></div>}
        </>
    );
}