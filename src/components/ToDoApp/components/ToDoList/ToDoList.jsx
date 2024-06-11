import ToDoItem from "../ToDoItem/ToDoItem";

export default function ToDoList({ todos, removeTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          todo={todo}
          index={index}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}
