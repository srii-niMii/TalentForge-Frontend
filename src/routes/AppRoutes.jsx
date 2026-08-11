import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import RecruiterDashboard from "../pages/recruiter/Dashboard";
import CreateJob from "../pages/recruiter/CreateJob";
import EditJob from "../pages/recruiter/EditJob";
import Applicants from "../pages/recruiter/Applicants";
import CandidateProfile from "../pages/recruiter/CandidateProfile";
import CandidateDashboard from "../pages/candidate/CandidateDashboard";
import CandidateRegister from "../pages/auth/CandidateRegister";
import RecruiterRegister from "../pages/auth/RecruiterRegister";
import Register from "../pages/auth/Register";
import CandidateJobs from "../pages/candidate/CandidateJobs";
import JobDetails from "../pages/candidate/JobDetails";
import MyApplications from "../pages/candidate/MyApplications";

export default function AppRoutes() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Navigate to="/register" />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />


                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register/candidate"
                    element={<CandidateRegister />}
                />

                <Route
                    path="/candidate/jobs"
                    element={<CandidateJobs />}
                />

                <Route
                    path="/candidate/jobs/:id"
                    element={<JobDetails />}
                />

                <Route
                    path="/candidate/applications"
                    element={<MyApplications />}
                />

                <Route
                    path="/register/recruiter"
                    element={<RecruiterRegister />}
                />

                <Route
                    path="/recruiter/dashboard"
                    element={<RecruiterDashboard />}
                />

                <Route
                    path="/recruiter/create-job"
                    element={<CreateJob />}
                />

                <Route
                    path="/recruiter/edit-job/:id"
                    element={<EditJob />}
                />


                <Route

                    path="/recruiter/jobs/:jobId/applicants"

                    element={<Applicants />}

                />

                <Route
                    path="/recruiter/candidate/:id"
                    element={<CandidateProfile />}
                />

                <Route
                    path="/candidate/dashboard"
                    element={
                        <CandidateDashboard />
                    }
                />
            </Routes>

        </BrowserRouter>
    );
}