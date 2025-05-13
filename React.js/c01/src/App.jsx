import React from "react"
import { Hello } from "./componets/Hello"
import { Goodbye } from "./componets/Goodbye";
import { Homework } from "./componets/Homework";

export function App() {

const broj = 1;
var fraza = "denes slusam react";
let karakter = "c";
let nesto = undefined    

    return(
        <>
        <Hello />
        <h1>Hello from my React Function</h1>
        <Hello />
        <p>Hi</p>
        <hr />
        <p>{5+3}</p>
        <h2>Brojot koj sto go imam e {broj}</h2>
        <h4>Frazata e {fraza}</h4>
        <h6>Karakter random {karakter}</h6>
        <p>Ova nesto e {nesto}</p>
        < Homework />
        {/* <Goodbye /> */}
        
        </>


    ) 
}