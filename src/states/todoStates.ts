import { atom } from "recoil";
import { TodoItem } from "../models/todo.model";

export const todoItemState = atom<TodoItem | null>({
  key: "todoItem",
  default: null,
});

export const todoListState = atom<TodoItem[]>({
  key: "todoListState",
  default: [],
});
