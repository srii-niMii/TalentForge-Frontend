import axiosInstance from "../api/axios";


export const getApplicants = async (jobId) => {

    const response = await axiosInstance.get(
        `/candidates/jobs/${jobId}/applicants`
    );


    return response.data;

};