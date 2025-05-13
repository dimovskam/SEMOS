import React from "react";
import { Domasno } from "./components/Domasno";
import { Comments } from "./components/Comments";
import { Car } from "./components/Car";
import { Linkedin } from "./components/Linkedin";


let user1 = {ime:"Marko",
  prezime: "Markovski",
  adresa: "Skopje",
  godini: 22
}

let user2 ={
  ime: "Ivan",
  prezime:"Ivanov",
  adresa: "Ohrid",
  godini: 17
}

let user3 = {
  ime:"David",
  prezime: "Davidovski",
  adresa: "Shtip",
  godini: 19
}

let user4 = {
  ime: "Petar",
  prezime:"Petreski",
  adresa: "Skopje",
  godini: 27
}

let comments = [
  {id:0, author:"Filip", content:"Book1"},
  {id:1, author:"Andrej", content:"Book2"},
  {id:2, author:"Ivana", content:"Book3"}
]

let registracija = [
  {grad: {naselba:"Naselba 1", ulica: "Ulica 1"}, oznaka: "SK-0000-AB"},
  {grad: {naselba:"Naselba 2", ulica: "Ulica 2"}, oznaka: "GV-0000-AB"},
  {grad: {naselba:"Naselba 3", ulica: "Ulica 3"}, oznaka: "TE-0000-AB"}
]

let cars = [
  {brand: "Ford", model: "Fiesta", year:2012, plates:registracija[0]},
  {brand: "Opel", model: "Astra", year:2015, plates: registracija[1]},
  {brand: "VW", model: "Polo", year:2020,plates: registracija[2]}
  
]
const settings = {
  showConnect: true,
  isConnected: true
}

const user = {
  name: "Marija Dimovska",
  email: "marijadimovska099@gmail.com",
  image: ""
}

export function App(){

  return(
    <div id="app">
      <Linkedin 
      user={user}
      settings={settings}
      />
      <hr />
      <Car
      vozila={cars}
      />
      <hr/>
      <Comments
      listOfComments={comments}
      datum="06/05/2025"
       />
      <hr />
      <Domasno 
      korisnik1={user1}
      korisnik2={user2}
      korisnik3={user3}
      korisnik4={user4}
      />
    </div>
  )
}