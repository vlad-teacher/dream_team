// dummy component
import React, { useState } from "react";

export function TodoItem({
  text,
  onDeleteTodo,
  id,
  switchEdit,
  isEditing,
  changeTodoText,
}) {
  const [textInput, setTextInput] = useState(text);

  const onClick = () => {
    onDeleteTodo(id);
  };

  const onEditOn = () => {
    if (isEditing) {
      changeTodoText(textInput, id);
      switchEdit(id); // завершается редактирование!
    } else {
      switchEdit(id); // начало редактирование!
    }
  };

  const onTodoTextChange = ({ target: { value } }) => {
    setTextInput(value);
    console.log(`значение text ${text}`);
    console.log(`значение textInput ${textInput}`);
  };

  return (
    <li>
      {isEditing ? (
        <input type="text" value={textInput} onChange={onTodoTextChange} />
      ) : (
        <span>{text}</span>
      )}
      <button onClick={onEditOn}> {isEditing ? "ok" : "edit"} </button>
      <button onClick={onClick}>delete</button>
    </li>
  );
}
