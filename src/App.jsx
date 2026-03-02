import {Player} from "./components/Player.jsx";
import {GameBoard} from "./components/GameBoard.jsx";
import {useState} from "react";
import {Log} from "./components/Log.jsx";


function getActivePlayerSymbol(turns) {
  let activePlayerSymbol = 'X'

  if (turns.length !== 0 && turns[0].playerSymbol === 'X') {
    activePlayerSymbol = 'O'
  }
  return activePlayerSymbol;
}


function App() {
  const [turns, setTurns] = useState([])

  let activePlayerSymbol = getActivePlayerSymbol(turns);

  function onSelectSquare(row, column) {
    setTurns((currentTurns) => {
      let activePlayerSymbol = getActivePlayerSymbol(currentTurns)

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
        <Player active={activePlayerSymbol === 'X'} name='Player 1' symbol='X'/>
        <Player active={activePlayerSymbol === 'O'} name='Player 2' symbol='O'/>
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
