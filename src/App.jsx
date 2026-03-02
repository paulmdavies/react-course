import {Player} from "./components/Player.jsx";
import {GameBoard} from "./components/GameBoard.jsx";
import {useState} from "react";
import {Log} from "./components/Log.jsx";


function App() {
  const [activePlayer, setActivePlayer] = useState('X')
  const [turns, setTurns] = useState([])

  function onSelectSquare(row, column) {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X')
    setTurns((currentTurns) => {
      let activePlayerSymbol = 'X'

      if (turns.length !== 0 && turns[0].playerSymbol === 'X') {
        activePlayerSymbol = 'O'
      }

      const turn = {
        'playerSymbol': activePlayerSymbol,
        'row': row,
        'column': column
      }
      return [turn, ...turns]
    })
  }

  return <main>
    <div id='game-container'>
      <ol id='players' className='highlight-player'>
        <Player active={activePlayer === 'X'} name='Player 1' symbol='X'/>
        <Player active={activePlayer === 'O'} name='Player 2' symbol='O'/>
      </ol>
      <GameBoard
          onSelectSquare={onSelectSquare}
          turns={turns}
      />
    </div>
    <Log turns={turns}/>
  </main>
}

export default App
