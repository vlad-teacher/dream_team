import {TodoItem} from './TodoItem';
import cn from './index.module.css';


export const TodoList = () => {

    return (
        <ul className={cn.wrapper}>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </ul>
    );
};


