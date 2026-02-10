import { useState } from "react";
import axios from "axios";

export default function CreateFaculty() {
  const [form, setForm] = useState({});

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      `${import.meta.env.VITE_API_URL}api/admin/create-faculty`,
      form,
      { headers: { Authorization: token } }
    );

    alert("Faculty Created ✅");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-3xl">

      <h1 className="text-2xl font-bold mb-6">
        Create Faculty Profile 👩‍🏫
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4"
      >

        <input name="name" placeholder="Name" onChange={handleChange} className="border p-2" />
        <input name="email" placeholder="Email" onChange={handleChange} className="border p-2" />
        <input name="mobile" placeholder="Mobile" onChange={handleChange} className="border p-2" />
        <input name="branch" placeholder="Branch" onChange={handleChange} className="border p-2" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 col-span-2" />

        <button className="bg-blue-600 text-white py-2 rounded col-span-2">
          Create Faculty
        </button>

      </form>

    </div>
  );
}
