import { NavLink } from "react-router-dom";

export default function StudentSidebar({ sidebarOpen }) {
  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-20"
      } transition-all duration-300 bg-gradient-to-b from-indigo-500 to-purple-600 min-h-screen p-4 shadow-lg rounded-2xl`}
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
          to="/student/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          🏠 {sidebarOpen && "Dashboard"}
        </NavLink>

        {/* ================= ATTENDANCE ================= */}
        <NavLink
          to="/student/attendance"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          📅 {sidebarOpen && "My Attendance"}
        </NavLink>

        {/* ================= ADMIT CARD ================= */}
        <NavLink
          to="/student/admit-card"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          🎫 {sidebarOpen && "Admit Card"}
        </NavLink>

        {/* ================= APPLY FORMS ================= */}
        <NavLink
          to="/student/forms"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          📝 {sidebarOpen && "Apply Forms"}
        </NavLink>

        {/* ================= RESULT ================= */}
        <NavLink
          to="/student/results"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          📊 {sidebarOpen && "Result"}
        </NavLink>

        {/* ================= ISSUE ================= */}
        <NavLink
          to="/student/issue"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          🛠️ {sidebarOpen && "Student Raise Issue"}
        </NavLink>

        {/* ================= TRAINING ================= */}
        <NavLink
          to="/student/training"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          🎓 {sidebarOpen && "Training & Placement"}
        </NavLink>

        {/* ================= CALENDAR ================= */}
        <NavLink
          to="/student/calendar"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          📅 {sidebarOpen && "Academic Calendar"}
        </NavLink>

        {/* ================= PAYMENT ================= */}
        <NavLink
          to="/student/payment"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          💳 {sidebarOpen && "Online Payment"}
        </NavLink>

        {/* ================= ANNOUNCEMENTS ================= */}
        <NavLink
          to="/student/announcements"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          📢 {sidebarOpen && "Announcements"}
        </NavLink>

        {/* ================= FEEDBACK ================= */}
        <NavLink
          to="/student/feedback"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl transition-all
            ${isActive ? "bg-white text-purple-700 shadow-md" : "hover:bg-white/20"}`
          }
        >
          📝 {sidebarOpen && "Feedback Form"}
        </NavLink>
      </nav>
    </div>
  );
}
