import React from "react";

export const Comments = (hasComments, longComment) => {

    return(
        <div id='comments'>
            {hasComments === true ?
            <h2>Comments </h2>
            : <p>No comments to be found</p>
            }
            {longComment === false && 
            <h4>No long comments here...</h4>}
        </div>
    )
}