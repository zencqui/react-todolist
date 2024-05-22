import { TodoItem } from "../models/todo.model";
import { useRecoilState } from "recoil";
import { todoListState, todoItemState } from "../states/todoStates";
import React, { useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const handleCheckboxOnChange = (id: string) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      })
    );
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <ul>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <li key={todo.id}>{todo.label}</li>
          <input
            type="checkbox"
            onChange={() => handleCheckboxOnChange(todo.id)}
            checked={todo.isCompleted}
          ></input>
          <button
            type="button"
            onClick={() => {
              handleDeleteTodo(todo.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
