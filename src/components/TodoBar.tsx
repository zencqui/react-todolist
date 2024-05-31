import uuid from "react-uuid";
import { TodoItem } from "../models/todo.model";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../states/todoStates";
import React, { useState } from "react";

const TodoBar = () => {
  const setTodoList = useSetRecoilState(todoListState);
  const [todoInput, setTodoInput] = useState("");

  const handleOnChangeInput = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setTodoInput(value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const todo: TodoItem = {
      id: uuid(),
      label: todoInput,
      isCompleted: false,
    };

    setTodoList((prevState) => [...prevState, todo]);
    setTodoInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleOnChangeInput}
        value={todoInput}
      ></input>
      <button className="addButton" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoBar;
