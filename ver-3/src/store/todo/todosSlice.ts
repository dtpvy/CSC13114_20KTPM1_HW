import { createSlice } from "@reduxjs/toolkit";
import { Task } from "@/types/task";
import { addTask, deleteTask, fetchData, updateTask } from "./todoThunk";

type State = {
  tasks: Task[];
  loading: boolean;
  error: string;
};

const initialState: State = {
  tasks: [],
  loading: true,
  error: "",
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.loading = false;
      state.tasks = [];
    });

    builder.addCase(addTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTask.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addTask.rejected, (state) => {
      state.loading = false;
      state.error = "add fail";
    });

    builder.addCase(deleteTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = state.tasks.filter(
        (task) => task.todoId !== action.meta.arg
      );
    });
    builder.addCase(deleteTask.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(updateTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateTask.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(updateTask.rejected, (state) => {
      state.loading = false;
    });
  },
});

export { fetchData, addTask, deleteTask, updateTask };
export default todosSlice.reducer;
