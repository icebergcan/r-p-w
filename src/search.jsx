import React from "react";
import searchIcon from './assets/icons/searchIcon.png'
import InputTag from "./input";

const defaultText = 'найти тег';

function Search (Text) {
    return (
        <div class="searchArea">
                  {/* {defaultText} */}
                  <InputTag/>
              </div>
    )
}



Search(defaultText);

export default Search;