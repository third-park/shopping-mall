import "./App.css";
import React from "react"
import Header from "./component/Header";
import Todo from "./component/Todo/Todo";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Todo />
    </React.Fragment>
  );
}

export default App;
