import React, { useRef, useState } from "react";

function AddTodo(props) {
  const [shouldDisable, disableButton] = useState(true);
  const [todoTitle, setTodoTitle] = useState("");
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
    });
    todoRef.current.value = "";
    setTodoTitle("");
    todoTitleHandler();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <input
        className="input"
        type="text"
        name="title"
        id="title"
        placeholder="Enter text"
        onInput={todoTitleHandler}
        ref={todoRef}
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
