import React, { useRef, useState } from "react";
import Dropdown from "./UI/Dropdown";

function AddTodo(props) {
  const PRIORITY_OPTIONS = [
    { label: "Scehdule", value: "schedule" },
    { label: "Do", value: "do" },
    { label: "Delete", value: "delete" },
    { label: "Delegatte", value: "delegate" },
  ];

  const [shouldDisable, disableButton] = useState(true);
  const [todoTitle, setTodoTitle] = useState("");
  const [priority, setPriority] = useState("schedule");
  const todoRef = useRef(null);

  const todoTitleHandler = () => {
    setTodoTitle(todoRef.current?.value);
    if (todoRef.current?.value.length > 0) {
      disableButton(false);
    } else {
      disableButton(true);
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const { addTodo } = props;
    console.log(todoTitle);
    addTodo({
      id: Math.random().toString(),
      title: todoTitle,
      status: "new",
      priority,
    });
    todoRef.current.value = "";
    setTodoTitle("");
    setPriority("schedule");
    todoTitleHandler();
  };

  const priorityChangeHandler = (event) => {
    setPriority(event.target.value);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <input
        className="form-control input"
        type="text"
        name="title"
        id="title"
        placeholder="Enter text"
        onInput={todoTitleHandler}
        ref={todoRef}
      />
      <Dropdown
        label={"Priority"}
        options={PRIORITY_OPTIONS}
        value={priority}
        onChange={priorityChangeHandler}
      />
      <button
        disabled={shouldDisable}
        className="btn btn-primary"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
