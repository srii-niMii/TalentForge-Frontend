import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";
import Navbar from "../../components/layout/Navbar";

export default function MyApplications() {

    const navigate = useNavigate();

    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadApplications();
    }, []);

    const loadApplications = async () => {

        try {

            setLoading(true);
            setError("");

            const response = await axiosInstance.get(
                "/candidates/my-applications"
            );

            setApplications(response.data);

        }
        catch (error) {

            console.error(
                "Failed to load applications:",
                error
            );

            setError(
                error.response?.data?.message ||
                "No applications found."
            );

        }
        finally {

            setLoading(false);

        }
    };


    const getStageStyle = (stage) => {

        switch (stage) {

            case "APPLIED":
                return "bg-blue-500/10 text-blue-400 border-blue-500/30";

            case "SCREENING":
                return "bg-yellow-500/10 text-yellow-400 border-yellow-500/30";

            case "INTERVIEW":
                return "bg-purple-500/10 text-purple-400 border-purple-500/30";

            case "SELECTED":
                return "bg-green-500/10 text-green-400 border-green-500/30";

            case "REJECTED":
                return "bg-red-500/10 text-red-400 border-red-500/30";

            default:
                return "bg-slate-500/10 text-slate-400 border-slate-500/30";
        }
    };


    const formatDate = (date) => {

        if (!date) {
            return "N/A";
        }

        return new Date(date).toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );
    };


    return (

        <div className="
            min-h-screen
            bg-[#070B14]
            text-white
        ">

            <Navbar />

            <main className="
                max-w-7xl
                mx-auto
                px-6
                py-10
            ">

                <div className="mb-8">

                    <p className="
                        text-violet-400
                        uppercase
                        tracking-widest
                        text-sm
                        font-semibold
                    ">
                        TalentForge ATS
                    </p>

                    <h1 className="
                        text-4xl
                        font-bold
                        mt-2
                    ">
                        My Applications
                    </h1>

                    <p className="
                        text-slate-400
                        mt-2
                    ">
                        Track the status of your job applications.
                    </p>

                </div>


                {loading && (

                    <div className="
                        bg-[#0B1220]
                        rounded-2xl
                        p-10
                        text-center
                        text-slate-400
                    ">
                        Loading your applications...
                    </div>

                )}


                {!loading && error && (

                    <div className="
                        bg-red-500/10
                        border
                        border-red-500/30
                        text-red-400
                        rounded-xl
                        p-5
                    ">
                        {error}
                    </div>

                )}


                {!loading &&
                    !error &&
                    applications.length === 0 && (

                    <div className="
                        bg-[#0B1220]
                        rounded-2xl
                        p-10
                        text-center
                    ">

                        <h2 className="
                            text-xl
                            font-semibold
                        ">
                            No applications yet
                        </h2>

                        <p className="
                            text-slate-400
                            mt-2
                        ">
                            Start applying for jobs to see
                            your applications here.
                        </p>

                        <button
                            onClick={() =>
                                navigate("/candidate/jobs")
                            }
                            className="
                                mt-6
                                bg-violet-600
                                hover:bg-violet-700
                                text-white
                                px-6
                                py-3
                                rounded-xl
                                font-semibold
                            "
                        >
                            Browse Jobs
                        </button>

                    </div>

                )}


                {!loading &&
                    !error &&
                    applications.length > 0 && (

                    <div className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-6
                    ">

                        {applications.map((application) => (

                            <div
                                key={application.id}
                                className="
                                    bg-[#0B1220]
                                    border
                                    border-slate-800
                                    rounded-2xl
                                    p-6
                                    hover:border-violet-500/40
                                    transition
                                "
                            >

                                <div className="
                                    flex
                                    justify-between
                                    items-start
                                    gap-4
                                ">

                                    <div>

                                        <h2 className="
                                            text-xl
                                            font-semibold
                                        ">
                                            {application.job?.title ||
                                                "Job"}
                                        </h2>

                                        <p className="
                                            text-violet-400
                                            mt-2
                                        ">
                                            {application.job?.department ||
                                                "Department not available"}
                                        </p>

                                    </div>


                                    <span className={`
                                        border
                                        px-3
                                        py-1
                                        rounded-full
                                        text-xs
                                        font-medium
                                        whitespace-nowrap
                                        ${getStageStyle(
                                            application.currentStage
                                        )}
                                    `}>
                                        {application.currentStage}
                                    </span>

                                </div>


                                <div className="
                                    border-t
                                    border-slate-800
                                    my-5
                                " />


                                <div className="
                                    text-sm
                                    space-y-3
                                ">

                                    <div className="
                                        flex
                                        justify-between
                                    ">

                                        <span className="
                                            text-slate-500
                                        ">
                                            Applied
                                        </span>

                                        <span className="
                                            text-slate-300
                                        ">
                                            {formatDate(
                                                application.createdAt
                                            )}
                                        </span>

                                    </div>


                                    <div className="
                                        flex
                                        justify-between
                                    ">

                                        <span className="
                                            text-slate-500
                                        ">
                                            Status
                                        </span>

                                        <span className="
                                            text-slate-300
                                        ">
                                            {application.currentStage}
                                        </span>

                                    </div>

                                </div>


                                <button
                                    onClick={() =>
                                        navigate(
                                            `/candidate/jobs/${application.job?.id}`
                                        )
                                    }
                                    className="
                                        mt-6
                                        w-full
                                        border
                                        border-slate-700
                                        hover:bg-slate-800
                                        text-slate-300
                                        py-3
                                        rounded-xl
                                        transition
                                    "
                                >
                                    View Job
                                </button>

                            </div>

                        ))}

                    </div>

                )}

            </main>

        </div>

    );
}
