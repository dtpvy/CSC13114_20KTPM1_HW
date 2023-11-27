import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../App";

type State = {
  tasks: Task[];
};

const initialState: State = {
  tasks: [],
};

const setData = (tasks: Task[]) => {
  const data = JSON.stringify(tasks || []);
  localStorage.setItem("tasks", data);
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    complete: ({ tasks }, { payload }) => {
      const { id, status } = payload;
      const index = tasks.findIndex((task) => task.id === id);
      tasks[index].status = status;
    },
    update: ({ tasks }, { payload }) => {
      const { id } = payload;
      const index = tasks.findIndex((task) => task.id === id);
      tasks[index] = payload;
    },
    add: ({ tasks }, { payload }) => {
      const maxId = tasks.reduce((maxId, task) => Math.max(maxId, task.id), 0);
      tasks.push({ id: maxId + 1, title: payload.title, status: "todo" });
    },
    delete: (state, { payload }) => {
      const { id } = payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    set(state, { payload }) {
      state.tasks = payload.tasks;
      setData(payload.tasks);
    },
  },
});

export const {
  complete: todoComplete,
  update: todoUpdate,
  delete: todoDelete,
  add: todoAdd,
  set: todoSet,
} = todosSlice.actions;
export default todosSlice.reducer;
