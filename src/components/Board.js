import React from "react";
import "./../Styles/board.css"
import Square from "./Square.js"

export default function Board(){
    const [turn, setTurn] = React.useState(true);
    const tempArr = [1 , 2 ,3];

    function toggleTurn(){
        setTurn(!turn);
    }

    return (
        <>
            <div className="board-row">
                {tempArr.map(item => (<Square turn = {turn} toggleTurn = {toggleTurn}/>) )}
            </div>
            <div className="board-row">
                {tempArr.map(item => (<Square turn = {turn} toggleTurn = {toggleTurn}/>) )}
            </div>
            <div className="board-row">
                {tempArr.map(item => (<Square turn = {turn} toggleTurn = {toggleTurn}/>) )}
            </div>
        </>
    );
}