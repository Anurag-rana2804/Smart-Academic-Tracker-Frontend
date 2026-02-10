import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function FacultyList() {
  const [faculty, setFaculty] = useState([]);

  const token = localStorage.getItem("token");

  const fetchFaculty = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/faculty", {
      headers: { Authorization: token },
    });

    setFaculty(res.data);
  };

  const navigate = useNavigate();


  const deleteUser = async (id) => {
    if (!window.confirm("Delete faculty?")) return;

    await axios.delete(`http://localhost:5000/api/admin/delete/${id}`, {
      headers: { Authorization: token },
    });

    fetchFaculty();
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  return (
    <table className="w-full bg-white shadow rounded-xl">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2">Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {faculty.map((s) => (
          <tr key={s._id} className="border text-center">
            <td className="p-2">{s.name}</td>
            <td>{s.email}</td>
            <td>{s.branch}</td>

            <td className="flex gap-2 justify-center py-2">
              {/* VIEW */}
              <button
                onClick={() => navigate(`/admin/faculty-profile/${s._id}`)}
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
