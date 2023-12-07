import { useEffect } from "react";

import { TaskList } from "@/components/TaskList";
import { AppDispatch } from "@/store";

import { useDispatch } from "react-redux";
import { fetchData } from "@/store/todo/todoSlice";
import { logout } from "@/store/userSlice";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const getData = () => {
    dispatch(fetchData());
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <h3>
        TODO APP <button onClick={handleLogout}>Logout</button>
      </h3>
      <TaskList />
    </div>
  );
}

export default Home;
