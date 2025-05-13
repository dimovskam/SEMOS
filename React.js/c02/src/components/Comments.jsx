import React from "react"

export const Comments = ({hasComments, longComments}) => {

    return(
        <div id="comments">
            {hasComments === true ? 
            <h2>Comments: </h2>
            : <p>No comments to be found</p>
        }
        {longComments === true && <h4>No long comments here...</h4>}
        </div>
    )
}