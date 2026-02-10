import { useEffect, useState } from "react";
import axios from "axios";

export default function UploadMarks() {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState("");

  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [attendance, setAttendance] = useState("");

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: token,
  };

  // ✅ Fetch Students
  const fetchStudents = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/admin/students",
      { headers }
    );
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // ✅ Upload Marks
  const handleUpload = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/performance/add",
      { studentId, subject, marks, attendance },
      { headers }
    );

    alert("Marks Uploaded Successfully ✅");

    setStudentId("");
    setSubject("");
    setMarks("");
    setAttendance("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-purple-700 mb-4">
        Upload Marks & Attendance
      </h1>

      <form className="bg-white p-6 shadow rounded w-[450px]" onSubmit={handleUpload}>
        
        {/* Student Dropdown */}
        <select
          value={studentId}
          className="w-full border p-2 mb-3"
          onChange={(e) => setStudentId(e.target.value)}
          required
        >
          <option value="">Select Student</option>
          {students.map((s) => (
            <option key={s._id} value={s._id}>
              {s.name} ({s.email})
            </option>
          ))}
        </select>

        <input
          value={subject}
          placeholder="Subject"
          className="w-full border p-2 mb-3"
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <input
          value={marks}
          type="number"
          placeholder="Marks"
          className="w-full border p-2 mb-3"
          onChange={(e) => setMarks(e.target.value)}
          required
        />

        <input
          value={attendance}
          type="number"
          placeholder="Attendance %"
          className="w-full border p-2 mb-4"
          onChange={(e) => setAttendance(e.target.value)}
          required
        />

        <button className="w-full bg-purple-600 text-white py-2 rounded">
          Upload ✅
        </button>
      </form>
    </div>
  );
}
