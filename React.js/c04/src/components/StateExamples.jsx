import React,{useEffect, useState} from "react";

export const StateExamples = () => {

    const [promenliva,setPromenliva] = useState("Vrednost 1")
    const [inputValue,setInputValue] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [clickImage,setClickImage] = useState(0)

    useEffect(()=>{
        console.log("Username:",username)
        console.log("Password: ",password)
    },[username,password]) // dependency array ako e prazen ova ke bide componentDidMount,

    // function changeValue(){
    //     setPromenliva("Nova Vrednost 2")
    // }
    function handleChangeValue(event){
        console.log(event)
        setInputValue(event.target.value)
    }



    return(
        <div id="state-examples">
            <h2>State: {promenliva}</h2>
            <button onClick={() => {setPromenliva("Nova Vrednost 3")}}>Promeni</button>
            <br />
            <br />
            <input 
            type="text"
            placeholder="Enter something here"
            value={inputValue}
            onChange={handleChangeValue}
            />
            <br />
            <br />
            <input 
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(event)=>{setUsername(event.target.value)}}
            />
            <br />
            <br />
            <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
            <br />
            <br />
            <h2>Counter {clickImage}</h2>
            <img
            src="https://th.bing.com/th/id/OIP.fbVYt4kT_v7zYCDsYUQSJgAAAA?rs=1&pid=ImgDetMain"
            alt="img"
            onClick={()=>{setClickImage(clickImage + 1)}}
            />


        </div>
    )
}