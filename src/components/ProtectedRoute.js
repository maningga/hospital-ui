import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // user should be set after login

  if (!user) {
    // If user is not logged in, redirect to login page
    return <Navigate to="/" />;
  }

  return children; // Allow access to the protected route
};

export default ProtectedRoute;
