import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  // ✅ If not logged in → redirect to login
  if (!token) {
    return <Navigate to="/" />;
  }

  // ✅ Role-based Protection
  if (role && userRole !== role) {
    return <Navigate to="/" />;
  }

  return children;
}
