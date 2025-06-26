import React from "react";

export class StudentClass extends React.Component {
   
    render(){
        console.log(this.props)
        return(
            <div id="StudentClass">
                <h3>Student</h3>
                <p>Name: {this.props.student.name}</p>
                <p>Adress: {this.props.student.adress}</p>
                <p>College: {this.props.student.college}</p>
                <p>Index: {this.props.student.index}</p>
            </div>
        )
    }
}