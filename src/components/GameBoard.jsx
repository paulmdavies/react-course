export function GameBoard() {
    const initialGameBoard = [
        ['X', null, null],
        [null, 'O', null],
        [null, null, null],
    ]

    return <ol id='game-board'>
        {initialGameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, columnIndex) => <button key={columnIndex}>{playerSymbol}</button>)}
            </ol>
        </li>)}
    </ol>
}