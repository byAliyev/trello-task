import React from 'react';
import { Search } from "../Icons/icons";

const SearchInput = (props) => {
    return (
        <>
            <label htmlFor="input" className="search">
                <input type="text" className={props.className} id="input" placeholder={props.placeholder}/>
                <Search className="h6 w6 search-icon"/>
            </label>
        </>
    );
}

export default SearchInput;