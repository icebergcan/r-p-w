import React from "react";
import searchIcon from './assets/icons/searchIcon.png'
import "./style.css"

function Search () {
  return (
    <div className="searchArea">
      <div className="searcher">
          <input type="text" className="search" placeholder="найти тег"/>
        <input type='image' src={searchIcon} className="searchIcon" />
      </div>
    </div>
  );
}
  export default Search;