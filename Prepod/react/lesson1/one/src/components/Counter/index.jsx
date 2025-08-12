import { useState } from "react";

// TODO: two way binding, customHook

function heavy () {
  console.log("HEAVY FUNC");
  return [1,2,3];
}

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [arrays, setArrays] = useState(() => heavy()); // [1,2,3]

  const clickPlus = () => {

    setTimeout(() => {
      setCounter((prevCounter) => prevCounter + 1);

      setArrays((nashMassiv) => [...nashMassiv, 1]);
    }, 1000);

      // setCounter((lastKnownCounter) => lastKnownCounter + 1);
  };

  console.log(arrays);

  return (
    <div>
      <button>-</button>
      <div>{counter}</div>
      <button onClick={clickPlus}>+</button>
    </div>
  );
};

