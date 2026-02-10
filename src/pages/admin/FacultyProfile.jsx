import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function FacultyProfile() {

  const { id } = useParams();
  const [faculty, setFaculty] =
    useState({});

  const token =
    localStorage.getItem("token");

  const fetchProfile = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/admin/user/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    setFaculty(res.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>

      <h1 className="text-xl mb-4">
        <button onClick={() => window.history.back()} className="text-blue-600 hover:underline">
          &larr; Back
        </button>
      </h1>
      
      {/* TITLE */}
      <h1 className="text-3xl font-bold text-blue-700">
        Faculty Profile Viewer 👨‍🏫 🏫
      </h1>

      {/* PROFILE CARD */}
      <div className="bg-white shadow-lg rounded-xl p-8 mt-8 flex gap-10">

        {/* LEFT PHOTO */}
        <div className="flex flex-col items-center">

          <img
            src={faculty.photo}
            className="w-40 h-40 rounded-full border-4 border-blue-600"
          />

          <h2 className="mt-4 font-semibold text-lg">
            {faculty.name}
          </h2>

          <p className="text-gray-500">
            {faculty.employeeId}
          </p>

        </div>

        {/* RIGHT DETAILS */}
        <div className="grid grid-cols-2 gap-6 flex-1">

          <div>
            <p className="text-gray-500">
              Branch
            </p>
            <h3 className="font-semibold">
              {faculty.branch}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Mobile
            </p>
            <h3 className="font-semibold">
              {faculty.mobile}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Email
            </p>
            <h3 className="font-semibold">
              {faculty.email}
            </h3>
          </div>

        </div>

      </div>

    </div>
  );
}
