import { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import Layout, { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async (res) => {
      const response = await res.json();
      setTodos(response.todos);
    });
  });

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#2f3136" }}>
      <Sider width="200px" style={{ backgroundColor: "#23272a" }}>
        <div className="logo" />
      </Sider>
      <Layout>
        <Header
          style={{
            backgroundColor: "#23272a",
            color: "#fff",
            padding: 0,
            fontSize: "25px",
          }}
        >
          Todo App
        </Header>
        <Todos toDos={todos} />
        <CreateTodo />
      </Layout>
    </Layout>
  );
}

export default App;
