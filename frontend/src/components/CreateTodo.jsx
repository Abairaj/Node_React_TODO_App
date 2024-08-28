import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="title"
      />{" "}
      <br />
      <input
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        type="text"
        placeholder="description"
      />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo/", {
            method: "POST",
            body: JSON.stringify({ title: title, description: description }),
            headers: { "content-type": "application/json" },
          }).then(async (res) => {
            const json = await res.json();
            alert("Todo created successfully");
          });
        }}
      >
        Add a Todo
      </button>
    </>
  );
}
