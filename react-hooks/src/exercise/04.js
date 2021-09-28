// useState: tic tac toe
// http://localhost:3000/isolated/exercise/04.js

import {util} from 'prettier'
import * as React from 'react'
import {useLocalStorageState} from '../utils'
function Board() {
  const [squares, setSquares] = useLocalStorageState('squares', () => Array(9).fill(null))
  const [squaresHistory, setSquaresHistory] = useLocalStorageState('squaresHistory', [])
  const [currentStep, setCurrentStep] = useLocalStorageState('step', squaresHistory.length)
  const nextValue = calculateNextValue(squares)
  const winner = calculateWinner(squares)
  const status = calculateStatus(winner, squares, nextValue)

  function selectSquare(square) {
    if(squares[square] || winner) {
      return;
    }
    const squaresCopy = [...squares]
    squaresCopy[square] = nextValue
    setSquares(squaresCopy)
  }

  function renderSquare(i) {
    return <button className="square" onClick={() => selectSquare(i)}>{squares[i]}</button>
  }
  
  return(
    <div className="board">
      <div className="status">{status}</div>
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
      <button onClick={() => setSquares(Array(9).fill(null))}>Restart</button>
    </div>
  )

}

function Game() {
  return <Board />
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  if(winner) {
    return `Winner: ${nextValue === 'X' ? 'O' : 'X'}`
  }
  return squares.some(square => square === null) ? `Next Player: ${nextValue}` : `Scratch: Cat's game`
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(item => item === null).length % 2 === 0 ? 'O' : 'X'
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const winningRows = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
 const hasWinner = winningRows.filter(row => {
    const [a,b,c] = row;
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return row;
    }
    return;
  })
  return hasWinner.length > 0 ? true : false;
}

function App() {
  return <Game />
}

export default App
