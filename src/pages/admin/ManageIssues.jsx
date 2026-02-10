import { useState } from "react";

export default function ManageIssues() {

  /* Dummy Issue Data */
  const [issues, setIssues] = useState([
    {
      id: 1,
      name: "Anurag Sharma",
      rollNo: "BCA101",
      issue: "Attendance not updated",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      name: "Rahul Verma",
      rollNo: "BCA102",
      issue: "Exam form not visible",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: 3,
      name: "Sneha Gupta",
      rollNo: "BCA103",
      issue: "Payment receipt missing",
      priority: "Low",
      status: "Pending",
    },
  ]);

  /* Resolve Issue */
  const resolveIssue = (id) => {
    const updated = issues.map((i) =>
      i.id === id
        ? { ...i, status: "Resolved" }
        : i
    );

    setIssues(updated);
  };

  /* Reject Issue */
  const rejectIssue = (id) => {
    const updated = issues.map((i) =>
      i.id === id
        ? { ...i, status: "Rejected" }
        : i
    );

    setIssues(updated);
  };

  return (
    <div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-blue-700">
        Manage Student Issues ⚠️
      </h1>

      <p className="text-gray-600 mt-1">
        Resolve or reject student complaints
      </p>

      {/* ================= TABLE ================= */}
      <div className="bg-white shadow rounded-xl mt-6 overflow-hidden">

        <table className="w-full text-center">

          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th>Roll No</th>
              <th>Issue</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {issues.map((i) => (

              <tr key={i.id} className="border">

                <td className="p-3">
                  {i.name}
                </td>

                <td>{i.rollNo}</td>

                <td>{i.issue}</td>

                {/* Priority Badge */}
                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      i.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : i.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {i.priority}
                  </span>

                </td>

                {/* Status Badge */}
                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      i.status === "Resolved"
                        ? "bg-green-100 text-green-700"
                        : i.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {i.status}
                  </span>

                </td>

                {/* Actions */}
                <td className="flex gap-2 justify-center py-2">

                  <button
                    onClick={() =>
                      resolveIssue(i.id)
                    }
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Resolve
                  </button>

                  <button
                    onClick={() =>
                      rejectIssue(i.id)
                    }
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Reject
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
