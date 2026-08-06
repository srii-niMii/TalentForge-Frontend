import { useState } from "react";
import { createJob } from "../../services/jobService";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";


export default function CreateJob() {


    const navigate = useNavigate();


    const [job, setJob] = useState({

        title: "",
        description: "",
        department: ""

    });


    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");



    const handleChange = (e) => {

        setJob({

            ...job,

            [e.target.name]: e.target.value

        });

    };



    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        setLoading(true);


        try {

            await createJob(job);

            navigate("/recruiter/dashboard");


        }
        catch(error) {

            console.log(error);

            setError(
                "Failed to create job"
            );

        }
        finally {

            setLoading(false);

        }

    };



    return (

        <DashboardLayout>


            <div
                className="
                max-w-3xl
                mx-auto
                "
            >


                <div
                    className="
                    bg-[#0B1220]
                    rounded-2xl
                    shadow-xl
                    p-6
                    md:p-8
                    "
                >


                    <h1
                        className="
                        text-3xl
                        font-bold
                        text-white
                        mb-2
                        "
                    >
                        Create Job
                    </h1>



                    <p
                        className="
                        text-gray-400
                        mb-6
                        "
                    >
                        Add a new job opening for candidates
                    </p>



                    {
                        error && (

                            <div
                                className="
                                bg-red-500/20
                                text-red-400
                                p-3
                                rounded-lg
                                mb-5
                                "
                            >

                                {error}

                            </div>

                        )
                    }



                    <form
                        onSubmit={handleSubmit}
                        className="
                        space-y-5
                        "
                    >



                        {/* Job Title */}

                        <div>

                            <label
                                className="
                                text-gray-200
                                font-medium
                                "
                            >
                                Job Title
                            </label>


                            <input

                                name="title"

                                value={job.title}

                                onChange={handleChange}

                                placeholder="Backend Developer"

                                className="
                                mt-2
                                w-full
                                bg-[#111827]
                                text-white
                                border
                                border-gray-700
                                rounded-lg
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-violet-500
                                "

                                required

                            />

                        </div>





                        {/* Description */}

                        <div>

                            <label
                                className="
                                text-gray-200
                                font-medium
                                "
                            >
                                Description
                            </label>


                            <textarea

                                name="description"

                                value={job.description}

                                onChange={handleChange}

                                placeholder="Describe the role and responsibilities"

                                rows="5"

                                className="
                                mt-2
                                w-full
                                bg-[#111827]
                                text-white
                                border
                                border-gray-700
                                rounded-lg
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-violet-500
                                "

                                required

                            />

                        </div>





                        {/* Department */}

                        <div>

                            <label
                                className="
                                text-gray-200
                                font-medium
                                "
                            >
                                Department
                            </label>


                            <input

                                name="department"

                                value={job.department}

                                onChange={handleChange}

                                placeholder="Engineering"

                                className="
                                mt-2
                                w-full
                                bg-[#111827]
                                text-white
                                border
                                border-gray-700
                                rounded-lg
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-violet-500
                                "

                                required

                            />

                        </div>





                        <button

                            type="submit"

                            disabled={loading}

                            className="
                            w-full
                            bg-violet-600
                            hover:bg-violet-700
                            text-white
                            py-3
                            rounded-xl
                            font-semibold
                            transition
                            disabled:opacity-50
                            "

                        >

                            {
                                loading
                                ? "Creating..."
                                : "Create Job"
                            }


                        </button>



                    </form>


                </div>


            </div>


        </DashboardLayout>

    );

}