import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [summary, setSummary] = useState({
    avgMarks: 0,
    avgAttendance: 0,
    risk: "Loading...",
  });

  const [user, setUser] = useState(null);

  const token = localStorage.getItem("token");
  const headers = { Authorization: token };

  // ================= FETCH SUMMARY =================
  const fetchSummary = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/performance/summary",
      { headers }
    );
    setSummary(res.data);
  };

  // ================= FETCH LOGGED-IN USER =================
  const fetchUser = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/auth/me",
      { headers }
    );
    setUser(res.data);
  };

  useEffect(() => {
    fetchSummary();
    fetchUser();
  }, []);

  return (
    <div>

      {/* ================= WELCOME BANNER ================= */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold">
          Welcome, {user?.name || "Student"} !
        </h1>

        <p className="mt-2 text-blue-100">
          Always stay updated in your Academic Portal
        </p>

      </div>

      {/* ================= SUMMARY CARDS ================= */}
      <div className="grid grid-cols-3 gap-6 mt-10">

        {/* Marks */}
        <div className="bg-white shadow-lg rounded-xl p-5 border-l-4 border-green-600 hover:scale-105 transition">
          <h2 className="text-lg font-semibold text-gray-700">
            Overall Marks
          </h2>

          <p className="text-3xl font-bold text-green-700 mt-2">
            {summary.avgMarks}%
          </p>
        </div>

        {/* Attendance */}
        <div className="bg-white shadow-lg rounded-xl p-5 border-l-4 border-blue-600 hover:scale-105 transition">
          <h2 className="text-lg font-semibold text-gray-700">
            Attendance
          </h2>

          <p className="text-3xl font-bold text-blue-700 mt-2">
            {summary.avgAttendance}%
          </p>
        </div>

        {/* Risk */}
        <div className="bg-white shadow-lg rounded-xl p-5 border-l-4 border-red-600 hover:scale-105 transition">
          <h2 className="text-lg font-semibold text-gray-700">
            AI Risk Status
          </h2>

          <p className="text-2xl font-bold text-red-600 mt-2">
            {summary.risk}
          </p>
        </div>

      </div>

      {/* ================= QUICK ACTIONS ================= */}
      <h2 className="text-2xl font-bold text-gray-800 mt-12">
        Quick Actions ⚡
      </h2>

      <div className="grid grid-cols-2 gap-6 mt-6">

        <Link
          to="/student/timetable"
          className="bg-white shadow-md rounded-xl p-6 hover:scale-105 transition"
        >
          📅 View Timetable
        </Link>

        <Link
          to="/student/exam/mid-marks"
          className="bg-white shadow-md rounded-xl p-6 hover:scale-105 transition"
        >
          📝 Exam Marks
        </Link>

        <Link
          to="/student/results"
          className="bg-white shadow-md rounded-xl p-6 hover:scale-105 transition"
        >
          📊 Results
        </Link>

        <Link
          to="/student/payment"
          className="bg-white shadow-md rounded-xl p-6 hover:scale-105 transition"
        >
          💳 Online Payment
        </Link>

      </div>

      {/* ================= AI ADVISOR ================= */}
      <div className="mt-12 bg-green-100 border-l-4 border-green-600 p-6 rounded-xl shadow">

        <h2 className="text-xl font-bold text-green-800">
          🤖 Smart Advisor Suggestion
        </h2>

        <p className="mt-2 text-gray-700">
          Your current academic risk level is:{" "}
          <b>{summary.risk}</b>.  
          Focus on improving attendance and consistent study habits to maintain strong performance.
        </p>

      </div>

    </div>
  );
}
