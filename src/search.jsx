import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";

function Search ({
      placeholder, 
      buttonClass, 
      buttonValue, 
      buttonSrc,
      inputType,
      inputClass,
    }) 
{
  return (
      <>
          <input id="fleaSearch" type={inputType} className={inputClass} placeholder={placeholder} />
          <input 
            type="button" 
            src={buttonSrc} 
            className={buttonClass} 
            value={buttonValue} 
            onClick={() => {
              console.log(document.getElementById("fleaSearch").value)
            }}/>
      </>
  );
}
  export default Search