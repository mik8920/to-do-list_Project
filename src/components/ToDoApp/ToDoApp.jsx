import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
import { useState } from "react";

export default function ToDoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div>
      <h1>To-Do List</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}
