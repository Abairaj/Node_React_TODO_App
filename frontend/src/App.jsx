import { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async (res) => {
      const response = await res.json();
      setTodos(response.todos);
    });
  });

  return (
    <>
      <CreateTodo />
      <Todos toDos={todos} />
    </>
  );
}

export default App;
