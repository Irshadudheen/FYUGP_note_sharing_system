import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authstore";

const UnProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default UnProtectedRoute;
