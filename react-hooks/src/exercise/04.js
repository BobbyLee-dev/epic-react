// useState: tic tac toe
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'

function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null))

  const nextValue = calculateNextValue(squares)
  const winner = calculateWinner(squares)
  const status = calculateStatus(winner, squares, nextValue)

  function selectSquare(square) {
    if(squares[square]) {
      return;
    }
    const squaresCopy = [...squares]
    squaresCopy[square] = nextValue
    setSquares(squaresCopy)
  }

  function restart() {
  }

  function renderSquare(i) {
    return <button className="square" onClick={() => selectSquare(i)}>{squares[i]}</button>
  }
  
  return(
    <div className="board">
      <div className="status">Status</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )

}

function Game() {
  return <Board />
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return 'X'
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
}

function App() {
  return <Game />
}

export default App
