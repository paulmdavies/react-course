export function Log({turns}) {
    return <ol id='log'>
        {turns.map(turn => <li key={`${turn.row}${turn.column}`}>Player {turn.playerSymbol} played ({turn.row}, {turn.column})</li>)}
    </ol>
}