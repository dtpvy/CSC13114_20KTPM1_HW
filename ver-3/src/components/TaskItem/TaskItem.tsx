import { AppDispatch } from "@/store";
import { deleteTask } from "@/store/todo/todoThunk";
import { Task } from "@/types/task";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

type Props = {
  task: Task;
};

const TaskItem = ({ task }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteTask(task.todoId));
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div
        style={
          task.status
            ? { color: "green", fontWeight: 700, fontStyle: "italic" }
            : { color: "blue", fontWeight: 400, fontStyle: "normal" }
        }
      >
        {task.todoName}
      </div>
      <Link to={`/todo/${task.todoId}`}>View</Link>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default TaskItem;
