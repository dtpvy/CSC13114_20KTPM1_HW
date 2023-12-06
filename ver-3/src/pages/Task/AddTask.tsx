import { AppDispatch, RootState } from "@/store";
import { addTask, updateTask } from "@/store/todo/todoThunk";
import { Task } from "@/types/task";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const AddTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const tasks = useSelector((state: RootState) => state.todos.tasks);
  const dispatch = useDispatch<AppDispatch>();

  const task = useMemo(() => {
    if (!id) return undefined;
    return tasks.find((_task: Task) => _task.todoId === +id);
  }, [id, tasks]);

  const { register, handleSubmit } = useForm<Omit<Task, "todoId">>({
    defaultValues: task,
  });

  const onSubmit = (task: Omit<Task, "todoId">) => {
    if (id) {
      dispatch(updateTask({ ...task, todoId: +id }));
    } else {
      dispatch(addTask(task));
    }
    navigate("/todo");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>{!id ? "Add Task" : "Edit Task"}</h3>
      <div>
        <label htmlFor="taskname">taskname: </label>
        <input id="taskname" {...register("todoName")} />
      </div>
      <div>
        <label htmlFor="description">description: </label>
        <input id="description" {...register("description")} />
      </div>
      <div>
        <label htmlFor="status">status: </label>
        <input
          id="status"
          {...register("status")}
          type="checkbox"
          disabled={!id}
        />
      </div>
      <button>{!id ? "Add" : "Edit"}</button>
    </form>
  );
};

export default AddTask;
