import { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import { Space } from "antd";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async (res) => {
      const response = await res.json();
      setTodos(response.todos);
    });
  });

  return (
    <div className="main-div">
      <div>
      <Todos toDos={todos} />
      <CreateTodo />
      </div>
    </div>
  );
}

export default App;
