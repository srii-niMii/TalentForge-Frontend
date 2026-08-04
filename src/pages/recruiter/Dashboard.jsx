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

            setJobs(data);

        }
        catch (error) {

            console.log(error);

        }

    };
    return (

        <DashboardLayout>

            <div
                className="flex flex-col gap-6 ">

                <div
                    className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 ">
                    <div>

                        <h1
                            className="text-3xl font-bold">
                            Recruiter Dashboard
                        </h1>
                        <p
                            className=" text-gray-600">
                            Manage your job postings
                        </p>

                    </div>


                    <button
                        className=" bg-blue-600 text-white px-5 py-3 rounded-xl">
                        + Create Job
                    </button>

                </div>

                <h2
                    className="text-2xl font-semibold" >
                    Your Jobs
                </h2>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        jobs.map(job => (

                            <JobCard
                                key={job.id}
                                job={job}
                            />

                        ))
                    }
                </div>
            </div>
        </DashboardLayout>

    );

}
