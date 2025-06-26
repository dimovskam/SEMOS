import React from 'react'

export function Student(props){
    console.log(props)

    return(
        <div id="stident">
            <h3>Student</h3>
            <p>Name: {props.student.name}</p>
            <p>Adress: {props.student.adress}</p>
            <p>College: {props.student.college}</p>
            <p>Index: {props.student.index}</p>
        </div>
    )
}