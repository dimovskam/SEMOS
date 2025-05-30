import React from "react"
import {Hello} from "./components/Hello.jsx"
import { Goodbye } from "./components/Goodbye.jsx";

export function App() {


  const broj = 1;
  var fraza = 'denes slusam react';
  let karakter = 'c';
  let nesto = undefined


  return(
    <div id='app'>
      <Hello />
      <h2>Hello from my React Function </h2>
      <Hello />
      <p>Hi</p>
      <hr />
      <p>{5+3}</p>
      <h2>Brojot koj sto go imam e {broj}</h2>
      <h3>Frazate e: {fraza}</h3>
      <h4>Karakter random:{karakter}</h4>
      <h6>Ova nesto e: {nesto}</h6>
      <Goodbye />
    </div>
  )
}