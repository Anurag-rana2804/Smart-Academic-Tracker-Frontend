import { NavLink } from "react-router-dom";

export default function FacultySidebar({ sidebarOpen }) {
  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-20"
      } transition-all duration-300 bg-gradient-to-b from-indigo-500 to-purple-600 min-h-screen p-4 shadow-lg `}
    >
      {/* LOGO */}
      <div className="flex items-center justify-center mb-8">
        <div className="bg-white text-purple-600 w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold">
          🎓
        </div>
      </div>

      <nav className="flex flex-col gap-2 text-white text-sm">
        {/* ================= DASHBOARD ================= */}
        <NavLink
          to="/faculty/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          {sidebarOpen && "Dashboard"}
        </NavLink>

        {/* ================= MANAGE USERS ================= */}
        <NavLink
          to="/admin/Create-User"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          {sidebarOpen && "Create User"}
        </NavLink>

        {/* ================= MANAGE USERS ================= */}
        <NavLink
          to="/admin/manage-users"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          {sidebarOpen && "Manage Users"}
        </NavLink>

        {/* ================= MANAGE FORMS ================= */}
        <NavLink
          to="/admin/manage-forms"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          {sidebarOpen && "Manage Forms"}
        </NavLink>

        {/* ================= RESULT ================= */}
        <NavLink
          to="/admin/manage-results"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          {sidebarOpen && "Result"}
        </NavLink>

        {/* ================= ISSUE ================= */}
        <NavLink
          to="/admin/manage-issues"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          {sidebarOpen && "Manage Issues"}
        </NavLink>

        {/* ================= ANNOUNCEMENTS ================= */}
        <NavLink
          to="/admin/announcements"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          {sidebarOpen && "Announcements"}
        </NavLink>

        {/* ================= ROLE PERMISSIONS ================= */}
        <NavLink
          to="/admin/permissions"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          {sidebarOpen && "Role Permissions"}
        </NavLink>

        {/* ================= SETTINGS ================= */}
        <NavLink
          to="/admin/system-settings"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          {sidebarOpen && "System Settings"}
        </NavLink>
      </nav>
    </div>
  );
}
