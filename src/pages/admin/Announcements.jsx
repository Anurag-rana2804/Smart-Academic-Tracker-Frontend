import { useState } from "react";

export default function Announcements() {

  const [form, setForm] = useState({
    title: "",
    message: "",
    audience: "Students",
  });

  const [announcements, setAnnouncements] =
    useState([
      {
        id: 1,
        title: "Mid Term Exams",
        message: "Exams start from 15 March",
        audience: "Students",
      },
    ]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePublish = () => {
    setAnnouncements([
      ...announcements,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    alert("Announcement Published 📢");
  };

  return (
    <div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-blue-700">
        Announcement System 📢
      </h1>

      {/* CREATE FORM */}
      <div className="bg-white shadow rounded-xl p-6 mt-6">

        <h2 className="font-semibold mb-4">
          Create Announcement
        </h2>

        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />

        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />

        <select
          name="audience"
          onChange={handleChange}
          className="border p-2 mb-3"
        >
          <option>Students</option>
          <option>Faculty</option>
          <option>All</option>
        </select>

        <button
          onClick={handlePublish}
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Publish
        </button>

      </div>

      {/* LIST */}
      <div className="bg-white shadow rounded-xl p-6 mt-6">

        <h2 className="font-semibold mb-4">
          Published Announcements
        </h2>

        {announcements.map((a) => (
          <div
            key={a.id}
            className="border-b py-3"
          >
            <h3 className="font-bold">
              {a.title}
            </h3>

            <p className="text-gray-600">
              {a.message}
            </p>

            <span className="text-xs text-blue-600">
              Audience: {a.audience}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}
