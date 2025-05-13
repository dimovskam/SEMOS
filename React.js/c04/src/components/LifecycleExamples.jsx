import React from "react";

export class LifecycleExample extends React.Component{

    constructor(props){
        super(props)
        console.log("THIS METHOD ID CALLED FROM CONSTRUCTOR")
        this.state = {
            promenliva: "Vrednost 1"
        }
    }
    
    componentDidMount(){
        console.log("THIS IS COMPONENT DID MOUNT")
    }

    smeniVrednost = () => {
        // this.state.promenliva = "Vrednost 2"
        this.setState({
            promenliva: "Vrednost 2"
        })
        console.log(this.state.promenliva)
    }

    render(){
        console.log("THIS IS RENDER METHOD")
        return(
            <div id='lifecycle-example'>
                <h1>Class Component Example</h1>
                <p>Vrednost na promenliva: {this.state.promenliva}</p>
                <button onClick={this.smeniVrednost}>Click Me!!!</button>
            </div>
        )
    }
}