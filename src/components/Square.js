import React from 'react'
import "./../Styles/board.css"

export default function Square(props){
    const [val ,setVal] = React.useState(" ");

    function toggleBox(){
        if(val === " "){
            if(props.turn) setVal("X");
            else setVal("O");
        }
        props.toggleTurn();
    }
    return(
        <div className="box" onClick={toggleBox}>{val}</div>
    )
}