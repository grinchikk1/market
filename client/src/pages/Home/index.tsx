export default function HomePage() {
  return (
    <div className="">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          className="text-green-700 border border-green-600 bg-white rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          All categories
        </button>
        <button
          type="button"
          className="text-gray-900 border border-green-600 bg-white rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          Location
        </button>
        <button
          type="button"
          className="text-gray-900 border border-green-600 bg-white rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          Date
        </button>
        <button
          type="button"
          className="text-gray-900 border border-green-600  bg-white rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          Popular
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://www.journeys6senses.com/wp-content/uploads/2023/12/373240438.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://www.journeys6senses.com/wp-content/uploads/2020/12/im-mandra_zatoka.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://www.journeys6senses.com/wp-content/uploads/2020/12/glamping-mandra-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://www.journeys6senses.com/wp-content/uploads/2023/12/slavsmco.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://www.journeys6senses.com/wp-content/uploads/2021/02/Glemping-Carpathians.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://www.journeys6senses.com/wp-content/uploads/2021/06/hugge1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://www.journeys6senses.com/wp-content/uploads/2021/06/hugge.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://www.journeys6senses.com/wp-content/uploads/2020/12/%D0%A8%D0%B8%D1%88%D0%BAiNN-4-2048x1365.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://www.journeys6senses.com/wp-content/uploads/2020/12/%D0%A8%D0%B8%D1%88%D0%BAiNN-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://www.journeys6senses.com/wp-content/uploads/2020/12/shatro1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://www.journeys6senses.com/wp-content/uploads/2020/12/shatro2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://www.journeys6senses.com/wp-content/uploads/2022/08/glemp1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
