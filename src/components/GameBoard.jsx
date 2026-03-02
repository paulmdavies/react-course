import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export function GameBoard() {
    const [gameBoard, updateGameBoard] = useState(initialGameBoard)

    function click(rowIndex, columnIndex) {
        updateGameBoard((previousGameBoard) => {
            let newGameBoard = [...previousGameBoard.map(row => [...row])]
            newGameBoard[rowIndex][columnIndex] = 'X'
            return newGameBoard
        })
    }

    return <ol id='game-board'>
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, columnIndex) => <button onClick={() => click(rowIndex, columnIndex)} key={columnIndex}>{playerSymbol}</button>)}
            </ol>
        </li>)}
    </ol>
}