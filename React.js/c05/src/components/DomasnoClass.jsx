import React from "react";

export class DomasnoClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            tableValue: true,
        }
    }
      
    


    render(){
         return(
            <div id="domasno-class">
                <h1>Sign Up</h1>
                <input
            type="text"
            placeholder="Enter name"
            value={this.firstName}
            onChange={(e)=>{this.state.firstName(e.target.value)}}
            />
            <br />
            <br />
            <input
            type="text"
            placeholder="Enter lastname"
            value={this.lastName}
            onChange={(e)=>{this.state.lastName(e.target.value)}}
            />
            <br />
            <br />
            <input
            type="email"
            placeholder="Enter email"
            value={this.email}
            onChange={(e)=>{this.state.email(e.target.value)}}
            />
            <br />
            <br />
            <input
            type="text"
            placeholder="Enter username"
            value={this.username}
            onChange={(e)=>{this.state.username(e.target.value)}}
            />
            <br />
            <br />
            <input
            type="password"
            placeholder="Enter password"
            value={this.password}
            onChange={(e)=>{this.state.password(e.target.value)}}
            />
            <br />
            <br />
            
            <br />
            {/* <button onClick={ShowTable}>Prikazi podatoci</button>
            <br />
            <br />
            {tableValue && (
            <table border={1}>
                  <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.firstName}</td>
                        <td>{this.lastName}</td>
                        <td>{this.email}</td>
                        <td>{this.username}</td>
                        <td>{this.password}</td>
                    </tr>
                </tbody>
            </table> */}
            
            </div>
        )
    }
}