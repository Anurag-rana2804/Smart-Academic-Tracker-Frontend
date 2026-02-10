import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    alert("Logged Out ✅");
    navigate("/");
  };

  return (
    <button
      onClick={logout}
      className="bg-black text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
}
