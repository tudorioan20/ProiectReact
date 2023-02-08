import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouteProfile = ({ user, redirectPath = '/' }: any) => {
  return(
    user ? <Outlet /> : <Navigate to={redirectPath} replace />
  );
};