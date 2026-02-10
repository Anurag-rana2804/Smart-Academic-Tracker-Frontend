import { useState } from "react";

export default function Attendance() {
  const [activeTab, setActiveTab] = useState("class");

  return (
    <div>

      {/* ================= PAGE TITLE ================= */}
      <h1 className="text-3xl font-bold text-purple-700">
        My Attendance Report
      </h1>

      <p className="text-gray-600 mt-1">
        Track your academic attendance
      </p>

      {/* ================= CARDS ================= */}
      <div className="grid grid-cols-2 gap-6 mt-8">

        {/* CLASS CARD */}
        <div
          onClick={() => setActiveTab("class")}
          className={`cursor-pointer bg-white shadow-lg rounded-xl p-6 border-l-4 transition hover:scale-105
          ${
            activeTab === "class"
              ? "border-purple-600"
              : "border-gray-300"
          }`}
        >
          <h2 className="text-xl font-semibold">
            Theory Attendance
          </h2>

          <p className="text-3xl font-bold text-purple-700 mt-2">
            82%
          </p>

          <p className="text-gray-500 text-sm">
            Overall semester attendance
          </p>
        </div>

        {/* LIBRARY CARD */}
        <div
          onClick={() => setActiveTab("library")}
          className={`cursor-pointer bg-white shadow-lg rounded-xl p-6 border-l-4 transition hover:scale-105
          ${
            activeTab === "library"
              ? "border-indigo-600"
              : "border-gray-300"
          }`}
        >
          <h2 className="text-xl font-semibold">
            Practical Attendance
          </h2>

          <p className="text-3xl font-bold text-indigo-700 mt-2">
            65%
          </p>

          <p className="text-gray-500 text-sm">
            Practical visit record
          </p>
        </div>

      </div>

      {/* ================= DETAILS SECTION ================= */}
      <div className="bg-white shadow-lg rounded-xl p-6 mt-10">

        {activeTab === "class" && (
          <>
            <h2 className="text-xl font-bold mb-4">
              Theory Attendance Details
            </h2>

            <table className="w-full border text-center">
              <thead className="bg-gray-200">
                <tr>
                  <th>Subject</th>
                  <th>Total Classes</th>
                  <th>Present</th>
                  <th>%</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Web Development</td>
                  <td>40</td>
                  <td>32</td>
                  <td>80%</td>
                </tr>

                <tr>
                  <td>DBMS</td>
                  <td>38</td>
                  <td>30</td>
                  <td>79%</td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        {activeTab === "library" && (
          <>
            <h2 className="text-xl font-bold mb-4">
              Practical Attendance Details
            </h2>

            <table className="w-full border text-center">
              <thead className="bg-gray-200">
                <tr>
                  <th>Month</th>
                  <th>Total Visits</th>
                  <th>Hours Spent</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>January</td>
                  <td>12</td>
                  <td>24 hrs</td>
                </tr>

                <tr>
                  <td>February</td>
                  <td>9</td>
                  <td>18 hrs</td>
                </tr>
              </tbody>
            </table>
          </>
        )}

      </div>
    </div>
  );
}
