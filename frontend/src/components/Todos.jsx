import { Button, Flex, Typography, Checkbox, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
const { Title } = Typography;

export function Todos({ toDos }) {
  const onChange = (e) => {
    e.target.checked = !e.target.checked;
  };
  return (
    <Content style={{ padding: "0 24px", minHeight: 280 }}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {toDos.map((todo) => {
          return (
            <div key={todo._id} className="todos-main-block">
              <div className="todo-text">
                <Title level={2}>{todo.title}</Title>
                <Title level={3}>{todo.description}</Title>
              </div>
              <div className="todo-actions">
                <Checkbox
                  onClick={(e) => {
                    fetch("http://localhost:3000/completed", {
                      method: "PUT",
                      body: JSON.stringify({
                        id: todo._id,
                        completed: !todo.completed,
                      }),
                      headers: { "content-type": "application/json" },
                    }).then(async (response) => {
                      const json_data = await response.json();
                      e.target.value = !e.target.value;
                    });
                  }}
                  size="small"
                  checked={todo.completed}
                  onChange={onChange}
                ></Checkbox>
                <Button
                  onClick={() => {
                    fetch(`http://localhost:3000/todo/${todo._id}`, {
                      method: "DELETE",
                    }).then(async (response) => {
                      const json_data = await response.json();
                      alert("Deleted todo successfully");
                    });
                  }}
                  size="small"
                  style={{ margin: "0 6px" }}
                  type="primary"
                  danger
                >
                  <DeleteOutlined />
                </Button>
              </div>
            </div>
          );
        })}
      </Space>
    </Content>
  );
}
