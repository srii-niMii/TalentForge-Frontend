import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();

    return (
        <div className="
            min-h-screen
            bg-gray-800
            flex
            items-center
            justify-center
            px-4
        ">

            <div className="
                w-full
                max-w-2xl
                bg-gray-950
                rounded-2xl
                shadow-2xl
                p-8
                md:p-10
            ">

                <div className="text-center mb-10">
  <h1
                        className="
                        text-3xl
                        font-bold
                        text-violet-600
                        "
                    >
                        TalentForge
                    </h1>

                    

                    <p className="
                        text-slate-400
                        mt-3
                    ">
                        Choose how you want to use TalentForge.
                    </p>

                </div>


                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-6
                ">



                    <button
                        type="button"
                        onClick={() => navigate("/register/recruiter")}
                        className="
                            text-left
                            bg-gray-950
                            border
                            border-slate-700
                            hover:border-violet-500
                            rounded-2xl
                            p-6
                            transition
                            hover:-translate-y-1
                            hover:shadow-lg
                            hover:shadow-violet-500/10
                        "
                    >

                        <div className="
                            w-14
                            h-14
                            rounded-xl
                            bg-violet-500/10
                            flex
                            items-center
                            justify-center
                            text-2xl
                            mb-5
                        ">
                            👔
                        </div>

                        <h2 className="
                            text-xl
                            font-semibold
                            text-white
                        ">
                            I'm a Recruiter
                        </h2>

                        <p className="
                            text-slate-400
                            mt-2
                            text-sm
                            leading-6
                        ">
                            Create jobs, review applicants and
                            manage your hiring pipeline.
                        </p>

                        <div className="
                            mt-5
                            text-violet-400
                            font-medium
                        ">
                            Register as Recruiter →
                        </div>

                    </button>


                    <button
                        type="button"
                        onClick={() => navigate("/register/candidate")}
                        className="
                            text-left
                             bg-gray-950
                            border
                            border-slate-700
                            hover:border-violet-500
                            rounded-2xl
                            p-6
                            transition
                            hover:-translate-y-1
                            hover:shadow-lg
                            hover:shadow-violet-500/10
                        "
                    >

                        <div className="
                            w-14
                            h-14
                            rounded-xl
                            bg-violet-500/10
                            flex
                            items-center
                            justify-center
                            text-2xl
                            mb-5
                        ">
                            👤
                        </div>

                        <h2 className="
                            text-xl
                            font-semibold
                            text-white
                        ">
                            I'm a Candidate
                        </h2>

                        <p className="
                            text-slate-400
                            mt-2
                            text-sm
                            leading-6
                        ">
                            Discover jobs, apply for positions
                            and track your applications.
                        </p>

                        <div className="
                            mt-5
                            text-violet-400
                            font-medium
                        ">
                            Register as Candidate →
                        </div>

                    </button>

                </div>


                <div className="
                    text-center
                    mt-8
                    text-slate-400
                    text-sm
                ">

                    Already have an account?

                    <button
                        type="button"
                        onClick={() => navigate("/login")}
                        className="
                            ml-2
                            text-violet-400
                            hover:text-violet-300
                            font-medium
                        "
                    >
                        Login
                    </button>

                </div>

            </div>

        </div>
    );
}