import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Task } from "@/types/task";
import { RootState } from "@/store";
import { TaskItem } from "../TaskItem";
import TaskFilter from "./TaskFilter";
import { Loading } from "../Loading";

const TaskList = () => {
  const { tasks, loading } = useSelector((state: RootState) => state.todos);
  const [data, setData] = useState<Task[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      setData(tasks.filter((task) => task.todoName.includes(search)));
    } else {
      setData([...tasks]);
    }
  }, [search, tasks]);

  return (
    <div>
      <TaskFilter search={search} onSearch={setSearch} />
      {loading ? (
        <Loading />
      ) : data.length ? (
        <div>
          {data.map((task) => (
            <TaskItem key={task.todoId} task={task} />
          ))}
        </div>
      ) : (
        <div>Not found</div>
      )}
    </div>
  );
};

export default TaskList;
