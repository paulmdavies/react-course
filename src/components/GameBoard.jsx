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
                    {[0, 1, 2].map((column) => {
                        const value = rowColumnTurns[`${row}${column}`] || undefined
                        return <li key={column}>
                            <button disabled={value} onClick={() => onSelectSquare(row, column)} key={column}>{value}</button>
                        </li>
                    })}
                </ol>
            </li>
        )}
    </ol>
}