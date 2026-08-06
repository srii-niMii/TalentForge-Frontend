import { useNavigate } from "react-router-dom";
import { deleteJob, closeJob } from "../../services/jobService";

export default function JobCard({ job, onRefresh }) {

    const navigate = useNavigate();

    const handleDelete = async () => {

        const confirmed = window.confirm(
            "Are you sure you want to delete this job?"
        );

        if (!confirmed) return;

        try {

            await deleteJob(job.id);

            onRefresh();

        }
        catch (error) {

            alert("Failed to delete job");

        }

    };


    const handleClose = async () => {

        try {

            await closeJob(job.id);

            onRefresh();

        }
        catch (error) {

            alert("Failed to close job");

        }

    };


    return (

        <div
            className="
           bg-[#1e1e2c]
            rounded-xl
            shadow
            p-6
            hover:shadow-lg
            transition
            "
        >

            <h2
                className="
                text-xl
                font-semibold
                "
            >
                {job.title}
            </h2>


            <p
                className="
                text-gray-600
                mt-2
                "
            >
                {job.description}
            </p>


            <p
                className="
                text-sm
                text-gray-400
                mt-3
                "
            >
                Department: {job.department}
            </p>


            <div
                className="
                mt-5
                flex
                items-center
                justify-between
                "
            >

                <span
                    className={`
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium
                    ${
                        job.status === "OPEN"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }
                    `}
                >
                    {job.status}
                </span>

            </div>


            <div
                className="
                mt-6
                grid
                grid-cols-2
                gap-3
                "
            >

                <button
                    onClick={() =>
                        navigate(`/recruiter/edit-job/${job.id}`)
                    }
                    className="
                    bg-blue-500
                    text-white
                    rounded-lg
                    py-2
                    hover:bg-blue-700
                    "
                >
                    Edit
                </button>


                <button
                    onClick={handleDelete}
                    className="
                     bg-red-900
                    text-white
                    rounded-lg
                    py-2
                    hover:bg-red-700
                    "
                >
                    Delete
                </button>


                <button
                    onClick={handleClose}
                    className="
                    bg-yellow-600
                    text-white
                    rounded-lg
                    py-2
                    hover:bg-yellow-600
                    "
                >
                    Close Job
                </button>


                <button
                    onClick={() =>
                        navigate(`/recruiter/jobs/${job.id}/applicants`)
                    }
                    className="
                    bg-gray-700
                    text-white
                    rounded-lg
                    py-2
                    hover:bg-black
                    "
                >
                    Applicants
                </button>

            </div>

        </div>

    );

}