import {TodoItem} from './TodoItem';
import cn from './index.module.css';


export const TodoList = () => {

    return (
        <ol className={cn.wrapper}>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </ol>
    );
};


