import React from "react";
import { useDispatch } from "react-redux";
import { listActions } from "../redux/redux-slices/list-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

function TodoItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();
  const removeTodoHandler = () => {
    console.log(todo.id);
    dispatch(listActions.removeTodo(todo.id));
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <p>{`${
          todo.title
        }      Status: ${todo.status.toUpperCase()}    Priority: ${todo.priority.toUpperCase()}`}</p>
      </div>
      <FontAwesomeIcon
        onClick={removeTodoHandler}
        icon={faXmarkCircle}
        style={{
          marginLeft: "10px",
          marginTop: "5px",
          color: "red",
        }}
      >
        Delete
      </FontAwesomeIcon>
    </div>
  );
}

export default TodoItem;
