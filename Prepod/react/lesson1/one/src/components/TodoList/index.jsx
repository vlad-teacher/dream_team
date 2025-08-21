import { TodoItem } from "./TodoItem";
import cn from "./index.module.css";

export const TodoList = ({ todos, deleteTodo, switchEdit }) => {
  return (
    <ol className={cn.wrapper}>
      {todos.map(({id, ...props}) => {
        return (
          <TodoItem
            {...props}
            onDeleteTodo={deleteTodo}
            switchEdit={switchEdit}
            id={id}
            key={id}
          />
        );
      })}
    </ol>
  );
};
