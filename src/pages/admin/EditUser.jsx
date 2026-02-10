import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditUser() {
  const { id } = useParams();
  const [form, setForm] = useState({});

  const token = localStorage.getItem("token");

  // Fetch User
  const fetchUser = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}api/admin/user/${id}`, {
      headers: { Authorization: token },
    });

    setForm(res.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    await axios.put(`${import.meta.env.VITE_API_URL}api/admin/update/${id}`, form, {
      headers: { Authorization: token },
    });

    alert("User Updated ✅");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-3xl">
      <h1 className="text-xl mb-4">
        <button
          onClick={() => window.history.back()}
          className="text-blue-600 hover:underline"
        >
          &larr; Back
        </button>
      </h1>

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-blue-700">Edit User Profile ✏️</h1>

      <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-4 mt-6">
        <input
          name="name"
          value={form.name || ""}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          name="email"
          value={form.email || ""}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          name="rollNo / Employee ID"
          value={form.rollNo || ""}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          name="Mobile"
          value={form.mobile || ""}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          name="branch"
          value={form.branch || ""}
          onChange={handleChange}
          className="border p-2"
        />
        <button className="bg-blue-600 text-white py-2 rounded col-span-2">
          Update User
        </button>
      </form>
    </div>
  );
}
