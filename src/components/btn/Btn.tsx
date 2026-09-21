import React from "react";
import "./Btn.css";

type BtnProps = {
  txt: string;
  classnm?: string;
  setOutput?: React.Dispatch<React.SetStateAction<string>>;
};

function Btn({ txt, classnm, setOutput }: BtnProps) {
  const handleClick = () => {
    if (!setOutput) return;

    setOutput((prev) => {
      if (txt === "C" || txt === "AC") {
        return "0";
      }

      if (txt === "=") {
        try {
          const result = Math.round(eval(prev) * 1000) / 1000;
          return result.toString();
        } catch {
          return "Error";
        }
      }

      if (prev === "0") {
        const isOperator = ["+/-", "%", "/", "*", "-", "+"].includes(txt);
        return isOperator ? prev : txt;
      }

      if (txt === "+/-") {
        return prev.startsWith("-") ? prev.slice(1) : `-${prev}`;
      }

      if (txt === "%") {
        try {
          const result = Math.round((eval(prev + "/100") || 0) * 1000) / 1000;
          return result.toString();
        } catch {
          return "Error";
        }
      }

      if (txt === ".") {
        return prev.includes(".") ? prev : prev + txt;
      }

      return prev + txt;
    });
  };

  return (
    <button type="button" className={`btn ${classnm || ""}`} onClick={handleClick}>
      {txt}
    </button>
  );
}

export default Btn;