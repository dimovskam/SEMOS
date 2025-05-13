import React from "react";

export function Age(props){
    console.log(props)

    return(
        <div>
            {props.users >= 18 ? <h3>Users older than 18</h3>
            : <h2>Less than 18</h2>}
            
            
        </div>
    )
}