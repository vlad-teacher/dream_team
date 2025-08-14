import { useState } from "react";

export function Exercisespresscounter() {
  const [count, setCounter] = useState(0);

  const increase = () => {
    setCounter((prevCounter) =>
      prevCounter < 100 ? prevCounter + 10 : prevCounter
    );
  };
  const decrease = () => {
    setCounter((prevCounter) =>
      prevCounter > 0 ? prevCounter - 10 : prevCounter
    );
  };
  return (
    <div>
      <h2>Пресс качат ( 0 - 100 )</h2>
      <p>{count}</p>
      <button onClick={increase} disabled={count >= 100}>
        +10
      </button>
      <button onClick={decrease} disabled={count <= 0}>
        -10
      </button>
    </div>
  );
}
