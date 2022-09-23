import React from "react";
import TodoBoard from "./TodoBoard";

function TodoMatrix() {
  return (
    <div className="overflow-hidden">
      <div className="row margin-bottom-10">
        <TodoBoard backgroundColor={"red"} height={"200px"}></TodoBoard>
        <TodoBoard backgroundColor={"green"}></TodoBoard>
      </div>
      <div className="row">
        <TodoBoard backgroundColor={"yellow"}></TodoBoard>
        <TodoBoard backgroundColor={"blue"} height={"200px"}></TodoBoard>
      </div>
      {/* <ul>{getListItems(todoList)}</ul> */}
    </div>
  );
}

export default TodoMatrix;
