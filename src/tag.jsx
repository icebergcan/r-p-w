import React from "react";

function Tag ({section, letter}) {
    
    return (
        <div className="listSection">
            <div className="letter">
                {letter}
            </div>
            {section}
            <input type="button" className="deleteTag"/>
        </div>
    )
}



export default Tag;