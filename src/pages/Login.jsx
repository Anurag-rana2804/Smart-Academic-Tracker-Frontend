import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        email,
        password,
      });

      alert("Login Successful ✅");

      // Save token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      // Redirect based on role
      const role = res.data.user.role;

      if (role === "student") navigate("/student/dashboard");
      if (role === "faculty") navigate("/faculty/dashboard");
      if (role === "admin") navigate("/admin/admindashboard");
    } catch (err) {
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-200 to-indigo-200">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-xl p-8 rounded-2xl w-[380px]"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Smart Academic Tracker
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-2 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}
