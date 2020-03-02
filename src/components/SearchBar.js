import React from "react";

function SearchBar({ handleInputChange }) {
  
  return (
    <div className='search-bar mt-5'>
      <div className="ui icon input">
      <input onChange={handleInputChange} type="text" placeholder="Search a Pokemon..."/>
      <i aria-hidden="true" className="search icon"></i>
      </div>
    </div>
  );
}

export default SearchBar;