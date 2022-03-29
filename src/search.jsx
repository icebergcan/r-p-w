import React from "react";

function Search ({placeholder, buttonClass, buttonValue, buttonSrc}) {



  return (
      <>
          <input type="text" className="search" placeholder={placeholder} />
          <input type="image" src={buttonSrc} className={buttonClass} value={buttonValue} />
      </>
  );
}
  export default Search