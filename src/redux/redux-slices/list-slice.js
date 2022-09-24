import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
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
  ],
};
const listSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo(state, action) {
      // Add a new item to the list
      state.todoList.push(action.payload);
    },
    removeTodo(state, action) {
      // Remove the item from the list
    },
    updateTodo(state, action) {
      // Update the item
    },
  },
});

export const listActions = listSlice.actions;

export default listSlice.reducer;
