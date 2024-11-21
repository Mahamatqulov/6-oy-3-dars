import { useState } from "react";
import TodoList from "./TodoList";
import FormTodo from "./FormTodo";

function App() {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);

    localStorage.setItem("todos", JSON.stringify(newTodos));
    return newTodosew;
  };

  return (
    <>
      <FormTodo addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
