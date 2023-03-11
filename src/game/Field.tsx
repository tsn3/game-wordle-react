import { Keyboard } from "./Keyboard";
import { useState } from "react";
import { range } from "../util/array";

const WORLD_LENGHT = 5
const ROWS = 6

type CellState = {
  letter: string;
  variant?: "correct" | "semi-correct" | "incorrect"
}

type Board = CellState[][]

const getEmptyCell = () => ({
  letter: "",
})
const  getEmptyBoard = () =>
  range(ROWS).map(() =>
    range(WORLD_LENGHT).map(getEmptyCell)
  )

export const Field = () => {

  const [board, setBoard] = useState<Board>(getEmptyBoard())

  const handleBackspace = () => {
    console.log("bsp");
  }
  const handlePressed = (letter) => {
    console.log(letter);
    setBoard((prev) => {
      const nextState = JSON.parse(JSON.stringify(prev))
      nextState[0][0].letter = letter
      return nextState

    })

  }

  console.log(board);
  return (
  <>
    <div className="board">
      {
        board.map((row, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {
              row.map((cell, index) => (
                <div className={`cell ${cell.variant}`} key={index}>
                  {cell.letter}
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
    <Keyboard onPressed={handlePressed} onBackspace ={handleBackspace} />
  </>)
}