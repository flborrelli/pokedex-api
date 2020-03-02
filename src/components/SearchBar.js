import React from "react";
import { Input } from 'semantic-ui-react';

function SearchBar({ handleInputChange }) {
  
  return (
    <div className='search-bar mt-5'>
      <div class="ui icon input">
      <input onChange={handleInputChange} type="text" placeholder="Search a Pokemon..."/>
      <i aria-hidden="true" class="search icon"></i>
      </div>
    </div>
  );
}

export default SearchBar;