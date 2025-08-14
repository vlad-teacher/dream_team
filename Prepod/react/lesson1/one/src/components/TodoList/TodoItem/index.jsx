


export function TodoItem(props) {


  return (
    <li>
      <span>{ props.text }</span> <button>edit</button> <button>delete</button>
    </li>
  );
}
