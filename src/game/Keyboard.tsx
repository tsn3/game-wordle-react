const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
const buttons = rows.map((row => row.split('')))
export const Keyboard = ({ onBackspace, onPressed }) => (
  <div className="keyboard">
    <div className="keyboard">{buttons.map((row, index) => (
      <div key={index}>
        {row.map(letter => (
          <button onClick={() => onPressed(letter)} key={letter}>
            {letter}
          </button>
        ))}</div>
    ))}
    </div>
    <div>
      <button onClick={() => onBackspace()}>Backspace</button>
    </div>
  </div>
)
