import { useState } from "react";

export default function SystemSettings() {

  const [settings, setSettings] = useState({
    universityName: "ITM University",
    address: "Gwalior, Madhya Pradesh",
    email: "info@itm.edu",
    phone: "9876543210",
    semester: "6",
    session: "2025-26",
    examMode: "Offline",
    theme: "Light",
  });

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Settings Saved ✅");
  };

  return (
    <div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-blue-700">
        System Settings ⚙️
      </h1>

      <p className="text-gray-600 mt-1">
        Configure ERP system preferences
      </p>

      {/* ================= UNIVERSITY SETTINGS ================= */}
      <div className="bg-white shadow rounded-xl p-6 mt-8">

        <h2 className="text-xl font-semibold mb-4">
          🏫 University Settings
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            name="universityName"
            value={settings.universityName}
            onChange={handleChange}
            className="border p-2"
          />

          <input
            name="address"
            value={settings.address}
            onChange={handleChange}
            className="border p-2"
          />

          <input
            name="email"
            value={settings.email}
            onChange={handleChange}
            className="border p-2"
          />

          <input
            name="phone"
            value={settings.phone}
            onChange={handleChange}
            className="border p-2"
          />

        </div>

      </div>

      {/* ================= ACADEMIC SETTINGS ================= */}
      <div className="bg-white shadow rounded-xl p-6 mt-6">

        <h2 className="text-xl font-semibold mb-4">
          📚 Academic Settings
        </h2>

        <div className="grid grid-cols-3 gap-4">

          <input
            name="semester"
            value={settings.semester}
            onChange={handleChange}
            className="border p-2"
            placeholder="Current Semester"
          />

          <input
            name="session"
            value={settings.session}
            onChange={handleChange}
            className="border p-2"
            placeholder="Session Year"
          />

          <select
            name="examMode"
            value={settings.examMode}
            onChange={handleChange}
            className="border p-2"
          >
            <option>Offline</option>
            <option>Online</option>
          </select>

        </div>

      </div>

      {/* ================= UI SETTINGS ================= */}
      <div className="bg-white shadow rounded-xl p-6 mt-6">

        <h2 className="text-xl font-semibold mb-4">
          🎨 UI Settings
        </h2>

        <select
          name="theme"
          value={settings.theme}
          onChange={handleChange}
          className="border p-2"
        >
          <option>Light</option>
          <option>Dark</option>
        </select>

      </div>

      {/* SAVE BUTTON */}
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-6 py-2 rounded mt-6"
      >
        Save Settings
      </button>

    </div>
  );
}
