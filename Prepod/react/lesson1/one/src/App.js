import React from 'react';
import { UserInput } from './components/UserInput';
import { TodoList } from './components/TodoList';
import { Counter } from './components/Counter';

// <> if VDOM conditional render, RENDER, SPA, css-in-js, : HOOKS usage RULES
const App = () => {


  return (
      <div className="App">
        <Counter/>
         <UserInput/>
         <TodoList/>
      </div>
  );
}

export default App;



