import { useState } from "react";
import Board from "./components/Board"

function App() {

  const WinConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]


  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({xScore:0, oScore:0});

  const handleBoxClick = (boxIndex) => {
  
  const upDateBoard = board.map((value, index)=>{
    if (index === boxIndex){
      return xPlaying === true ? "X" : "O";
    }else{
      return value;
    }
  })



  const winner = checkWinner(upDateBoard)
  if(winner){
    if (winner === "O"){
      let {oScore} = scores;
    }else 
  }
  setBoard(upDateBoard);

  setXPlaying(!xPlaying);

 }

const checkWinner = (board) =>{
  for(let i =0; i < WinConditions.length; i++){
    const [x,y,z] = WinConditions[i];

    if(board[x] && board[x] === board[y] && board[y] === board[z]){
      console.log(board[x]);
      return board[x];
    }
  }
}

  return (
    <div className="App">
     
     <Board board={board} onClick={handleBoxClick}/>
    </div>
  )
}

export default App;
