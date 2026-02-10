import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}api/auth/me`, {
        headers: { Authorization: token },
      })
      .then((res) => setUser(res.data));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-xl">

      <h1 className="text-2xl font-bold mb-6">
        Student Profile
      </h1>

      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Role:</b> {user.role}</p>

    </div>
  );
}
