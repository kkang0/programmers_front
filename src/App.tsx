import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./Todolist";
import Clock from "./Timer";
import MyWeather from "./MyWeather";

function App() {
  let name = "React";

  return (
    <div className="container">
      <TodoList></TodoList>
      <Clock></Clock>
      <p></p>
      <MyWeather weather="맑음">일기예보</MyWeather>
    </div>
  );
}

export default App;
