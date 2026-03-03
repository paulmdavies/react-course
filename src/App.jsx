import {Player} from "./components/Player.jsx";
import {GameBoard} from "./components/GameBoard.jsx";
import {useState} from "react";
import {Log} from "./components/Log.jsx";
import {GameOver} from "./components/GameOver.jsx";


const WINNING_COMBINATIONS = [
    new Set(['00', '01', '02']),
    new Set(['10', '11', '12']),
    new Set(['20', '21', '22']),
    new Set(['00', '10', '20']),
    new Set(['01', '11', '21']),
    new Set(['02', '12', '22']),
    new Set(['00', '11', '22']),
    new Set(['02', '11', '20'])
]


function getActivePlayerSymbol(turns) {
  let activePlayerSymbol = 'X'

  if (turns.length !== 0 && turns[0].playerSymbol === 'X') {
    activePlayerSymbol = 'O'
  }
  return activePlayerSymbol;
}


function App() {
  const [turns, setTurns] = useState([])
  const [players, setPlayers] = useState({
      'X': 'Player 1',
      'O': 'Player 2'
  })

    let winner = undefined
    for (const playerSymbol of ['X', 'O']) {
        const playerTurnCoordinates = new Set(turns.filter(turn => turn.playerSymbol === playerSymbol).map(turn => `${turn.row}${turn.column}`))

        for (const winningCombination of WINNING_COMBINATIONS) {
            if (winningCombination.isSubsetOf(playerTurnCoordinates)) {
                console.log(`Player ${playerSymbol} wins`)
                winner = playerSymbol
            }
        }

        if (!winner && turns.length === 9) {
            winner = null
        }
    }

  let activePlayerSymbol = getActivePlayerSymbol(turns);

  function onSelectSquare(row, column) {
    setTurns((currentTurns) => {
      let activePlayerSymbol = getActivePlayerSymbol(currentTurns)

      const turn = {
        'playerSymbol': activePlayerSymbol,
        'row': row,
        'column': column
      }
      return [turn, ...currentTurns]
    })
  }

  function rematch() {
      setTurns([])
  }

  return <main>
    <div id='game-container'>
      <ol id='players' className='highlight-player'>
        <Player active={activePlayerSymbol === 'X'} name={players['X']} symbol='X' setPlayers={setPlayers}/>
        <Player active={activePlayerSymbol === 'O'} name={players['O']} symbol='O' setPlayers={setPlayers}/>
      </ol>
        {winner !== undefined && <GameOver winner={players[winner]} rematch={rematch} />}
      <GameBoard
          onSelectSquare={onSelectSquare}
          turns={turns}
      />
    </div>
    <Log turns={turns} players={players}/>
  </main>
}

export default App
