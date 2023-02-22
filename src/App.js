import "./App.css";
import { useRef, useState } from "react";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevValue) => prevValue * 0);
  };
  return (
    <div>
      <div>
        <h1>Simple React Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        ></input>
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Minus</button>
        <button onClick={times}>Times</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Clear Number</button>
        <button onClick={resetResult}>Clear Result</button>
      </form>
    </div>
  );
}

export default App;
