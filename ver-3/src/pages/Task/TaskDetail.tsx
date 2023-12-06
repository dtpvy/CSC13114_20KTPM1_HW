import { Task } from "@/types/task";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState<Task>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/api/todos/${id}`)
      .then((res) => {
        setTask(res.data);
        setLoading(false);
      })
      .catch(() => {
        setTask(undefined);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Task loading...</div>;
  if (!task) return <div>Not found</div>;

  return (
    <div>
      <h3>Task Detail</h3>
      <div>ID: {task.todoId}</div>
      <div>name: {task.todoName}</div>
      <div>description: {task.description}</div>
      <div>status: {task.status ? "done" : "todo"}</div>
      <div>lastUpdate: {task.lastUpdate}</div>
      <div
        style={{
          display: "flex",
          gap: 16,
          marginTop: 16,
          justifyContent: "center",
        }}
      >
        <Link to="/todo/add">Add</Link>
        <Link to={`/todo/edit/${task.todoId}`}>Edit</Link>
      </div>
    </div>
  );
};

export default TaskDetail;
