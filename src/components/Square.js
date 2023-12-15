import React from 'react'
import "./../Styles/board.css"

export default function Square(props){
    const [val ,setVal] = React.useState(" ");

    function toggleBox(){
        if(val === " "){
            if(props.turn) setVal("X");
            else setVal("O");

            const newArr = [...props.arr];
            if(props.turn) newArr[props.x][props.y] = "X";
            else newArr[props.x][props.y] = "O";
            
            props.setArr(newArr);
            props.toggleTurn();
        }else{
            return;
        }
    }
    return(
        <div className="box" onClick={toggleBox}>{val}</div>
    )
}