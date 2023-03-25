import React, { useContext } from "react";
import { UserContext } from "./simplyfy";


export default function AddButton() {

    const {handleaddbuttonclick,overLay,winWidth} = useContext(UserContext);

    return (
        <>
        {winWidth < 501 ? <div>
            {overLay ? null : <div onClick={handleaddbuttonclick} className="add-button">+</div>}
        </div> : null}
        </>
    );
}