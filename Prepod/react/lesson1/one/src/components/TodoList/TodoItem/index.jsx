// dummy component
import React, {useState} from "react";

export function TodoItem({ text, onDeleteTodo, id, switchEdit, isEditing }) {
  const [textInput, setTextInput] = useState(text);

  const onClick = () => {
    onDeleteTodo(id);
  };

  const onEditOn = () => {
    if (isEditing) {
      
      switchEdit(id);
    } else {
      switchEdit(id);
    } 
  
  };

  const onTodoTextChange = ({target: {value}}) => {
    setTextInput(value);
  };

  return (
    <li>
      { isEditing ? <input type="text" value={textInput} onChange={onTodoTextChange}/> : <span>{text}</span>  }
      <button onClick={onEditOn}> { isEditing ? "ok" : "edit" } </button>
      <button onClick={onClick}>delete</button>
    </li>
  );
}
