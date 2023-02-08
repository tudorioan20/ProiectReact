import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouteLogin = ({ user, redirectPath = '/' }: any) => {
  return(
    user ? <Navigate to={redirectPath} replace /> : <Outlet />
  );
};