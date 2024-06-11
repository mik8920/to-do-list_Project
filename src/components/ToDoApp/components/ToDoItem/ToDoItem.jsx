export default function ToDoItem({ todo, index, removeTodo }) {
  return (
    <li>
      {todo}
      <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
}
