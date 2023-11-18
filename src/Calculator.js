import React, { useState } from "react";

const Calculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const validateInput = () => {
    if (input1 == "" || input2 == "" || isNaN(input1) || isNaN(input2)) {
      setError("Please enter valid numbers.");
      return false;
    }
    setError(null);
    return true;
  };

  const add = () => {
    if (validateInput()) {
      setResult(parseFloat(input1) + parseFloat(input2));
    }
  };

  const subtract = () => {
    if (validateInput()) {
      setResult(parseFloat(input1) - parseFloat(input2));
    }
  };

  const multiply = () => {
    if (validateInput()) {
      setResult(parseFloat(input1) * parseFloat(input2));
    }
  };

  const divide = () => {
    if (validateInput()) {
      if (input2 !== "0") {
        setResult(parseFloat(input1) / parseFloat(input2));
      } else {
        setError("Division by zero is not allowed!");
      }
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>React Calculator</h1>
        <input
          type="text"
          placeholder="Num 1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />

        <input
          type="text"
          placeholder="Num 2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />

        <div className="buttons-div">
          <button onClick={add}>+</button>
          <button onClick={subtract}>-</button>
          <button onClick={multiply}>*</button>
          <button onClick={divide}>/</button>
        </div>

        <div className="error">
          {error ? (
            <p className="red">{error}</p>
          ) : result != null ? (
            <p className="green">success</p>
          ) : null}
        </div>

        <div className="success">
          {" "}
          {result != null ? `Result: ${result}` : null}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
