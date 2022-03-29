import React from "react";
import searchIcon from './assets/icons/searchIcon.png'
import Search from "./search"


function SearchArea  () {


    return (
    <>
        <div className="searchArea">
            <Search
                placeholder="найти тег"
                buttonClass="searchButton"
                buttonSrc={searchIcon}
            />
        </div>
        <div className="searchArea">
            <Search />
        </div>
        <input
            type="button"
            className="plusTagButton"
            value="+ добавить тег"
        />
    </>
    );
}
export default SearchArea