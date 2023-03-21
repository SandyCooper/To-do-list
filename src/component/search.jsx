import React, {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';


function Search({handleSearch,searchNotes}){

    const [searchBar,setSearchBar] = useState(false)

    function handleMouseOut(){
        setSearchBar(false);
    }

    function handleSearchChange(event){
        const {value} = event.target;
        console.log(value);
        handleSearch(value);
        if(value === ""){
            setSearchBar(false);
        } else {
            setSearchBar(true);
        }
    }

    return(
        <div onMouseOver={() => setSearchBar(true)} onMouseOut={handleMouseOut} className={`${searchBar ? "search-e" : "search"}`}>
            <div className="search-icon"><SearchIcon /></div>
            <input className="search-input" type="text" onChange={handleSearchChange} value={searchNotes} placeholder="Search"></input>
        </div>
    );
}


export default Search;