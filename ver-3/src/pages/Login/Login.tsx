import { AppDispatch, RootState } from "@/store";
import { setUser } from "@/store/userSlice";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

type LoginForm = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>();
  const dispath = useDispatch<AppDispatch>();
  const { status } = useSelector((state: RootState) => state.user);

  const onSubmit = ({ username, password }: LoginForm) => {
    if (username === "admin" && password === "admin") {
      dispath(setUser({ username, password }));
    } else {
      setError("username", { message: "username hoặc password không đúng" });
      setError("password", { message: "username hoặc password không đúng" });
    }
  };

  if (status === "authorized") return <Navigate to="/todo" />;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Login
      <div>
        <label htmlFor="username">username: </label>
        <input id="username" {...register("username")} />
        {errors.username?.message && (
          <div style={{ color: "red" }}>{errors.username?.message}</div>
        )}
      </div>
      <div>
        <label htmlFor="password">password: </label>
        <input id="password" {...register("password")} type="password" />
        {errors.password?.message && (
          <div style={{ color: "red" }}>{errors.password?.message}</div>
        )}
      </div>
      <button>Login</button>
    </form>
  );
};

export default Login;
