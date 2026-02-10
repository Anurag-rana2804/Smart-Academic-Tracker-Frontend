import { useState } from "react";
import StudentList from "./manage/StudentList";
import FacultyList from "./manage/FacultyList";

export default function ManageUsers() {
  const [tab, setTab] = useState("students");

  return (
    <div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-blue-700">
        Manage Users
      </h1>

      {/* TABS */}
      <div className="flex gap-4 mt-6">

        <button
          onClick={() => setTab("students")}
          className={`px-6 py-2 rounded ${
            tab === "students"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Students
        </button>

        <button
          onClick={() => setTab("faculty")}
          className={`px-6 py-2 rounded ${
            tab === "faculty"
              ? "bg-green-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Faculty
        </button>

      </div>

      {/* CONTENT */}
      <div className="mt-6">
        {tab === "students" ? <StudentList /> : <FacultyList />}
      </div>

    </div>
  );
}
