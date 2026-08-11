import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";
import Navbar from "../../components/layout/Navbar";

export default function CandidateJobs() {

    const navigate = useNavigate();

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        loadJobs();

    }, []);


    const loadJobs = async () => {

        try {

            setLoading(true);
            setError("");

            const response = await axiosInstance.get(
                "/jobs/open"
            );

            setJobs(response.data);

        }
        catch (error) {

            console.error(
                "Failed to load jobs:",
                error
            );

            setError(
                error.response?.data?.message ||
                "Unable to load jobs."
            );

        }
        finally {

            setLoading(false);

        }

    };


    return (

        <div
            className="
            min-h-screen
            bg-[#070B14]
            "
        >

            <Navbar />


            <main
                className="
                max-w-7xl
                mx-auto
                px-6
                py-10
                "
            >

                <div className="mb-8">

                    <p
                        className="
                        text-violet-400
                        uppercase
                        tracking-widest
                        text-sm
                        font-semibold
                        "
                    >
                        TalentForge ATS
                    </p>

                    <h1
                        className="
                        text-4xl
                        font-bold
                        text-white
                        mt-2
                        "
                    >
                        Available Jobs
                    </h1>

                    <p
                        className="
                        text-slate-400
                        mt-2
                        "
                    >
                        Find your next opportunity and apply
                        for jobs that match your skills.
                    </p>

                </div>


                {loading && (

                    <div
                        className="
                        bg-[#0B1220]
                        rounded-2xl
                        p-10
                        text-center
                        text-slate-400
                        "
                    >
                        Loading jobs...
                    </div>

                )}


                {!loading && error && (

                    <div
                        className="
                        bg-red-500/10
                        border
                        border-red-500/30
                        text-red-400
                        rounded-xl
                        p-5
                        "
                    >
                        {error}
                    </div>

                )}


                {!loading &&
                    !error &&
                    jobs.length === 0 && (

                    <div
                        className="
                        bg-[#0B1220]
                        rounded-2xl
                        p-10
                        text-center
                        "
                    >

                        <h2
                            className="
                            text-xl
                            font-semibold
                            text-white
                            "
                        >
                            No jobs available
                        </h2>

                        <p
                            className="
                            text-slate-400
                            mt-2
                            "
                        >
                            Check back later for new
                            opportunities.
                        </p>

                    </div>

                )}


                {!loading &&
                    !error &&
                    jobs.length > 0 && (

                    <div
                        className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-6
                        "
                    >

                        {jobs.map((job) => (

                            <div
                                key={job.id}
                                className="
                                bg-[#0B1220]
                                border
                                border-slate-800
                                rounded-2xl
                                p-6
                                hover:border-violet-500/50
                                hover:-translate-y-1
                                transition
                                "
                            >

                                <div
                                    className="
                                    flex
                                    justify-between
                                    items-start
                                    gap-4
                                    "
                                >

                                    <h2
                                        className="
                                        text-xl
                                        font-semibold
                                        text-white
                                        "
                                    >
                                        {job.title}
                                    </h2>


                                    <span
                                        className="
                                        bg-green-500/10
                                        text-green-400
                                        border
                                        border-green-500/20
                                        px-3
                                        py-1
                                        rounded-full
                                        text-xs
                                        font-medium
                                        "
                                    >
                                        {job.status}
                                    </span>

                                </div>


                                <p
                                    className="
                                    text-violet-400
                                    mt-4
                                    font-medium
                                    "
                                >
                                    {job.department}
                                </p>


                                <p
                                    className="
                                    text-slate-400
                                    mt-4
                                    line-clamp-3
                                    "
                                >
                                    {job.description}
                                </p>


                                <button
                                    type="button"
                                    onClick={() =>
                                        navigate(
                                            `/candidate/jobs/${job.id}`
                                        )
                                    }
                                    className="
                                    mt-6
                                    w-full
                                    bg-violet-600
                                    hover:bg-violet-700
                                    text-white
                                    font-semibold
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

