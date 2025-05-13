import  React from "react";
import {Hello} from "./components/Hello.jsx"
import { Student } from "./components/Student.jsx";
import { StudentClass } from "./components/StudentClass.jsx";
import { Comments } from "./components/Comments.jsx";
import { UserLogin } from "./components/User.Login.jsx";
import { FruitList } from "./components/FruitList.jsx";

var ime = "Nikola" 
var prezime = "Nikoloski"
var age = 28

var student = {
  name:'Iva',
  address: "Skopje",
  college: "UKIM",
  index: 141088
}

var hasComments=false;

const user = {
  isLoggedIn:true,
  username: "Petar",
  role: "admin"

}

var listaNaOvosje=["apple","orange","banana"]
export function App(){

  return(
    <div id="app">
      <FruitList listaNaOvosje={listaNaOvosje}/>
      <hr />
      <UserLogin 
      isLoggedIn = {user.isLoggedIn}
      username = {user.username}
      role = {user.role}/>
      <hr />
      <Hello ime="Marija" prezime="Dimovska"/>
      <h2>App</h2>
      <Hello ime={ime} prezime={prezime} age={age}/>
      <hr />
      < Student student={student}/>
      <hr />
      <StudentClass student={student}/>
      <hr />
      <Comments hasComments={hasComments} longComments = {false}/>
    </div>
  )
}