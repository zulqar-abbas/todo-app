import React, { Fragment, useContext, useEffect, useState } from "react";
import ListContext from "../context/todo-list";
import AddTodo from "./AddTodo";
import TodoBoard from "./TodoBoard";
import TodoItem from "./TodoItem";
import TodoMatrix from "./TodoMatrix";

const Dashboard = () => {
  const todoListCtx = useContext(ListContext);
  const [todoList, setTodoList] = useState(todoListCtx);

  useEffect(() => {
    setTodoList(todoListCtx);
  }, [todoListCtx]);

  const onAddNewTodo = (newTodo) => {
    setTodoList((previousTodoList) => [...previousTodoList, newTodo]);
  };

  const onRemoveTodo = (id) => {
    setTodoList((previousTodoList) => [
      ...previousTodoList.filter((todo) => todo.id !== id),
    ]);
  };

  return (
    <Fragment>
      <AddTodo addTodo={onAddNewTodo} />
      <TodoMatrix></TodoMatrix>
    </Fragment>
  );
};

export default Dashboard;
