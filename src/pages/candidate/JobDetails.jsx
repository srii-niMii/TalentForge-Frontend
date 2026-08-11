import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../api/axios";

export default function JobDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [applying, setApplying] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        loadJob();
    }, [id]);

    const loadJob = async () => {

        try {

            setLoading(true);
            setError("");

            const response = await axiosInstance.get(
                `/jobs/${id}`
            );

            setJob(response.data);

        }
        catch (error) {

            console.error(
                "Error loading job:",
                error
            );

            setError(
                error.response?.data?.message ||
                "Unable to load job."
            );

        }
        finally {

            setLoading(false);

        }
    };


    const handleApply = async () => {

        if (!job) {
            return;
        }

        try {

            setApplying(true);
            setError("");
            setSuccess("");

            const user = JSON.parse(
                localStorage.getItem("user")
            );

            if (!user) {

                navigate("/login");

                return;
            }

            await axiosInstance.post(
                "/candidates",
                {
                    name: user.name,
                    email: user.email,
                    phone: "",
                    source: "WEBSITE",
                    jobId: job.id
                }
            );

            setSuccess(
                "Application submitted successfully!"
            );

        }
        catch (error) {

            console.error(
                "Application error:",
                error
            );

            setError(
                error.response?.data?.message ||
                "Unable to submit application."
            );

        }
        finally {

            setApplying(false);

        }
    };


    if (loading) {

        return (

            <div className="
                min-h-screen
                bg-[#070B14]
                flex
                items-center
                justify-center
                text-white
            ">

                Loading job...

            </div>

        );
    }


    if (error && !job) {

        return (

            <div className="
                min-h-screen
                bg-[#070B14]
                flex
                items-center
                justify-center
                px-4
            ">

                <div className="
                    bg-[#0B1220]
                    rounded-2xl
                    p-8
                    text-center
                    max-w-md
                    w-full
                ">

                    <p className="
                        text-red-400
                        mb-6
                    ">

                        {error}

                    </p>

                    <button
                        onClick={() =>
                            navigate("/candidate/jobs")
                        }
                        className="
                            bg-violet-600
                            hover:bg-violet-700
                            text-white
                            px-5
                            py-2
                            rounded-lg
                        "
                    >

                        Back to Jobs

                    </button>

                </div>

            </div>

        );
    }


    return (

        <div className="
            min-h-screen
            bg-[#070B14]
            text-white
            px-4
            py-10
        ">

            <div className="
                max-w-4xl
                mx-auto
            ">

                <button
                    onClick={() =>
                        navigate("/candidate/jobs")
                    }
                    className="
                        text-slate-400
                        hover:text-white
                        mb-6
                    "
                >

                    ← Back to Jobs

                </button>


                <div className="
                    bg-[#0B1220]
                    rounded-2xl
                    p-8
                    shadow-2xl
                ">

                    <div className="
                        flex
                        flex-col
                        md:flex-row
                        md:items-start
                        md:justify-between
                        gap-6
                    ">

                        <div>

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
                                text-3xl
                                md:text-4xl
                                font-bold
                                mt-3
                            ">

                                {job.title}

                            </h1>

                            <p className="
                                text-slate-400
                                mt-3
                            ">

                                {job.department}

                            </p>

                        </div>


                        <span className="
                            inline-flex
                            self-start
                            bg-green-500/10
                            border
                            border-green-500/30
                            text-green-400
                            px-4
                            py-2
                            rounded-full
                            text-sm
                            font-medium
                        ">

                            {job.status}

                        </span>

                    </div>


                    <div className="
                        border-t
                        border-slate-800
                        my-8
                    " />


                    <section>

                        <h2 className="
                            text-xl
                            font-semibold
                            mb-4
                        ">

                            Job Description

                        </h2>

                        <p className="
                            text-slate-300
                            leading-7
                            whitespace-pre-line
                        ">

                            {job.description ||
                                "No job description provided."}

                        </p>

                    </section>


                    {error && (

                        <div className="
                            mt-6
                            bg-red-500/10
                            border
                            border-red-500/30
                            text-red-400
                            rounded-lg
                            p-4
                        ">

                            {error}

                        </div>

                    )}


                    {success && (

                        <div className="
                            mt-6
                            bg-green-500/10
                            border
                            border-green-500/30
                            text-green-400
                            rounded-lg
                            p-4
                        ">

                            {success}

                        </div>

                    )}


                    <div className="
                        border-t
                        border-slate-800
                        mt-8
                        pt-8
                        flex
                        flex-col
                        sm:flex-row
                        gap-4
                    ">

                        <button
                            onClick={handleApply}
                            disabled={
                                applying ||
                                job.status !== "OPEN" ||
                                !!success
                            }
                            className="
                                flex-1
                                bg-violet-600
                                hover:bg-violet-700
                                disabled:opacity-50
                                disabled:cursor-not-allowed
                                text-white
                                font-semibold
                                py-3
                                rounded-xl
                                transition
                            "
                        >

                            {applying
                                ? "Submitting Application..."
                                : success
                                    ? "Application Submitted"
                                    : job.status === "OPEN"
                                        ? "Apply Now"
                                        : "Job Closed"
                            }

                        </button>


                        <button
                            onClick={() =>
                                navigate("/candidate/jobs")
                            }
                            className="
                                sm:w-40
                                border
                                border-slate-700
                                hover:bg-slate-800
                                text-slate-300
                                py-3
                                rounded-xl
                                transition
                            "
                        >

                            Back

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );
}
