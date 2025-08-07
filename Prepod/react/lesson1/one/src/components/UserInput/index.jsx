import cn from './index.module.css';




export function UserInput () {

    return <div className={cn.wrapper}>
        <input type="text"/>
        <button>OK</button>
    </div>
}
