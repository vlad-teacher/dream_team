import { useState } from "react";
import classnames from "./index.module.css";

// render

export function UserInput() {
   const [textFromInput, setTextFromInput] = useState('default!'); // ['default!', () => {}]

  const clickHanlder = (e) => {
    console.log(e);
  };

  const changeHandler = (e) => {

    setTextFromInput(e.target.value);

  };

  console.log('outside', textFromInput);

  return (
    <div className={classnames.wrapper}>
      <div>{textFromInput}</div>
      <input type="text" onChange={changeHandler} />
      <button onClick={clickHanlder}>OK</button>
    </div>
  );
}
