import { useEffect, useState } from "react";
import axios from "axios";

export default function RiskReport() {
  const [riskReport, setRiskReport] = useState([]);

  const token = localStorage.getItem("token");
  const headers = { Authorization: token };

  const fetchRiskReport = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/performance/risk-report",
      { headers }
    );

    setRiskReport(res.data);
  };

  useEffect(() => {
    fetchRiskReport();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        AI Student Risk Prediction Report 🚀
      </h1>

      <table className="w-full border bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Student</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Marks</th>
            <th className="border p-2">Attendance</th>
            <th className="border p-2">Risk</th>
          </tr>
        </thead>

        <tbody>
          {riskReport.map((r, i) => (
            <tr key={i}>
              <td className="border p-2">{r.student}</td>
              <td className="border p-2">{r.subject}</td>
              <td className="border p-2">{r.marks}</td>
              <td className="border p-2">{r.attendance}%</td>

              <td className="border p-2 font-bold">{r.risk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
