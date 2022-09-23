import React from "react";
const DUMMY_TODO_LIST = [
  {
    id: Math.random().toString(),
    title: "First title",
    status: "new",
    priority: "schedule",
  },
  {
    id: Math.random().toString(),
    title: "Second title",
    status: "new",
    priority: "do",
  },
  {
    id: Math.random().toString(),
    title: "Third title",
    status: "new",
    priority: "delegate",
  },
  {
    id: Math.random().toString(),
    title: "Fourth title",
    status: "new",
    priority: "delete",
  },
];

const ListContext = React.createContext(DUMMY_TODO_LIST);
export const ListProvider = ListContext.Provider;

export default ListContext;
