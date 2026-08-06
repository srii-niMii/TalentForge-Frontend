import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { getApplicants } from "../../services/candidateService";


export default function Applicants() {


    const { jobId } = useParams();


    const [candidates, setCandidates] = useState([]);


    useEffect(() => {

        loadApplicants();

    }, []);



    const loadApplicants = async () => {

        try {

            const data = await getApplicants(jobId);

            setCandidates(data);

        }
        catch(error){

            console.log(error);

        }

    };



    return (

        <DashboardLayout>


            <div>


                <div
                    className="
                    mb-8
                    "
                >

                    <p
                        className="
                        text-violet-400
                        uppercase
                        tracking-widest
                        text-sm
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
                        Applicants
                    </h1>


                    <p
                        className="
                        text-slate-400
                        mt-2
                        "
                    >
                        Review candidates for this job opening
                    </p>

                </div>




                {
                    candidates.length === 0 ?


                    (

                        <div
                            className="
                            bg-[#111827]
                            rounded-xl
                            p-10
                            text-center
                            text-slate-400
                            "
                        >

                            No applicants found

                        </div>


                    )


                    :


                    (

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
                        candidates.map(candidate => (


                            <div

                                key={candidate.id}

                                className="
                                bg-[#1e1e2c]
                                rounded-2xl
                                p-6
                                shadow-lg
                                hover:-translate-y-1
                                transition
                                "

                            >


                                <h2
                                    className="
                                    text-xl
                                    font-semibold
                                    text-white
                                    "
                                >

                                    {candidate.name}

                                </h2>


                                <p
                                    className="
                                    text-slate-400
                                    mt-2
                                    "
                                >

                                    {candidate.email}

                                </p>



                                <p
                                    className="
                                    text-slate-400
                                    "
                                >

                                    {candidate.phone}

                                </p>



                                <div
                                    className="
                                    mt-5
                                    "
                                >

                                    <span
                                        className="
                                        bg-violet-500/20
                                        text-violet-400
                                        px-3
                                        py-1
                                        rounded-full
                                        text-sm
                                        "
                                    >

                                        {candidate.currentStage}

                                    </span>

                                </div>



                                {
                                    candidate.resumeUrl &&

                                    (

                                    <a

                                        href={candidate.resumeUrl}

                                        target="_blank"

                                        className="
                                        block
                                        text-center
                                        mt-6
                                        bg-violet-600
                                        hover:bg-violet-700
                                        text-white
                                        py-2
                                        rounded-xl
                                        "

                                    >

                                        View Resume

                                    </a>

                                    )

                                }



                            </div>


                        ))
                    }


                    </div>

                    )

                }


            </div>


        </DashboardLayout>

    );

}