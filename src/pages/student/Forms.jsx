export default function Forms() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-700">
        Apply Examination Forms 📝
      </h1>

      <div className="grid grid-cols-2 gap-6 mt-8">

        <div className="bg-white shadow rounded-xl p-6">
          <h2>Regular Exam Form</h2>
          <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded">
            Apply Now
          </button>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2>Repeater / Ex Form</h2>
          <button className="mt-3 bg-red-600 text-white px-4 py-2 rounded">
            Apply Now
          </button>
        </div>

      </div>
    </div>
  );
}
