import {Player} from "./components/Player.jsx";
import {GameBoard} from "./components/GameBoard.jsx";
import {useState} from "react";

function App() {
  const [activePlayerIndex, setActivePlayerIndex] = useState('1')

  function toggleActivePlayer() {
    setActivePlayerIndex((currentActivePlayerIndex) => currentActivePlayerIndex === '1' ? '2' : '1')
  }

  return <main>
    <div id='game-container'>
      <ol id='players' className='highlight-player'>
        <Player active={activePlayerIndex === '1'} name='Player 1' symbol='X'/>
        <Player active={activePlayerIndex === '2'} index='2' name='Player 2' symbol='O'/>
      </ol>
      <GameBoard activePlayerSymbol={activePlayerIndex === '1' ? 'X' : 'O'} toggleActivePlayer={toggleActivePlayer}/>
    </div>
  </main>
}

export default App
