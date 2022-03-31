import React from "react";
import searchIcon from './assets/icons/searchIcon.png'
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
            </div>
        </div>
        
        <div className="searchBackground">
            <div className="searchBox content">
                <div className="searchArea">
                    <Search
                            inputType="text"
                            inputClass="search"
                    />
                </div>  
            </div>
        </div>
        
        <div className="searchBackground">
            <div className="searchBox content">
                <div className="searchArea">
                    <Search
                            inputType="button"
                            buttonClass="plusTagButton"
                            buttonValue="+ добавить тег"
                    />
                </div>  
            </div>
        </div>
    </>
    );
}
export default SearchArea