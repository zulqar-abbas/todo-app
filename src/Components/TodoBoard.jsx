import React from "react";
import classes from "./TodoBoard.module.css";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
  const backgroundColor = props.backgroundColor || "rgba(255,255,255,0.5)";
  const height = props.height || "100%";
  const todoList = props.todoList || [];

  const noTodoItem = <p>No item in the list!</p>;

  const onRemoveTodo = props.onRemoveTodo;
  const getListItems = (todoList) => {
    return todoList.map((todo) => (
      <li key={todo.id}>
        <TodoItem todo={todo} removeTodo={onRemoveTodo} />
      </li>
    ));
  };

  return (
    <div className="col-6">
      <div
        style={{
          background: backgroundColor,
          position: "relative",
          minHeight: height,
        }}
        className={classes.board}
      ></div>
    </div>
  );
}

export default TodoBoard;
