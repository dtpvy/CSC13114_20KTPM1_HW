import { useState } from "react";
import { useDispatch } from "react-redux";
import { Task } from "../../App";
import { AppDispatch } from "../../store";
import { todoComplete, todoDelete, todoUpdate } from "../../store/todosSlice";

type Props = {
  task: Task;
};

const TaskItem = ({ task }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(task.title);
  const dispatch = useDispatch<AppDispatch>();

  const handleComplete = (done: boolean) => {
    dispatch(todoComplete({ id: task.id, status: done ? "done" : "todo" }));
  };

  const handleEdit = () => {
    setIsEdit(true);
    setTitle(task.title);
  };

  const handleUpdate = () => {
    setIsEdit(false);
    dispatch(todoUpdate({ ...task, title }));
  };

  const handleDelete = () => {
    dispatch(todoDelete({ id: task.id }));
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <input
        type="checkbox"
        checked={task.status === "done"}
        onChange={(e) => handleComplete(e.target.checked)}
      />
      {!isEdit ? (
        <>
          <div
            style={
              task.status === "done"
                ? { color: "green", fontWeight: 700, fontStyle: "italic" }
                : { color: "blue", fontWeight: 400, fontStyle: "normal" }
            }
          >
            {task.title}
          </div>
          <button onClick={handleEdit}>edit</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={handleUpdate}>update</button>
        </>
      )}
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default TaskItem;
