import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [stats, setStats] = useState({});

  const token = localStorage.getItem("token");

  const fetchAnalytics = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/analytics", {
      headers: {
        Authorization: token,
      },
    });

    setStats(res.data);
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return (
    <div>
      {/* TITLE */}
      <h1 className="text-3xl font-bold text-blue-700">
        Admin Analytics Dashboard 📊
      </h1>

      <p className="text-gray-600 mt-1">
        Overview of university academic system
      </p>

      {/* ================= TOP CARDS ================= */}
      <div className="grid grid-cols-5 gap-6 mt-8">
        <div className="bg-white shadow p-5 rounded-xl">
          <h2>Total Students</h2>
          <p className="text-2xl font-bold">{stats.students}</p>
        </div>

        <div className="bg-white shadow p-5 rounded-xl">
          <h2>Total Faculty</h2>
          <p className="text-2xl font-bold">{stats.faculty}</p>
        </div>

        <div className="bg-white shadow p-5 rounded-xl">
          <h2>Total Issues</h2>
          <p className="text-2xl font-bold">{stats.issues}</p>
        </div>

        <div className="bg-white shadow p-5 rounded-xl">
          <h2>Total Forms</h2>
          <p className="text-2xl font-bold">{stats.forms}</p>
        </div>

        <div className="bg-white shadow p-5 rounded-xl">
          <h2>Performance Records</h2>
          <p className="text-2xl font-bold">{stats.records}</p>
        </div>
      </div>

      {/* ================= CHART AREA ================= */}
      <div className="grid grid-cols-2 gap-6 mt-10">
        {/* Chart Placeholder */}
        <div className="bg-white shadow rounded-xl p-6 h-72 flex items-center justify-center">
          <p className="text-gray-500">📈 Student Growth Chart (Coming Soon)</p>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white shadow rounded-xl p-6 h-72 flex items-center justify-center">
          <p className="text-gray-500">📊 Performance Analytics Chart</p>
        </div>
      </div>
    </div>
  );
}
