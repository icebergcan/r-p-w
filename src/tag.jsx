import React from "react";

function Tag ({section, letter}) {
    
    return (
        <div className="listSection">
            {letter}
            {section}
            <input type="button" className="deleteTag"/>
        </div>
    )
}



export default Tag;