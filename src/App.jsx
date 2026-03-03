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
        <Player active={activePlayerSymbol === 'X'} name='Player 1' symbol='X'/>
        <Player active={activePlayerSymbol === 'O'} name='Player 2' symbol='O'/>
      </ol>
        {winner !== undefined && <GameOver winner={winner} rematch={rematch} />}
      <GameBoard
          onSelectSquare={onSelectSquare}
          turns={turns}
      />
    </div>
    <Log turns={turns}/>
  </main>
}

export default App
