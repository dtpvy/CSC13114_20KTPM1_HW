type Props = {
  search: string;
  onSearch: (search: string) => void;
};

const TaskFilter = ({ search, onSearch }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 16,
      }}
    >
      <div>Search: </div>
      <input
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default TaskFilter;
