import { AppDispatch, RootState } from "@/store";
import { loadUser } from "@/store/userSlice";
import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { Loading } from "../Loading";

type Props = {
  children: ReactNode;
};
const AuthorizedPage = ({ children }: Props) => {
  const dispath = useDispatch<AppDispatch>();
  const { status } = useSelector((state: RootState) => state.user);
  const location = useLocation();

  useEffect(() => {
    dispath(loadUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log({ status, location });

  if (status === "unauthorized") {
    if (location.pathname !== "/login") return <Navigate to="/login" />;
    return <div>{children}</div>;
  }
  if (status === "loading") return <Loading />;
  return <div>{children}</div>;
};

export default AuthorizedPage;
