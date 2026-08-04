import axiosInstance from "../api/axios";

export const getJobs = async () => {

    const response = await axiosInstance.get("/jobs");
    return response.data;
};


export const createJob = async (jobData) => {

    const response = await axiosInstance.post(
        "/jobs",
        jobData
    );
    return response.data;
};


export const deleteJob = async (id) => {

    const response = await axiosInstance.delete(
        `/jobs/${id}`
    );
    return response.data;
};


export const closeJob = async (id) => {

    const response = await axiosInstance.patch(
        `/jobs/${id}/close`
    );
    return response.data;
};