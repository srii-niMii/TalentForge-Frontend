export default function JobCard({ job }) {


    return (
        <div
            className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">

                {job.title}

            </h2>
            <p className="text-gray-600 mt-2">
                {job.description}

            </p>
            <p className="text-sm text-gray-500 mt-3">

                📍 {job.location}

            </p>
            <div
                className="mt-5 flex justify-between items-center border-t pt-4">
                <span
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {job.status}

                </span>
                <button
                    className="text-blue-600 hover:underline">
                    View
                </button>
            </div>
        </div>
    );
}