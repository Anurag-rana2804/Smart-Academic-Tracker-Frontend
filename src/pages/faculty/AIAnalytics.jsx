import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AIAnalytics() {

  /* ================= DUMMY DATA ================= */

  const performanceData = [
    { month: "Jan", marks: 65 },
    { month: "Feb", marks: 70 },
    { month: "Mar", marks: 72 },
    { month: "Apr", marks: 68 },
    { month: "May", marks: 75 },
  ];

  const attendanceData = [
    { subject: "Web Dev", attendance: 82 },
    { subject: "DBMS", attendance: 75 },
    { subject: "OS", attendance: 88 },
    { subject: "AI", attendance: 79 },
  ];

  const riskData = [
    { name: "High Risk", value: 12 },
    { name: "Medium Risk", value: 35 },
    { name: "Low Risk", value: 120 },
  ];

  const COLORS = [
    "#ef4444",
    "#f59e0b",
    "#22c55e",
  ];

  /* ================= UI ================= */

  return (
    <div>

      <h1 className="text-3xl font-bold text-blue-700">
        AI Academic Analytics 🤖📊
      </h1>

      <p className="text-gray-600 mt-1">
        Smart insights based on student data
      </p>

      {/* ================= CHART GRID ================= */}
      <div className="grid grid-cols-2 gap-8 mt-10">

        {/* PERFORMANCE LINE */}
        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="font-semibold mb-4">
            Performance Trend
          </h2>

          <ResponsiveContainer
            width="100%"
            height={250}
          >
            <LineChart data={performanceData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="marks"
                stroke="#2563eb"
              />
            </LineChart>
          </ResponsiveContainer>

        </div>

        {/* ATTENDANCE BAR */}
        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="font-semibold mb-4">
            Attendance Analysis
          </h2>

          <ResponsiveContainer
            width="100%"
            height={250}
          >
            <BarChart data={attendanceData}>
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="attendance"
                fill="#22c55e"
              />
            </BarChart>
          </ResponsiveContainer>

        </div>

        {/* RISK PIE */}
        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="font-semibold mb-4">
            Risk Distribution
          </h2>

          <ResponsiveContainer
            width="100%"
            height={250}
          >
            <PieChart>
              <Pie
                data={riskData}
                dataKey="value"
                outerRadius={90}
              >
                {riskData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

        </div>

        {/* AI INSIGHTS PANEL */}
        <div className="bg-white shadow rounded-xl p-6 flex flex-col justify-center">

          <h2 className="font-semibold mb-4">
            AI Insights 🤖
          </h2>

          <ul className="space-y-3 text-gray-700">

            <li>
              ✔ 12 students at high risk
            </li>

            <li>
              ✔ Attendance improving trend
            </li>

            <li>
              ✔ Web Dev highest scoring subject
            </li>

            <li>
              ✔ Suggest extra mentoring
            </li>

          </ul>

        </div>

      </div>

    </div>
  );
}
