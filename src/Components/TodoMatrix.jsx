import React from "react";
import { TodoPriorities } from "./constants";
import TodoBoard from "./TodoBoard";

function TodoMatrix() {
  return (
    <div className="overflow-hidden">
      <div className="row margin-bottom-10">
        <TodoBoard
          backgroundColor={"#fab4a2"}
          height={"200px"}
          boardType={TodoPriorities.Scehdule}
        ></TodoBoard>
        <TodoBoard
          backgroundColor={"#7dc799"}
          boardType={TodoPriorities.Do}
        ></TodoBoard>
      </div>
      <div className="row">
        <TodoBoard
          backgroundColor={"#ef7692"}
          boardType={TodoPriorities.Delete}
        ></TodoBoard>
        <TodoBoard
          backgroundColor={"#fab4a2"}
          height={"200px"}
          boardType={TodoPriorities.Delegatte}
        ></TodoBoard>
      </div>
      {/* <ul>{getListItems(todoList)}</ul> */}
    </div>
  );
}

export default TodoMatrix;
