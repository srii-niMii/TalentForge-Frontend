import axiosInstance from "../api/axios";

export const getApplicants = async (jobId) => {

    const response = await axiosInstance.get(
        `/candidates/jobs/${jobId}/applicants`
    );
    return response.data;
};

export const updateCandidateStage = async (id, stageData) => {

    const response = await axiosInstance.patch(
        `/candidates/${id}/stage`,
        stageData
    );

    return response.data;
};

    export const getCandidate = async (id) => {

    const response = await axiosInstance.get(
        `/candidates/${id}`
    );

    return response.data;



};