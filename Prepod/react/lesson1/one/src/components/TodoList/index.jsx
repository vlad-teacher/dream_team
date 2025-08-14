import {TodoItem} from './TodoItem';
import cn from './index.module.css';


export const TodoList = (props) => {

    return (
        <ol className={cn.wrapper}>
          { props.todos.map((todoText, index) => { // TODO: discuss index
            return <TodoItem text={todoText} />
          })}
        </ol>
    );
};

