import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { getApplicants } from "../../services/candidateService";
import Pipeline from "../../components/recruiter/Pipeline";


export default function Applicants() {


    const { jobId } = useParams();


    const [candidates, setCandidates] = useState([]);



    useEffect(() => {

        loadApplicants();

    }, [jobId]);



    const loadApplicants = async () => {

        try {

            const data = await getApplicants(jobId);

            setCandidates(data);

        }
        catch(error) {

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
                        Applicants Pipeline
                    </h1>



                    <p
                        className="
                        text-slate-400
                        mt-2
                        "
                    >
                        Manage candidates through your hiring workflow
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

                        <Pipeline

                            candidates={candidates}

                            onRefresh={loadApplicants}

                        />

                    )

                }



            </div>


        </DashboardLayout>

    );

}