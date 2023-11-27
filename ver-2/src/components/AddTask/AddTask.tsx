import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { todoAdd } from "../../store/todosSlice";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(todoAdd({ title }));
  };

  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddTask;
