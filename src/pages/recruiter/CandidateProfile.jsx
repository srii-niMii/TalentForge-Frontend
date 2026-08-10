import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { getCandidate } from "../../services/candidateService";

export default function CandidateProfile() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [candidate, setCandidate] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadCandidate();

    }, [id]);


    const loadCandidate = async () => {

        try {

            const data = await getCandidate(id);

            setCandidate(data);

        }
        catch (error) {

            console.log(error);

        }
        finally {

            setLoading(false);

        }

    };


    if (loading) {

        return (

            <DashboardLayout>

                <div className="text-white text-xl">

                    Loading...

                </div>

            </DashboardLayout>

        );

    }


    if (!candidate) {

        return (

            <DashboardLayout>

                <div className="text-red-400">

                    Candidate not found.

                </div>

            </DashboardLayout>

        );

    }


    return (

        <DashboardLayout>

            <div className="max-w-5xl mx-auto">

                <button
                    onClick={() => navigate(-1)}
                    className="
                    mb-6
                    text-violet-400
                    hover:text-violet-300
                    "
                >
                    ← Back
                </button>


                <div
                    className="
                    bg-[#111827]
                    rounded-3xl
                    border
                    border-gray-800
                    overflow-hidden
                    shadow-xl
                    "
                >

                    <div
                        className="
                        bg-gradient-to-r
                        from-violet-700
                        via-purple-700
                        to-indigo-700
                        p-8
                        "
                    >

                        <div className="flex items-center gap-6">

                            <div
                                className="
                                w-20
                                h-20
                                rounded-full
                                bg-white/20
                                flex
                                items-center
                                justify-center
                                text-3xl
                                font-bold
                                text-white
                                "
                            >
                                {candidate.name.charAt(0).toUpperCase()}
                            </div>

                            <div>

                                <h1
                                    className="
                                    text-4xl
                                    font-bold
                                    text-white
                                    "
                                >
                                    {candidate.name}
                                </h1>

                                <p className="text-violet-100 mt-2">

                                    {candidate.job?.title}

                                </p>

                            </div>

                        </div>

                    </div>


                    <div
                        className="
                        grid
                        md:grid-cols-2
                        gap-8
                        p-8
                        "
                    >

                        <div
                            className="
                            bg-[#1e1e2c]
                            rounded-2xl
                            p-6
                            "
                        >

                            <h2
                                className="
                                text-xl
                                text-white
                                font-semibold
                                mb-5
                                "
                            >
                                Candidate Information
                            </h2>

                            <div className="space-y-5">

                                <div>

                                    <p className="text-gray-400">

                                        Email

                                    </p>

                                    <p className="text-white">

                                        {candidate.email}

                                    </p>

                                </div>

                                <div>

                                    <p className="text-gray-400">

                                        Phone

                                    </p>

                                    <p className="text-white">

                                        {candidate.phone || "N/A"}

                                    </p>

                                </div>

                                <div>

                                    <p className="text-gray-400">

                                        Source

                                    </p>

                                    <p className="text-white">

                                        {candidate.source || "N/A"}

                                    </p>

                                </div>

                                <div>

                                    <p className="text-gray-400">

                                        Applied On

                                    </p>

                                    <p className="text-white">

                                        {new Date(candidate.createdAt).toLocaleDateString()}

                                    </p>

                                </div>

                            </div>

                        </div>



                        <div
                            className="
                            bg-[#1e1e2c]
                            rounded-2xl
                            p-6
                            "
                        >

                            <h2
                                className="
                                text-xl
                                text-white
                                font-semibold
                                mb-5
                                "
                            >
                                Application Details
                            </h2>

                            <div className="space-y-5">

                                <div>

                                    <p className="text-gray-400">

                                        Job

                                    </p>

                                    <p className="text-white">

                                        {candidate.job?.title}

                                    </p>

                                </div>

                                <div>

                                    <p className="text-gray-400">

                                        Department

                                    </p>

                                    <p className="text-white">

                                        {candidate.job?.department}

                                    </p>

                                </div>

                                <div>

                                    <p className="text-gray-400">

                                        Current Stage

                                    </p>

                                    <span
                                        className="
                                        inline-block
                                        mt-2
                                        bg-violet-600
                                        px-4
                                        py-2
                                        rounded-full
                                        text-white
                                        "
                                    >
                                        {candidate.currentStage}
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>



                    <div className="px-8 pb-8">

                        {
                            candidate.resumeUrl ? (

                                <a
                                    href={candidate.resumeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                    inline-block
                                    bg-violet-600
                                    hover:bg-violet-700
                                    px-6
                                    py-3
                                    rounded-xl
                                    text-white
                                    font-semibold
                                    transition
                                    "
                                >

                                    📄 View Resume

                                </a>

                            ) : (

                                <div className="text-gray-400">

                                    No resume uploaded.

                                </div>

                            )
                        }

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}