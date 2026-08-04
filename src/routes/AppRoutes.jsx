import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import RecruiterDashboard from "../pages/recruiter/Dashboard";
import CreateJob from "../pages/recruiter/CreateJob";

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

            </Routes>

        </BrowserRouter>
    );
}