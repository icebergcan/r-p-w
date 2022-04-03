import React from "react";

import searchIcon from './assets/icons/searchIcon.svg'

function Search ({ 
      areaID,
      searchTags,
      sendTypedText
    }) 
{
  return (
      <div className="searchArea">
          <input placeholder="найти тег" className="search" id={areaID} />
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