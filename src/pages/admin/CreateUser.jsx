import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();

  return (
    <div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-blue-700">
        Create User Portal
      </h1>

      <p className="text-gray-600 mt-1">
        Select user type to create account
      </p>

      {/* CARDS */}
      <div className="grid grid-cols-2 gap-8 mt-10">

        {/* STUDENT CARD */}
        <div
          onClick={() => navigate("/admin/create-student")}
          className="bg-white shadow-lg rounded-xl p-8 cursor-pointer hover:scale-105 transition border-l-4 border-blue-600"
        >
          <h2 className="text-xl font-semibold">
            Create Student
          </h2>

          <p className="text-gray-500 mt-2">
            Add new student academic account
          </p>
        </div>

        {/* FACULTY CARD */}
        <div
          onClick={() => navigate("/admin/create-faculty")}
          className="bg-white shadow-lg rounded-xl p-8 cursor-pointer hover:scale-105 transition border-l-4 border-green-600"
        >
          <h2 className="text-xl font-semibold">
            Create Faculty
          </h2>

          <p className="text-gray-500 mt-2">
            Add new faculty teaching account
          </p>
        </div>

      </div>

    </div>
  );
}
