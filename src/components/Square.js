import React from 'react'
import "./../Styles/board.css"

export default function Square(props){
    return(
        <div className="box">{props.value}</div>
    )
}