import { useEffect, useState } from "react";
import { type Task } from "../../App";
import { TaskItem } from "../TaskItem";
import TaskFilter from "./TaskFilter";

type Props = {
  tasks: Task[];
  onChange: (tasks: Task[]) => void;
};

const TaskList = ({ tasks, onChange }: Props) => {
  const [search, setSearch] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    if (search) {
      setTaskList(tasks.filter((task) => task.title.includes(search)));
    } else {
      setTaskList([...tasks]);
    }
  }, [search, tasks]);

  const handleUpdate = (task: Task, index: number) => {
    const _task = [...tasks];
    _task[index] = task;
    onChange(_task);
  };

  return (
    <div>
      <TaskFilter search={search} onFilter={setSearch} />
      {taskList.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onChange={(task) => handleUpdate(task, index)}
        />
      ))}
    </div>
  );
};

export default TaskList;
