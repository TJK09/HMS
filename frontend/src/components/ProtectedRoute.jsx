import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  // Case 1: Not logged in → redirect to login
  if (!user) return <Navigate to="/login" replace />;

  // Case 2: Logged in but role not allowed → redirect to landing page
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // Case 3: Authorized → show the requested page
  return children;
}
export default ProtectedRoute;
