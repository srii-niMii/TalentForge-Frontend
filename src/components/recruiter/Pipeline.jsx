import { updateCandidateStage } from "../../services/candidateService";

const stages = [
    "APPLIED",
    "SCREENING",
    "INTERVIEW",
    "SELECTED",
    "REJECTED"
];

export default function Pipeline({
    candidates,
    onRefresh,
    setSelectedResume
}) {

    const moveCandidate = async (candidate, stage) => {

        try {

            await updateCandidateStage(candidate.id, {
                stage,
                changedBy: "Recruiter",
                note: "Stage updated from pipeline"
            });

            onRefresh();

        }
        catch (error) {

            console.log(error);

        }

    };

    return (

        <div
            className="
            grid
            grid-cols-1
            md:grid-cols-5
            gap-5
            "
        >

            {
                stages.map(stage => (

                    <div
                        key={stage}
                        className="
                        bg-[#111827]
                        rounded-xl
                        p-4
                        min-h-[400px]
                        "
                    >

                        <h2
                            className="
                            text-white
                            font-semibold
                            mb-4
                            "
                        >
                            {stage}
                        </h2>

                        {
                            candidates
                                .filter(
                                    candidate =>
                                        candidate.currentStage === stage
                                )
                                .map(candidate => (

                                    <div
                                        key={candidate.id}
                                        className="
                                        bg-[#1e1e2c]
                                        p-4
                                        rounded-xl
                                        mb-3
                                        "
                                    >

                                        <h3
                                            className="
                                            text-white
                                            font-medium
                                            "
                                        >
                                            {candidate.name}
                                        </h3>

                                        <p
                                            className="
                                            text-sm
                                            text-gray-400
                                            "
                                        >
                                            {candidate.email}
                                        </p>

                                        <p
                                            className="
                                            text-sm
                                            text-gray-500
                                            mb-3
                                            "
                                        >
                                            {candidate.phone}
                                        </p>

                                        <select
                                            className="
                                            w-full
                                            bg-gray-800
                                            text-white
                                            rounded-lg
                                            p-2
                                            "
                                            value={candidate.currentStage}
                                            onChange={(e) =>
                                                moveCandidate(
                                                    candidate,
                                                    e.target.value
                                                )
                                            }
                                        >

                                            {
                                                stages.map(item => (

                                                    <option
                                                        key={item}
                                                        value={item}
                                                    >
                                                        {item}
                                                    </option>

                                                ))
                                            }

                                        </select>

                                        {
                                            candidate.resumeUrl && (

                                                <button
                                                    onClick={() =>
                                                        setSelectedResume({
                                                            url: candidate.resumeUrl,
                                                            name: candidate.name
                                                        })
                                                    }
                                                    className="
                                                    w-full
                                                    mt-3
                                                    bg-violet-600
                                                    hover:bg-violet-700
                                                    text-white
                                                    py-2
                                                    rounded-lg
                                                    transition
                                                    "
                                                >
                                                    📄 Preview Resume
                                                </button>

                                            )
                                        }

                                    </div>

                                ))
                        }

                    </div>

                ))
            }

        </div>

    );

}