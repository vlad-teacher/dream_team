import { useState } from "react";
import classnames from "./index.module.css";

export function UserInput(props) {
   const [textFromInput, setTextFromInput] = useState('');

  const clickHanlder = (e) => {
    console.log(e);
  };

  const changeHandler = (e) => {
    setTextFromInput(e.target.value); // обрабатываем инпут
    
    props.onAddTodo(e.target.value);
  };

  return (
    <div className={classnames.wrapper}>
      <div>{textFromInput}</div>
      <input type="text" onChange={changeHandler} />
      <button onClick={clickHanlder}>OK</button>
    </div>
  );
}
