import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import RecruiterDashboard from "../pages/recruiter/Dashboard";
import CreateJob from "../pages/recruiter/CreateJob";
import EditJob from "../pages/recruiter/EditJob";
import Applicants from "../pages/recruiter/Applicants";

export default function AppRoutes() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/login"
                    element={<Login />}
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
             </Routes>

        </BrowserRouter>
    );
}