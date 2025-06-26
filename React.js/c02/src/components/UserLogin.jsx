import React from "react"

export const UserLogin = ({isLoggedIn,username,role}) => {

    return(
        isLoggedIn ? <div id="user-login">
            {role === "admin" ? <h2>Welcome Back admin {username}</h2>
            :
            <h2>Welcome Back {username}</h2>}
        </div>
        :
        <div>
        <h2>Hello, Guest please log in!!!</h2>
        </div>    
    )
}