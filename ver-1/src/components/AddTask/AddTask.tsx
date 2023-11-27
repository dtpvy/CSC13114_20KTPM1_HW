import { useState } from "react";

type Props = {
  onAdd: (title: string) => void;
};

const AddTask = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <input onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => onAdd(title)}>Add</button>
    </div>
  );
};

export default AddTask;
