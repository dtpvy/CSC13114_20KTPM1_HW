import { useState } from "react";
import { Task } from "../../App";

type Props = {
  task: Task;
  onChange: (task: Task) => void;
  onDelete: () => void;
};

const TaskItem = ({ task, onChange, onDelete }: Props) => {
  const [title, setTitle] = useState(task.title);
  const [isEdit, setIsEdit] = useState(false);

  const handleDone = (done: boolean) => {
    onChange({ ...task, status: done ? "done" : "todo" });
  };

  const handleEdit = () => {
    setIsEdit(true);
    setTitle(task.title);
  };

  const handleChange = () => {
    setIsEdit(false);
    onChange({ ...task, title });
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <input
        type="checkbox"
        checked={task.status === "done"}
        onChange={(e) => handleDone(e.target.checked)}
        disabled={isEdit}
      />
      {!isEdit ? (
        <>
          <div
            style={
              task.status === "done"
                ? { color: "green", fontStyle: "italic", fontWeight: 700 }
                : { color: "blue", fontStyle: "inherit", fontWeight: 500 }
            }
          >
            {task.title}
          </div>
          <button onClick={handleEdit}>edit</button>
        </>
      ) : (
        <>
          <input onChange={(e) => setTitle(e.target.value)} />
          <button onClick={handleChange}>update</button>
        </>
      )}
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default TaskItem;
