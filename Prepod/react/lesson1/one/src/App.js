import React from 'react';
import { UserInput } from './components/UserInput';
import { TodoList } from './components/TodoList';

// <> if VDOM conditional render, RENDER, SPA, css-in-js
const App = () => {
  const todosArr = ['схождить в магазин', 'заправить авто','помыть пол', 'помыть посуду'];

  // переписать на useState, где стейтом является весь массив
  // подумать в какой момент мы должны сетать новый массив (спред + новый элемент)

  const addTodo = (todoText) => {
    todosArr.push(todoText);
  };

  return (
      <div className="App">
         <UserInput onAddTodo={addTodo} />
         <TodoList todos={todosArr} />
      </div>
  );
}

export default App;



