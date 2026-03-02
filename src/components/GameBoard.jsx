export function GameBoard({onSelectSquare, turns}) {
    let rowColumnTurns = {}
    turns.forEach((turn) =>  {
        const key = `${turn.row}${turn.column}`
        rowColumnTurns[key] = turn['playerSymbol']
    })

    return <ol id='game-board'>
        {[0, 1, 2].map(row =>
            <li key={row}>
                <ol>
                    {[0, 1, 2].map((column) =>
                        <li key={column}>
                            <button onClick={() => onSelectSquare(row, column)} key={column}>{rowColumnTurns[`${row}${column}`]}</button>
                        </li>
                    )}
                </ol>
            </li>
        )}
    </ol>
}