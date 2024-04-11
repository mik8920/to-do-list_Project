import "./App.css";
import CategoryList from "./CategoryList/CategoryList";
import ToDoList from "./ToDoList/ToDoList"
function App() {
  return (
    <>
      <h1>To-Do Notes</h1>
      
      <CategoryList/>
      <ToDoList/>
    </>
  );
}

export default App;
