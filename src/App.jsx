import React from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import TodoBoard from "./Components/TodoBoard";
import TodoNavbar from "./Components/TodoNavbar";

function App() {
  return (
    <div className="container App">
      <TodoNavbar></TodoNavbar>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
