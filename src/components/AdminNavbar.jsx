import { FaBell, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function AdminNavbar({
  sidebarOpen,
  setSidebarOpen,
}) {

  const [openProfile, setOpenProfile] =
    useState(false);

  const [openNotif, setOpenNotif] =
    useState(false);

  /* Dummy Notifications */
  const notifications = [
    {
      id: 1,
      text: "New student registered",
      time: "2 min ago",
    },
    {
      id: 2,
      text: "Exam form submitted",
      time: "10 min ago",
    },
    {
      id: 3,
      text: "Issue raised by student",
      time: "30 min ago",
    },
  ];

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6 ">

      {/* ================= LEFT ================= */}
      <div className="flex items-center gap-4">

        <button
          onClick={() =>
            setSidebarOpen(!sidebarOpen)
          }
          className="text-xl"
        >
          <FaBars />
        </button>

        <h1 className="text-xl font-bold text-blue-700">
          Admin Dashboard
        </h1>

      </div>

      {/* ================= RIGHT ================= */}
      <div className="flex items-center gap-6 relative">

        {/* 🔔 Notification Bell */}
        <div className="relative">

          <FaBell
            onClick={() =>
              setOpenNotif(!openNotif)
            }
            className="text-xl cursor-pointer"
          />

          {/* Badge Count */}
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
            {notifications.length}
          </span>

          {/* Dropdown */}
          {openNotif && (
            <div className="absolute right-0 mt-4 w-72 bg-white shadow-lg rounded-xl overflow-hidden z-50">

              <div className="p-3 font-semibold border-b">
                Notifications
              </div>

              {notifications.map((n) => (
                <div
                  key={n.id}
                  className="p-3 border-b hover:bg-gray-100 cursor-pointer"
                >
                  <p className="text-sm">
                    {n.text}
                  </p>
                  <span className="text-xs text-gray-500">
                    {n.time}
                  </span>
                </div>
              ))}

              <div className="p-3 text-center text-blue-600 cursor-pointer hover:bg-gray-100">
                View All
              </div>

            </div>
          )}

        </div>

        {/* 👤 Profile */}
        <div className="relative">

          <div
            onClick={() =>
              setOpenProfile(!openProfile)
            }
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src="https://i.pravatar.cc/40"
              className="w-10 h-10 rounded-full"
            />

            <span className="font-semibold">
              {user?.name}
            </span>
          </div>

          {/* Profile Dropdown */}
          {openProfile && (
            <div className="absolute right-0 mt-4 w-44 bg-white shadow rounded-lg">

              <p className="p-3 hover:bg-gray-100 cursor-pointer">
                Profile
              </p>

              <p className="p-3 hover:bg-gray-100 cursor-pointer">
                Change Password
              </p>

              <p
                onClick={() => {
                  localStorage.clear();
                  window.location = "/";
                }}
                className="p-3 hover:bg-red-100 text-red-600 cursor-pointer"
              >
                Logout
              </p>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
