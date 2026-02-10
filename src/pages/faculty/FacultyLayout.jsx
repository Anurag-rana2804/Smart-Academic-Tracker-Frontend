import { Outlet } from "react-router-dom";
import { useState } from "react";
import AdminNavbar from "../../components/FacultyNavbar";
import AdminSidebar from "../../components/FacultySidebar";

export default function FacultyLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-18 flex flex-col">

      {/* NAVBAR */}
      <AdminNavbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* BODY */}
      <div className="flex flex-1">

        {/* SIDEBAR */}
        <AdminSidebar sidebarOpen={sidebarOpen} />

        {/* CONTENT */}
        <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
