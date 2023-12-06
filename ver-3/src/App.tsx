import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

import "./App.css";
import { AuthorizedPage } from "./components/Layout";
import { AddTask, TaskDetail } from "./pages/Task";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthorizedPage>
        <Outlet />
      </AuthorizedPage>
    ),
    children: [
      {
        path: "login",
        element: <Login />,
      },
      { path: "todo", element: <Home /> },
      { path: "todo/add", element: <AddTask /> },
      { path: "todo/edit/:id", element: <AddTask /> },
      { path: "todo/:id", element: <TaskDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
