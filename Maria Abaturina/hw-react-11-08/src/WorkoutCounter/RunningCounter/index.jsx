import { useState } from "react";

export function Runningcounter() {
  const [count, setCounter] = useState(0);

  const increase = () => {
    setCounter((prevCounter) =>
      prevCounter < 1000 ? prevCounter + 10 : prevCounter
    );
  };
  const decrease = () => {
    setCounter((prevCounter) =>
      prevCounter > 0 ? prevCounter - 10 : prevCounter
    );
  };
  return (
    <div>
      <h2>Бегит ( 0 - 1000 )</h2>
      <p>{count}</p>
      <button onClick={increase} disabled={count >= 1000}>
        +10
      </button>
      <button onClick={decrease} disabled={count <= 0}>
        -10
      </button>
    </div>
  );
}
