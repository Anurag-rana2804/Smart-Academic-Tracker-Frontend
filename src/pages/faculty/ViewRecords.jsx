import { useEffect, useState } from "react";
import axios from "axios";

export default function ViewRecords() {
  const [records, setRecords] = useState([]);

  const token = localStorage.getItem("token");
  const headers = { Authorization: token };

  const fetchRecords = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/performance/all",
      { headers }
    );

    setRecords(res.data);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-purple-700 mb-4">
        Uploaded Student Records
      </h1>

      <table className="w-full border bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Student</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Marks</th>
            <th className="border p-2">Attendance</th>
          </tr>
        </thead>

        <tbody>
          {records.map((r, i) => (
            <tr key={i}>
              <td className="border p-2">{r.studentId?.name}</td>
              <td className="border p-2">{r.subject}</td>
              <td className="border p-2">{r.marks}</td>
              <td className="border p-2">{r.attendance}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
