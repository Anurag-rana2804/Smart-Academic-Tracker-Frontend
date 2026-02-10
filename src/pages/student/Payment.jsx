export default function Payment() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-700">
        Online Payment 💳
      </h1>

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="bg-white shadow rounded-xl p-6">
          <h2>University Fee</h2>
          <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded">
            Pay Now
          </button>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2>Hostel Fee</h2>
          <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
            Pay Now
          </button>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2>Bus Fee</h2>
          <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded">
            Pay Now
          </button>
        </div>

      </div>
    </div>
  );
}
