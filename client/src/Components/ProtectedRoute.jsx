import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const authData = JSON.parse(localStorage.getItem("authToken"));
  const now = new Date();
  console.log(authData);
  const isAuthenticated = authData && authData.token && authData.expiry > now.getTime();

  // If user is authenticated and tries to access login/signup — redirect to homepage.
  if (isAuthenticated && (location.pathname === "/signin" || location.pathname === "/signup")) {
    return <Navigate to="/" replace />;
  }

  // If user is NOT authenticated and tries to access a protected route — redirect to login.
  if (!isAuthenticated && location.pathname !== "/signin" && location.pathname !== "/signup") {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
