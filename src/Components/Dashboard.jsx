import React, { Fragment, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listActions } from "../redux/redux-slices/list-slice";
import AddTodo from "./AddTodo";
import TodoBoard from "./TodoBoard";
import TodoItem from "./TodoItem";
import TodoMatrix from "./TodoMatrix";

const Dashboard = () => {
  const todoListCtx = useSelector((state) => state.list.todoList);
  const dispatch = useDispatch();
  const [todoList, setTodoList] = useState(todoListCtx);

  useEffect(() => {
    setTodoList(todoListCtx);
  }, [todoListCtx]);

  const onAddNewTodo = (newTodo) => {
    dispatch(listActions.addTodo(newTodo));
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
