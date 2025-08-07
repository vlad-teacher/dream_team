import React from 'react';
import { UserInput } from './components/UserInput';
import { TodoList } from './components/TodoList'

// <> if VDOM conditional render, RENDER, SPA, css-in-js
const App = () => {


  return (
      <div className="App">
         <UserInput/>
         <TodoList/>
      </div>
  );
}

export default App;



