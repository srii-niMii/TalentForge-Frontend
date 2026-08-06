import { useEffect, useState } from "react";
import { getJobs } from "../../services/jobService";
import DashboardLayout from "../../components/layout/DashboardLayout";
import JobCard from "../../components/common/JobCard";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {

    const [jobs, setJobs] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {

        loadJobs();

    }, []);



    const loadJobs = async () => {

        try {

            const data = await getJobs();

            console.log("Jobs:", data);

            setJobs(data);

        }
        catch (error) {

            console.log(error);

        }

    };



    return (

        <DashboardLayout>


            <div
                className="
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-6
                mb-8
                "
            >

                <div>

                    <p
                        className="
                        text-violet-400
                        uppercase
                        tracking-[0.2em]
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
                        Recruiter Workspace
                    </h1>


                    <p
                        className="
                        text-slate-400
                        mt-3
                        "
                    >
                        Manage your jobs and hiring pipeline from one place.
                    </p>

                </div>



                <button

                    onClick={() =>
                        navigate("/recruiter/create-job")
                    }

                    className="
                    bg-violet-600
                    hover:bg-violet-700
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    transition-all
                    duration-300
                    hover:scale-105
                    shadow-lg
                    shadow-violet-600/20
                    "
                >

                    + Create Job

                </button>


            </div>




            <div
                className="
                flex
                items-center
                justify-between
                mb-5
                "
            >

                <h2
                    className="
                    text-2xl
                    font-semibold
                    text-white
                    "
                >
                    Your Jobs
                </h2>


                <span
                    className="
                    text-slate-400
                    "
                >
                    {jobs.length} Jobs
                </span>

            </div>




            {
                jobs.length === 0 ? (

                    <div
                        className="
                        bg-[#111827]
                        rounded-xl
                        p-8
                        text-center
                        text-slate-400
                        "
                    >

                        No jobs created yet.

                    </div>


                ) : (


                    <div
                        className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-6
                        "
                    >

                        {
                            jobs.map(job => (

                                <JobCard

                                    key={job.id}

                                    job={job}

                                    onRefresh={loadJobs}

                                />

                            ))
                        }


                    </div>


                )

            }



        </DashboardLayout>

    );

}