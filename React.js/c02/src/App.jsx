import React from "react"
import {Hello} from "./components/Hello"
import { Student } from "./components/Student";
import { StudentClass } from "./components/StudentClass";
import {Comments} from "./components/Comments"
import { UserLogin } from "./components/UserLogin";
import { FruitList } from "./components/FruitList";


var firstName = "Nikola";
var lastName = "Nikolovski";
var age = 28;

var student = {
  name: "Iva",
  adress: "Skopje",
  college: "UKIM",
  index: 141088
}
var hasComments = false;

const user = {
  isLoggedIn: false,
  username: "Marija",
  role: "admin"
}

var listaNaOvosja = ["appe", "orange", "banana"]

export function App(){

  return(
    <div id='app'>
      <FruitList listaNaOvosja={listaNaOvosja}/>
      <hr />
      <UserLogin 
      isLoggedIn={user.isLoggedIn}
      username={user.username}
      role={user.admin}
      />
      <hr />
      <Hello ime="Marija" prezime="Dimovska"/>
      <h2>App</h2>
      <Hello ime={firstName} prezime={lastName} age={age}/>
      <hr />
      <Student student={student}/>
      <hr />
      <StudentClass student={student} />
      <hr />
      <Comments hasComments={hasComments} longComment={false} />
    </div>
  )
}