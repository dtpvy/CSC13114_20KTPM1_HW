import { useEffect } from "react";

import { useDispatch } from "react-redux";
import "./App.css";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import { AppDispatch } from "./store";
import { todoSet } from "./store/todosSlice";

export type Task = {
  title: string;
  status: "todo" | "done";
  id: number;
};

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const getData = () => {
    const data = localStorage.getItem("tasks");
    const tasks = data ? JSON.parse(data) : [];
    dispatch(todoSet({ tasks }));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <h3>TODO APP</h3>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
