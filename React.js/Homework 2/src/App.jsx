import React from "react"
import { Age } from "./components/Age"

var userOne = {
  ime:"Marko",
  prezime: "Markovski",
  adresa: "Skopje",
  godini: 22
}

var userTwo ={
  ime: "Ivan",
  prezime:"Ivanov",
  adresa: "Ohrid",
  godini: 17
}

var userThree = {
  ime:"David",
  prezime: "Davidovski",
  adresa: "Shtip",
  godini: 19
}

var userFour = {
  ime: "Petar",
  prezime:"Petreski",
  adresa: "Skopje",
  godini: 16
}

const Users = {userOne, userTwo, userThree, userFour}
  


export function App(){
  return(
    <div>
      <h2>App</h2>
      <hr />
      <Age />
    </div>
  )
}