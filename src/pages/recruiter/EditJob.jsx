import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import {
    getJobById,
    updateJob
} from "../../services/jobService";

export default function EditJob() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [department, setDepartment] = useState("");
    const [description, setDescription] = useState("");

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadJob();

    }, []);

    const loadJob = async () => {

        try {

            const job =
                await getJobById(id);

            setTitle(job.title);
            setDepartment(job.department);
            setDescription(job.description);

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await updateJob(id, {

                title,
                department,
                description

            });

            navigate("/recruiter/dashboard");

        }

        catch (error) {

            console.log(error);

        }

    };


    if (loading) {

        return (

            <DashboardLayout>

                <div className="text-white">

                    Loading...

                </div>

            </DashboardLayout>

        );

    }


    return (

        <DashboardLayout>

            <div className="max-w-3xl mx-auto">

                <h1 className="text-3xl font-bold text-white mb-2">

                    Edit Job

                </h1>

                <p className="text-slate-400 mb-8">

                    Update your job posting

                </p>


                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    <div>

                        <label className="block text-slate-300 mb-2">

                            Job Title

                        </label>

                        <input
                            className="
                            w-full
                            bg-slate-800
                            border
                            border-slate-700
                            rounded-xl
                            p-4
                            text-white
                            outline-none
                            focus:border-violet-500
                            "
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)
                            }
                        />

                    </div>


                    <div>

                        <label className="block text-slate-300 mb-2">

                            Department

                        </label>

                        <input
                            className="
                            w-full
                            bg-slate-800
                            border
                            border-slate-700
                            rounded-xl
                            p-4
                            text-white
                            outline-none
                            focus:border-violet-500
                            "
                            value={department}
                            onChange={(e) =>
                                setDepartment(e.target.value)
                            }
                        />

                    </div>


                    <div>

                        <label className="block text-slate-300 mb-2">

                            Description

                        </label>

                        <textarea
                            rows={6}
                            className="
                            w-full
                            bg-slate-800
                            border
                            border-slate-700
                            rounded-xl
                            p-4
                            text-white
                            outline-none
                            focus:border-violet-500
                            "
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                        />

                    </div>


                    <div className="flex gap-4">

                        <button
                            type="button"
                            onClick={() =>
                                navigate(-1)
                            }
                            className="
                            px-6
                            py-3
                            rounded-xl
                            border
                            border-slate-600
                            text-white
                            hover:bg-slate-800
                            transition
                            "
                        >

                            Cancel

                        </button>


                        <button
                            type="submit"
                            className="
                            px-6
                            py-3
                            rounded-xl
                            bg-violet-600
                            hover:bg-violet-700
                            transition
                            text-white
                            font-medium
                            "
                        >

                            Save Changes

                        </button>

                    </div>

                </form>

            </div>

        </DashboardLayout>

    );

}