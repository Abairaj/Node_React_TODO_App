export function Todos({ toDos }) {
  return (
    <>
      {toDos.map((todo) => {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed ? "completed" : "Mark as Complete"}</button>
          </div>
        );
      })}
    </>
  );
}
