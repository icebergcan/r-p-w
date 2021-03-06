import React from "react";

import Search from "./search"
import AddTag from "./addTag"


function SearchArea  () {


    // let searchValue = document.querySelector("#tagToDB").value;

    function addTagToDB () {
        console.log(document.getElementById("tagToDB").value)
    }

    function searchTagInDB () {
        console.log(document.getElementById("searchInTags").value)
    }

    return (
    <>

        <div className="searchBackground">
            <div className="searchBox content">
                    <Search
                        searchTags={searchTagInDB}
                        areaID="searchInTags"
                     />
                <AddTag />
            </div>
        </div>
       
    </>
    );
}
export default SearchArea