import "./App.scss";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./states/todoStates";
import TodoBar from "./components/TodoBar";
import TodoList from "./components/TodoList";

export const App = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  return (
    <div className="App">
      <h1>Todo app</h1>
      <TodoBar />
      <TodoList />
    </div>
  );
};

//export default App;
