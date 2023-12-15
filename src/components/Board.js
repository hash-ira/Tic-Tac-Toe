import React from "react";
import "./../Styles/board.css"
import Square from "./Square.js"

export default function Board(){
    const [turn, setTurn] = React.useState(true);
    const tempArr = [1 , 2 , 3];
    const [arr , setArr] = React.useState(tempArr.map(item => (new Array(3).fill(" "))));
    const [winMsg , setWinMsg] = React.useState(0);
    function toggleTurn(){
        const winner = calculateWinner(arr);
        if(winner !== 0){
            if(turn) setWinMsg(1);
            else setWinMsg(2);
            return;
        }
        setTurn(!turn);
    }

    
    return (
        <>
            {winMsg === 0 && <h1>{ `${turn ? "First" : "Second"} Player's turn` }</h1>}
            {winMsg !== 0 && <h1>{`Player ${winMsg === 1 ? "First" : "Second"} is the Winner`}</h1>}
            <div className="board-row">
                {tempArr.map(item => (
                    <Square 
                        id = {item}
                        x = {0}
                        y = {item - 1}
                        winMsg = {winMsg}
                        arr = {arr}
                        setArr = {setArr}
                        turn = {turn} 
                        toggleTurn = {toggleTurn}
                    />
                ) )}
            </div>

            <div className="board-row">
                {tempArr.map(item => (
                    <Square 
                        id = {3 + item}
                        x = {1}
                        y = {item - 1}
                        winMsg = {winMsg}
                        arr = {arr}
                        setArr = {setArr}
                        turn = {turn} 
                        toggleTurn = {toggleTurn}
                    />
                ) )}
            </div>

            <div className="board-row">
                {tempArr.map(item => (
                    <Square 
                        id = {6 + item}
                        x = {2}
                        y = {item - 1}
                        winMsg = {winMsg}
                        arr = {arr}
                        setArr = {setArr}
                        turn = {turn}
                        toggleTurn = {toggleTurn}
                    />
                ) )}
            </div>
        </>
    );
}

function calculateWinner(arr){
    for(let j = 0 ; j < 3 ; j++){
        let check = true;
        // check column for X
        for(let i = 0 ; i < 3 ; i++){
            if(arr[i][j] !== 'X'){
                check = false;
                break;
            }
        }
        if(check) return 1;
        
        // check column for O
        check = true;
        for(let i = 0 ; i < 3 ; i++){
            if(arr[i][j] !== 'O'){
                check = false;
                break;
            }
        }
        if(check) return 2;
    
    }
    
    for(let  i = 0 ; i < 3 ; i++){
        let check = true;
        // check row for X
        for(let j = 0 ; j < 3 ; j++){
            if(arr[i][j] !== "X"){
                check = false;
                break;
            }
        }
        if(check) return 1;
        
        // check row for O
        check = true;
        for(let j = 0 ; j < 3 ; j++){
            if(arr[i][j] !== "O"){
                check = false;
                break;
            }
        }
        if(check) return 2;
        
    }
    
    
    //diagonal check for winner
    let check = true;
    for(let i = 0; i < 3 ; i++){
        if(arr[i][i] !== "X"){
            check = false;
            break;
        }
    }
    if(check) return 1;

    check = true;
    for(let i = 0; i < 3 ; i++){
        if(arr[i][i] !== "O"){
            check = false;
            break;
        }
    }
    if(check) return 2;

    //reverse diagonal check for winner
    check = true;
    for(let i = 0; i < 3 ; i++){
        if(arr[i][2-i] !== "X"){
            check = false;
            break;
        }
    }
    if(check) return 1;

    check = true;
    for(let i = 0; i < 3 ; i++){
        if(arr[i][2-i] !== "O"){
            check = false;
            break;
        }
    }
    if(check) return 2;

    return 0;
}