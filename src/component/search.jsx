import React, {useContext, useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import { UserContext } from "./simplyfy";


function Search(){

    const {searchnotes,setsearchnotes} = useContext(UserContext);

    const [searchBar,setSearchBar] = useState(false)

    function handleSearchChange(event){
        const {value} = event.target;
        // console.log(value);
        setsearchnotes(value.toLowerCase());
        if(value === ""){
            setSearchBar(false);
        } else {
            setSearchBar(true);
        }
    }

    function handleMouseOut(event){
        const {value} = event.target;
        if(value === ""){
            setSearchBar(false);
        } else {
            setSearchBar(true);
        }
    }

    return(
        <div onMouseOver={() => setSearchBar(true)} onMouseOut={handleMouseOut} className={`${searchBar ? "search-e" : "search"}`}>
            <div className="search-icon"><SearchIcon /></div>
            <input className="search-input" type="text" onChange={handleSearchChange} value={searchnotes} placeholder="Search"></input>
        </div>
    );
}


export default Search;