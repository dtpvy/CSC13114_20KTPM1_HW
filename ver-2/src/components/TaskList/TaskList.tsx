import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Task } from "../../App";
import { RootState } from "../../store";
import { TaskItem } from "../TaskItem";
import TaskFilter from "./TaskFilter";

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.todos.tasks);
  const [data, setData] = useState<Task[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      setData(tasks.filter((task) => task.title.includes(search)));
    } else {
      setData([...tasks]);
    }
  }, [search, tasks]);

  return (
    <div>
      <TaskFilter search={search} onSearch={setSearch} />
      <div>
        {data.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
