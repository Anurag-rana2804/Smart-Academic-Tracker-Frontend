import { useState } from "react";
import { Link } from "react-router-dom";

export default function StudentNavbar({ toggleSidebar }) {
  const [openProfile, setOpenProfile] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);

  // ✅ Dummy Notifications (Later from DB)
  const notifications = [
    "📢 Mid Term Exams start from 20 Feb",
    "⚠️ Attendance below 75% in DBMS",
    "📝 New marks uploaded in Java",
    "💳 Semester fee payment due",
  ];

  return (
    <div className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-4">
        {/* ☰ Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="text-2xl font-bold text-green-700"
        >
          ☰
        </button>

        <h1 className="text-2xl font-bold text-green-700">Student Dashboard</h1>
      </div>

      {/* ================= RIGHT SECTION ================= */}
      <div className="flex items-center gap-6">
        {/* 🔔 Notification Bell */}
        <div className="relative">
          <span
            className="text-2xl cursor-pointer"
            onClick={() => {
              setOpenNotif(!openNotif);
              setOpenProfile(false);
            }}
          >
            🔔
          </span>

          {/* Badge */}
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
            {notifications.length}
          </span>

          {/* ================= NOTIFICATION DROPDOWN ================= */}
          {openNotif && (
            <div className="absolute right-0 mt-3 w-80 bg-white shadow-xl rounded-lg p-4 z-50">
              <h2 className="font-bold text-gray-700 mb-3">Notifications</h2>

              {notifications.length === 0 ? (
                <p className="text-gray-500">No new notifications</p>
              ) : (
                <ul className="space-y-2 max-h-60 overflow-y-auto">
                  {notifications.map((n, i) => (
                    <li key={i} className="bg-gray-100 p-2 rounded text-sm">
                      {n}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* ================= PROFILE ================= */}
        <div className="relative">
          {/* Profile Image */}
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full cursor-pointer border"
            onClick={() => {
              setOpenProfile(!openProfile);
              setOpenNotif(false);
            }}
          />

          {/* Profile Dropdown */}
          {openProfile && (
            <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-lg w-48 p-2 z-50">
              <Link
                to="/admin/student-profile"
                className="block px-2 py-2 hover:bg-gray-100 rounded"
              >
              Student Profile
              </Link>

              <Link
                to="/student/change-password"
                className="block px-2 py-2 hover:bg-gray-100 rounded"
              >
                Change Password
              </Link>

              <Link
                to="/"
                className="block px-2 py-2 hover:bg-gray-100 rounded text-red-600"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
