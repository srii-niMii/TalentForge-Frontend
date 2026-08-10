import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";

export default function RecruiterRegister() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        setError("");

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (form.password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        setLoading(true);

        try {

            await axiosInstance.post(
                "/auth/register/recruiter",
                {
                    name: form.name,
                    email: form.email,
                    password: form.password
                }
            );

            navigate("/recruiter/dashboard");

        } catch (error) {

            console.error(error);

            setError(
                error.response?.data?.message ||
                "Registration failed. Please try again."
            );

        } finally {

            setLoading(false);

        }
    };

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
                max-w-md
                bg-gray-950
                rounded-2xl
                shadow-2xl
                p-8
            ">

                <div className="text-center mb-8">

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
                        mt-2
                    ">
                        Create your recruiter account and start managing jobs.
                    </p>

                </div>

                {error && (

                    <div className="
                        bg-red-500/10
                        border
                        border-red-500/30
                        text-red-400
                        rounded-lg
                        p-3
                        mb-5
                        text-sm
                    ">
                        {error}
                    </div>

                )}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <div>

                        <label className="
                            text-white
                            font-medium
                        ">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            className="
                                mt-2
                                w-full
                                bg-gray-950
                                border
                                border-slate-700
                                text-white
                                rounded-lg
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-violet-500
                            "
                        />

                    </div>

                    <div>

                        <label className="
                            text-white
                            font-medium
                        ">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="
                                mt-2
                                w-full
                                bg-gray-950
                                border
                                border-slate-700
                                text-white
                                rounded-lg
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-violet-500
                            "
                        />

                    </div>

                    <div>

                        <label className="
                            text-white
                            font-medium
                        ">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                            className="
                                mt-2
                                w-full
                                bg-gray-950
                                border
                                border-slate-700
                                text-white
                                rounded-lg
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-violet-500
                            "
                        />

                    </div>

                    <div>

                        <label className="
                            text-white
                            font-medium
                        ">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            required
                            className="
                                mt-2
                                w-full
                                bg-gray-950
                                border
                                border-slate-700
                                text-white
                                rounded-lg
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-violet-500
                            "
                        />

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                            w-full
                            bg-violet-600
                            hover:bg-violet-700
                            disabled:opacity-50
                            text-white
                            font-semibold
                            py-3
                            rounded-xl
                            transition
                        "
                    >
                        {loading
                            ? "Creating Account..."
                            : "Create Recruiter Account"
                        }
                    </button>

                </form>

                <div className="
                    text-center
                    mt-6
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