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
          <input type={inputType} className={inputClass} placeholder={placeholder} />
          <input type="image" src={buttonSrc} className={buttonClass} value={buttonValue} onClick="console.log(1)"/>
      </>
  );
}
  export default Search