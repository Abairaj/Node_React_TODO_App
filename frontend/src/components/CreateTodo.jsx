import { useState } from "react";
import { Button, Input, Flex, Space } from "antd";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { TextArea } = Input;

  return (
    <>
      <Space  align="center" direction="vertical" size="middle">
        <Flex vertical gap={5}>
          <Input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="title"
          />{" "}
          <br />
          <TextArea
            rows={3}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            placeholder="description"
          />
          <br />
          <Button
            type="primary"
            onClick={() => {
              fetch("http://localhost:3000/todo/", {
                method: "POST",
                body: JSON.stringify({
                  title: title,
                  description: description,
                }),
                headers: { "content-type": "application/json" },
              }).then(async (res) => {
                const json = await res.json();
                alert("Todo created successfully");
              });
            }}
          >
            Add a Todo
          </Button>
        </Flex>
      </Space>
    </>
  );
}
