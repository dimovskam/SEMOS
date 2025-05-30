import React  from 'react';
import { FirstClass } from './FirstClass';

export class Hello extends React.Component {

    render(){
        return(
            <div>
            <p>This is a class component</p>
            <FirstClass />
            </div>
        )
    }

}