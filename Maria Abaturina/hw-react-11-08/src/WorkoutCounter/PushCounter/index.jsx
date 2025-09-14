import { useState } from "react";

export function PushCounter() {
  const [count, setCounter] = useState(0);

  const increase = () => {
    setCounter((prevCounter) =>
      prevCounter < 10 ? prevCounter + 1 : prevCounter
    );
  };
  const decrease = () => {
    setCounter((prevCounter) =>
      prevCounter > 0 ? prevCounter - 1 : prevCounter
    );
  };
  return (
    <div>
      <h2>Анжумания ( 0 - 10 )</h2>
      <p>{count}</p>
      <button onClick={increase} disabled={count >= 10}>
        +
      </button>
      <button onClick={decrease} disabled={count <= 0}>
        -
      </button>
    </div>
  );
}
