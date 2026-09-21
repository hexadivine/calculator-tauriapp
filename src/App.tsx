// import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";
import "./App.css";
import Btn from "./components/btn/Btn";

function App() {
  const [output, setOutput] = useState<string>("0");

  const numberBtns: readonly string[][] = [
    ["C", "AC", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["+/-", "0", ".", "="],
  ];

  const getBtnClassName = (rowIndex: number, colIndex: number, rowLength: number): string => {
    if (rowIndex === 0) return "top-btn";
    if (colIndex === rowLength - 1) return "last-btn";
    return "";
  };

  return (
    <div className="calc">
      <div className="display">
        <div className="display-txt">{output}</div>
      </div>

      {numberBtns.map((btnRow, rowIndex) => (
        <div className="rows" key={rowIndex}>
          {btnRow.map((btn, colIndex) => (
            <Btn
              key={`${rowIndex}-${colIndex}`}
              txt={btn}
              classnm={getBtnClassName(rowIndex, colIndex, btnRow.length)}
              setOutput={setOutput}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
