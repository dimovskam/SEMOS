import React, { useEffect, useState } from "react"

export const SugnUpForm = () => {

    const [ime,setIme]=useState("")
    const [prezime,setPrezime] = useState("");
    const [email,setEmail] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [tableValue,setTableValue] = useState()

  
    useEffect(()=>{
        console.log("Name", ime)
        console.log("Lastname", prezime)
        console.log("Email", email)
        console.log("Username", username)
        console.log("Password", password)
    },[ime, prezime, email, username, password])
  
  
    const ShowTable = () => {
        setTableValue(!tableValue)
    }
  
    return(
        <div id="sign-up">
            <h3>Sing Up!</h3>
            <br />
            <br />
            <input
            type="text"
            placeholder="Enter name"
            value={ime}
            onChange={(e)=>{setIme(e.target.value)}}
            />
            <br />
            <br />
            <input
            type="text"
            placeholder="Enter lastname"
            value={prezime}
            onChange={(e)=>{setPrezime(e.target.value)}}
            />
            <br />
            <br />
            <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            />
            <br />
            <br />
            <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            />
            <br />
            <br />
            <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
            <br />
            <br />
            <button onClick={ShowTable}>Prikazi podatoci</button>
            <br />
            <br />
            {tableValue && (
            <table border={1}>
                  <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ime}</td>
                        <td>{prezime}</td>
                        <td>{email}</td>
                        <td>{username}</td>
                        <td>{password}</td>
                    </tr>
                </tbody>
            </table>
            )
        }
        </div>
            
    )
}