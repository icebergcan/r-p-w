import React from "react";

import searchIcon from './assets/icons/searchIcon.svg'

function Search ({ 
      areaID,
      searchTags,
      handleChange
    }) 
{
  return (
      <div className="searchArea">
          <input 
            type="text"
            placeholder="найти тег" 
            className="search" 
            id={areaID} 
            onChange={handleChange}
          />
          <input 
            type="button" 
            src={searchIcon} 
            className="searchButton" 
            onClick={searchTags}
          />
      </div>
  );
}
  export default Search