import React from "react";
import searchIcon from './assets/icons/searchIcon.svg'
import Search from "./search"


function SearchArea  () {


    return (
    <>

        <div className="searchBackground">
            <div className="searchBox content">
                <div className="searchArea">
                    <Search
                        inputClass="search"
                        placeholder="найти тег"
                        buttonClass="searchButton"
                        buttonSrc={searchIcon}
                     />
                </div>
                <div className="searchArea">
                    <Search 
                        inputType="text"
                        inputClass="search"
                    />
                </div>
                    <Search 
                        inputType="button"
                        buttonClass="plusTagButton"
                        buttonValue="+ добавить тег"
                    />
            </div>
        </div>
       
    </>
    );
}
export default SearchArea