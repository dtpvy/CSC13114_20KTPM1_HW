import { useEffect, useState } from "react";
import { AddTask } from "./components/AddTask";
import TaskList from "./components/TaskList/TaskList";

import "./App.css";

export type Task = {
  title: string;
  status: "todo" | "done";
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getData = () => {
    const data = localStorage.getItem("tasks");
    const tasks = data ? JSON.parse(data) : [];
    setTasks(tasks || []);
  };

  const setData = (tasks: Task[]) => {
    const data = JSON.stringify(tasks);
    localStorage.setItem("tasks", data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAdd = (title: string) => {
    const newTasks: Task[] = [...tasks, { title, status: "todo" }];
    setTasks(newTasks);
    setData(newTasks);
  };

  const handleChange = (tasks: Task[]) => {
    setTasks([...tasks]);
    setData(tasks);
  };

  return (
    <div
      style={{ padding: 16, display: "flex", gap: 16, flexDirection: "column" }}
    >
      <h3>TODO APP</h3>
      <AddTask onAdd={handleAdd} />
      <TaskList tasks={tasks} onChange={handleChange} />
    </div>
  );
}

export default App;
