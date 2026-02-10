import { useState } from "react";

export default function ManageForms() {

  /* Tabs */
  const [tab, setTab] = useState("regular");

  /* Dummy Forms Data */
  const forms = [
    {
      id: 1,
      name: "Anurag Sharma",
      rollNo: "BCA101",
      branch: "BCA",
      type: "Regular",
      status: "Pending",
    },
    {
      id: 2,
      name: "Rahul Verma",
      rollNo: "BCA102",
      branch: "BCA",
      type: "Repeater",
      status: "Pending",
    },
  ];

  const handleApprove = (id) => {
    alert(`Form ${id} Approved ✅`);
  };

  const handleReject = (id) => {
    alert(`Form ${id} Rejected ❌`);
  };

  return (
    <div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-blue-700">
        Manage Examination Forms 📝
      </h1>

      <p className="text-gray-600 mt-1">
        Approve or reject student exam applications
      </p>

      {/* ================= TABS ================= */}
      <div className="flex gap-4 mt-6">

        <button
          onClick={() => setTab("regular")}
          className={`px-6 py-2 rounded ${
            tab === "regular"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Regular Forms
        </button>

        <button
          onClick={() => setTab("repeater")}
          className={`px-6 py-2 rounded ${
            tab === "repeater"
              ? "bg-red-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Repeater / Ex Forms
        </button>

      </div>

      {/* ================= TABLE ================= */}
      <div className="mt-6 bg-white shadow rounded-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th>Roll No</th>
              <th>Branch</th>
              <th>Form Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {forms
              .filter((f) =>
                tab === "regular"
                  ? f.type === "Regular"
                  : f.type !== "Regular"
              )
              .map((f) => (

                <tr
                  key={f.id}
                  className="border text-center"
                >

                  <td className="p-3">
                    {f.name}
                  </td>

                  <td>{f.rollNo}</td>

                  <td>{f.branch}</td>

                  <td>{f.type}</td>

                  <td>

                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                      {f.status}
                    </span>

                  </td>

                  <td className="flex gap-2 justify-center py-2">

                    <button
                      onClick={() =>
                        handleApprove(f.id)
                      }
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        handleReject(f.id)
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
