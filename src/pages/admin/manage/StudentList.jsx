import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  const token = localStorage.getItem("token");

  const fetchStudents = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}api/admin/students`, {
      headers: { Authorization: token },
    });

    setStudents(res.data);
  };

  const navigate = useNavigate();


  const deleteUser = async (id) => {
    if (!window.confirm("Delete student?")) return;

    await axios.delete(`${import.meta.env.VITE_API_URL}api/admin/delete/${id}`, {
      headers: { Authorization: token },
    });

    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <table className="w-full bg-white shadow rounded-xl">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2">Name</th>
          <th>Email</th>
          <th>Roll No</th>
          <th>Branch</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s) => (
          <tr key={s._id} className="border text-center">
            <td className="p-2">{s.name}</td>
            <td>{s.email}</td>
            <td>{s.rollNo}</td>
            <td>{s.branch}</td>

            <td className="flex gap-2 justify-center py-2">
              {/* VIEW */}
              <button
                onClick={() => navigate(`/admin/student-profile/${s._id}`)}
                className="bg-purple-600 text-white px-3 py-1 rounded"
              >
                View
              </button>

              {/* EDIT */}
              <button
                onClick={() => navigate(`/admin/edit-user/${s._id}`)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              {/* DELETE */}
              <button
                onClick={() => deleteUser(s._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
