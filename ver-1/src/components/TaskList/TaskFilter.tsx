type Props = {
  onFilter: (search: string) => void;
  search: string;
};

const TaskFilter = ({ onFilter, search }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 16,
      }}
    >
      <div>Search:</div>
      <input value={search} onChange={(e) => onFilter(e.target.value)} />
    </div>
  );
};

export default TaskFilter;
