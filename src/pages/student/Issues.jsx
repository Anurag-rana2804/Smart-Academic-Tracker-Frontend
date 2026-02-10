export default function Issues() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-700">
        Raise Student Issue ⚠️
      </h1>

      <form className="bg-white shadow rounded-xl p-6 mt-6 max-w-xl">

        <input
          placeholder="Subject"
          className="border p-2 w-full mb-3"
        />

        <textarea
          placeholder="Describe your issue"
          className="border p-2 w-full mb-3"
        />

        <button className="bg-red-600 text-white px-4 py-2 rounded">
          Submit Issue
        </button>

      </form>
    </div>
  );
}
