import React from "react";

function addTag ({
      addTag,
      areaID,
    }) 
{
  return (
      <>
        <div className="searchArea">
          <input 
            type="text"
            className="search" 
            id={areaID} />
        </div>
          <input 
                    className="plusTagButton" 
                    type="button" 
                    value="+ добавить тег"
                    onClick={addTag}
          />
      </>
  );
}
  export default addTag