import { useState } from "react";
import { createJob } from "../../services/jobService";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";


export default function CreateJob() {


    const navigate = useNavigate();


    const [job, setJob] = useState({

        title: "",
        description: "",
        location: "",
        salary: "",
        employmentType: ""

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
                    bg-white
                    rounded-2xl
                    shadow
                    p-6
                    md:p-8
                    "
                >


                    <h1
                        className="
                        text-3xl
                        font-bold
                        mb-2
                        "
                    >
                        Create Job
                    </h1>


                    <p
                        className="
                        text-gray-500
                        mb-6
                        "
                    >
                        Add a new job opening for candidates
                    </p>



                    {
                        error && (

                            <div
                                className="
                                bg-red-100
                                text-red-600
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



                        <div>


                            <label
                                className="
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
                                border
                                rounded-lg
                                px-4
                                py-3
                                focus:ring-2
                                focus:ring-blue-500
                                outline-none
                                "

                                required

                            />


                        </div>




                        <div>


                            <label
                                className="
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
                                border
                                rounded-lg
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-blue-500
                                "

                                required

                            />


                        </div>




                        <div
                            className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-5
                            "
                        >


                            <div>

                                <label
                                    className="
                                    font-medium
                                    "
                                >
                                    Location
                                </label>


                                <input

                                    name="location"

                                    value={job.location}

                                    onChange={handleChange}

                                    placeholder="Remote / Delhi"

                                    className="
                                    mt-2
                                    w-full
                                    border
                                    rounded-lg
                                    px-4
                                    py-3
                                    "

                                />


                            </div>



                            <div>


                                <label
                                    className="
                                    font-medium
                                    "
                                >
                                    Salary
                                </label>


                                <input

                                    name="salary"

                                    value={job.salary}

                                    onChange={handleChange}

                                    placeholder="80000"

                                    className="
                                    mt-2
                                    w-full
                                    border
                                    rounded-lg
                                    px-4
                                    py-3
                                    "

                                />


                            </div>


                        </div>




                        <div>


                            <label
                                className="
                                font-medium
                                "
                            >
                                Employment Type
                            </label>


                            <select

                                name="employmentType"

                                value={job.employmentType}

                                onChange={handleChange}

                                className="
                                mt-2
                                w-full
                                border
                                rounded-lg
                                px-4
                                py-3
                                "
                            >

                                <option value="">
                                    Select type
                                </option>

                                <option value="FULL_TIME">
                                    Full Time
                                </option>


                                <option value="PART_TIME">
                                    Part Time
                                </option>


                                <option value="INTERNSHIP">
                                    Internship
                                </option>


                            </select>


                        </div>




                        <button

                            type="submit"

                            disabled={loading}

                            className="
                            w-full
                            bg-blue-600
                            hover:bg-blue-700
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