import React from "react";

function Tag ({section, letter}) {
    
    return (
        <div class="listSection">{section}
            <input type="button" className="deleteTag"/>
            <div className="letter">
                {letter}
            </div>
        </div>
    )
}



export default Tag;