import { useEffect, useState } from "react";
import axios from "axios";

export default function Results() {
  const [results, setResults] = useState([]);

  const token = localStorage.getItem("token");
  const headers = { Authorization: token };

  // ✅ Fetch Student Semester Results
  const fetchResults = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}api/results/my`,
      { headers }
    );

    setResults(res.data);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-700">
        Semester Results 📊
      </h1>

      <p className="mt-2 text-gray-600">
        View all semester-wise marks and SGPA.
      </p>

      {/* ✅ Results Display */}
      {results.length === 0 ? (
        <p className="mt-6 text-red-600 font-semibold">
          No results uploaded yet ❌
        </p>
      ) : (
        results.map((sem, index) => (
          <div
            key={index}
            className="mt-8 bg-white shadow rounded-xl p-6"
          >
            <h2 className="text-xl font-bold text-green-700">
              Semester {sem.semester} Result ✅
            </h2>

            <table className="w-full border mt-4">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Subject</th>
                  <th className="border p-2">Marks</th>
                </tr>
              </thead>

              <tbody>
                {sem.subjects.map((s, i) => (
                  <tr key={i}>
                    <td className="border p-2">{s.name}</td>
                    <td className="border p-2">{s.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-4 font-bold text-purple-700">
              SGPA: {sem.sgpa}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
