import React from "react"
import { Age } from "./components/Age"
import { Adress } from "./components/Adress"


let user1 = {
ime: "Marko",
prezime: "Markovski",
adresa: "Skopje",
godini: 23
}
let user2 = {
ime: "Anastasija",
prezime: "Risteska",
adresa: "Stip",
godini: 20
}
let user3 ={
ime:"Andrej",
prezime:"Andreev",
adresa: "Gevgelija",
godini: 18
}
let user4 = {
ime: "Jakov",
prezime: "Micevski",
adresa: "Skopje",
godini: 17
}

export function App() {

  return(
    <div id='app'>
      <Adress 
      korisnik1={user1}
      korisnik2={user2}
      korisnik3={user3}
      korisnik4={user4}
      />
      <Age 
      korisnik1={user1}
      korisnik2={user2}
      korisnik3={user3}
      korisnik4={user4}
      />

    </div>
  )
}