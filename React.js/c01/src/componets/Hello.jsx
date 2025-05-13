import React from "react"
import { Goodbye } from "./Goodbye"
import { FirstClass } from "./FirstClass"

export class Hello extends React.Component{
    
    render(){
        return(
            <div>
            <FirstClass />
            <p style={{color:"red", backgroundColor: "pink"}}>This is a class Component</p>
            <Goodbye />
            </div>
        )
    }
}