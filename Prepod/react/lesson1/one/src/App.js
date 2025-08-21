import React, { useState } from "react";
import { UserInput } from "./components/UserInput";
import { TodoList } from "./components/TodoList";

// react dev tools memo
// <> if VDOM conditional render, RENDER, SPA, css-in-js
const App = () => {
  const [todosArr, setTodosArr] = useState([
    {
      id: Math.random().toString(),
      text: "схождить в магазин",
      isEditing: false,
    },
    {
      id: Math.random().toString(),
      text: "заправить авто",
      isEditing: false,
    },
    {
      id: Math.random().toString(),
      text: "помыть пол",
      isEditing: false,
    },
    {
      id: Math.random().toString(),
      text: "помыть посуду",
      isEditing: false,
    },
  ]);

  const addTodo = (text) => {
    setTodosArr((prevTodosArr) => [
      ...prevTodosArr,
      {
        id: Math.random().toString(),
        isEditing: false,
        text,
      },
    ]);
  };

  const onDeleteTodo = (deleteId) => {
    setTodosArr((prevTodosArr) =>
      prevTodosArr.filter(({ id }) => deleteId !== id)
    );
  };

  const switchEdit = (todoId) => {
    setTodosArr((prevTodosArr) =>
      prevTodosArr.map((item) =>
        item.id === todoId ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  };

  const onChangeTodoText = (textInput, idChange) => {
    setTodosArr((prevTodosArr) => {
      return prevTodosArr.map((item) => {
        if (item.id === idChange) {
          return { ...item, text: textInput };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <div className="App">
      <UserInput onAddTodo={addTodo} />
      <TodoList
        todos={todosArr}
        deleteTodo={onDeleteTodo}
        switchEdit={switchEdit}
        todoTextChanged={onChangeTodoText}
      />
    </div>
  );
};

export default App;
