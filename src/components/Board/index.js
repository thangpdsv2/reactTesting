import { useState } from 'react'
import Squery from '../Squery'




export default function Board() {
  const [arrBoard,setArrBoard] = useState(Array(9).fill(null))
  const [nextPlayer,setNextPlayer] = useState('X')
  function resetGame() {
    console.log('reset')
    setArrBoard(Array(9).fill(null))
  }
  function handlerClick(index) {
    if (arrBoard[index] !== null) {
      console.log('not null')
      return
    }
    if (checkWinner()) {
      console.log('winner')
      return
    }
    if (nextPlayer==='X') {
      arrBoard[index] = 'X'
      setNextPlayer('O')
    } else {
      arrBoard[index] = 'O'
      setNextPlayer('X')
    }
    setArrBoard([...arrBoard])
    console.log(arrBoard)
  }
  function checkWinner() {
    let arrWinning = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 4, 6],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]
    let winner = null
    arrWinning.forEach((item) => {
      if (arrBoard[item[0]] === arrBoard[item[1]] && arrBoard[item[1]] === arrBoard[item[2]]) {
        winner = arrBoard[item[0]]
      }
    })
    console.log('winner', winner)
    return winner
  }
  return (
    <>
      <div className="game">
        <div className="board-row">
          <Squery onSqueryClick={()=>handlerClick(0)} value={arrBoard[0]}/>
          <Squery  onSqueryClick={()=>handlerClick(1)} value={arrBoard[1]}/>
          <Squery  onSqueryClick={()=>handlerClick(2)} value={arrBoard[2]}/>


        </div>
        <div className="board-row">
          <Squery onSqueryClick={()=>handlerClick(3)} value={arrBoard[3]}/>
          <Squery  onSqueryClick={()=>handlerClick(4)} value={arrBoard[4]}/>
          <Squery onSqueryClick={()=>handlerClick(5)} value={arrBoard[5]}/>


        </div>
        <div className="board-row">
          <Squery onSqueryClick={()=>handlerClick(6)} value={arrBoard[6]}/>
          <Squery onSqueryClick={()=>handlerClick(7)} value={arrBoard[7]}/>
          <Squery onSqueryClick={()=>handlerClick(8)} value={arrBoard[8]}/>


        </div>
      </div>
      <div className="game-info">
        <button className="reset" onClick={resetGame}>Reset</button>
        <ol>{/* log history */}</ol>
        <p>Winner: {checkWinner()}</p>
      </div>
    </>
  );
}

