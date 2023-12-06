import { Task } from "@/types/task";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("todos/fetchContent", async () => {
  const res = await axios.get("http://localhost:8080/api/todos");
  return res.data;
});

export const addTask = createAsyncThunk(
  "todos/addTask",
  async (task: Omit<Task, "todoId">) => {
    const res = await axios.post("http://localhost:8080/api/todos", task);
    return res.data;
  }
);

export const deleteTask = createAsyncThunk(
  "todos/deleteTask",
  async (id: number) => {
    const res = await axios.delete(`http://localhost:8080/api/todos/${id}`);
    return res.data;
  }
);

export const updateTask = createAsyncThunk(
  "todos/updateTask",
  async (task: Task) => {
    const res = await axios.put(
      `http://localhost:8080/api/todos/${task.todoId}`,
      task
    );

    return res.data;
  }
);
