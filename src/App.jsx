import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import TodoBoard from "./Components/TodoBoard";
import TodoNavbar from "./Components/TodoNavbar";

function App() {
  return (
    <div className="container App">
      <TodoNavbar></TodoNavbar>
      <Provider store={store}>
        <Dashboard></Dashboard>
      </Provider>
    </div>
  );
}

export default App;
