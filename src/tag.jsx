import React from "react";

function Tag (section, letter) {
    
    return (
        <div class="listSection">{section.nameSect}
            <input type="button" className="deleteTag"/>
            <div className="letter">
                {letter.nameLett}
            </div>
        </div>
    )
}



export default Tag;