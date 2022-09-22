import React, { Fragment, useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const DUMMY_TODO_LIST = [
  {
    id: Math.random().toString(),
    title: "First title",
    status: "new",
  },
  {
    id: Math.random().toString(),
    title: "Second title",
    status: "new",
  },
];
const TodoBoard = () => {
  const [todoList, setTodoList] = useState(DUMMY_TODO_LIST);

  useEffect(() => {
    setTodoList(DUMMY_TODO_LIST);
  }, []);

  const onAddNewTodo = (newTodo) => {
    setTodoList((previousTodoList) => [...previousTodoList, newTodo]);
  };

  const onRemoveTodo = (id) => {
    setTodoList((previousTodoList) => [
      ...previousTodoList.filter((todo) => todo.id === id),
    ]);
  };

  const getListItems = (todoList) => {
    return todoList.map((todo) => (
      <li key={todo.id}>
        <TodoItem todo={todo} removeTodo={onRemoveTodo} />
      </li>
    ));
  };
  return (
    <Fragment>
      <AddTodo addTodo={onAddNewTodo} />
      <div>
        <ul>{getListItems(todoList)}</ul>
      </div>
    </Fragment>
  );
};

export default TodoBoard;
