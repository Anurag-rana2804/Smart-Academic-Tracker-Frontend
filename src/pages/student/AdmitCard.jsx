export default function AdmitCard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-700">
        Admit Card Portal 🎫
      </h1>

      <p className="text-gray-600 mt-1">
        Download your examination admit cards
      </p>

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="font-semibold">
            Mid Term I
          </h2>
          <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded">
            View Admit Card
          </button>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="font-semibold">
            Mid Term II
          </h2>
          <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded">
            View Admit Card
          </button>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="font-semibold">
            Repeater / Ex
          </h2>
          <button className="mt-3 bg-red-600 text-white px-4 py-2 rounded">
            View Admit Card
          </button>
        </div>

      </div>
    </div>
  );
}
