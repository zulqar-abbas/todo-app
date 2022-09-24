import React from "react";
import { useSelector } from "react-redux";
import { TodoPriorities } from "./constants";
import classes from "./TodoBoard.module.css";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
  const backgroundColor = props.backgroundColor || "rgba(255,255,255,0.5)";
  const height = props.height || "100%";
  const boardType = props.boardType || TodoPriorities.Scehdule;

  const todoList = useSelector((state) => state.list.todoList);
  const filterTodos = todoList.filter((todo) => todo.priority === boardType);

  const noTodoItem = <p>No item in the list!</p>;

  const getListItems = (todoList) => {
    return todoList.map((todo) => (
      <li key={todo.id}>
        <TodoItem todo={todo} />
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
      >
        {filterTodos.length > 0 && <ul>{getListItems(filterTodos)}</ul>}
        {filterTodos.length === 0 && noTodoItem}
      </div>
    </div>
  );
}

export default TodoBoard;
