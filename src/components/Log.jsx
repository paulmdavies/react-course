export function Log({turns, players}) {
    return <ol id='log'>
        {turns.map(turn => <li key={`${turn.row}${turn.column}`}>{players[turn.playerSymbol]} played ({turn.row}, {turn.column})</li>)}
    </ol>
}