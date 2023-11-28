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

  const handleUpdate = (task: Task) => {
    const index = tasks.findIndex((_task) => _task.id === task.id);
    const newData = [...tasks];
    newData[index] = task;
    onChange(newData);
  };

  const handleDelete = (task: Task) => {
    onChange(tasks.filter((_task) => _task.id !== task.id));
  };

  return (
    <div>
      <TaskFilter search={search} onFilter={setSearch} />
      {taskList.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={() => handleDelete(task)}
          onChange={(task) => handleUpdate(task)}
        />
      ))}
    </div>
  );
};

export default TaskList;
