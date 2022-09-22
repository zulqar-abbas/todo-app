import React from "react";

function TodoItem(props) {
  const { todo, removeTodo } = props;
  const removeTodoHandler = () => {
    console.log(todo.id);
    removeTodo(todo.id);
  };
  return (
    <div style={{ display: "flex" }}>
      <div>
        <p>{`${todo.title}      Status: ${todo.status.toUpperCase()}`}</p>
      </div>
      <button
        onClick={removeTodoHandler}
        className="btn btn-primary"
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
