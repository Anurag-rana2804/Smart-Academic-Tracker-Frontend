import { useState } from "react";

export default function RolePermissions() {

  const [roles, setRoles] = useState([
    {
      role: "Admin",
      permissions: [
        "Create Users",
        "Manage Forms",
        "Resolve Issues",
        "Announcements",
      ],
    },
    {
      role: "Faculty",
      permissions: [
        "Upload Marks",
        "View Records",
        "Risk Reports",
      ],
    },
    {
      role: "Student",
      permissions: [
        "View Dashboard",
        "Apply Forms",
        "View Results",
      ],
    },
  ]);

  return (
    <div>

      <h1 className="text-3xl font-bold text-blue-700">
        Role Permission Manager 🔐
      </h1>

      <div className="grid grid-cols-3 gap-6 mt-8">

        {roles.map((r, i) => (

          <div
            key={i}
            className="bg-white shadow rounded-xl p-6"
          >

            <h2 className="font-bold text-lg mb-4">
              {r.role}
            </h2>

            <ul className="text-gray-600 space-y-2">

              {r.permissions.map((p, j) => (
                <li key={j}>
                  ✔ {p}
                </li>
              ))}

            </ul>

          </div>

        ))}

      </div>

    </div>
  );
}
