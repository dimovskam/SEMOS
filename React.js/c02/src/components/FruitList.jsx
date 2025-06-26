import React from "react"

export const FruitList = ({listaNaOvosja}) => {

    return(
        <div id="fruit-list">
            <h2>Fruit List: </h2>
            <ul>
                {/* {listaNaOvosja.map((ovosje,i)=>{
                    return(
                        <li key={i}>{ovosje}</li>
                    )
                })} */}
                {listaNaOvosja.map((ovosje,i) => {
                    <li key={i}>{ovosje}</li>
                })}  
            </ul>
        </div>
    )
}