import React, {useState,useEffect} from "react";

export function App(){
  const [car, setCar] = useState({model:'BMW', year:2021})

  useEffect(()=>{
    console.log('car:', car)
  },[car])

  function newCar(){
    setCar({
      // model:"Yugo",   
         ...car,
      year:2025
    })
  }
 
  return(
    <div id="app">
      <h2>Car</h2>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <button onClick={newCar}>Buy new Car</button>
    </div>
  )
}