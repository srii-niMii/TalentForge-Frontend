import { useState } from "react";
import { loginUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await loginUser({
                email,
                password
            });


            login(response);

            if (response.role === "RECRUITER") {
                navigate("/recruiter/dashboard");

            }
            else if (response.role === "CANDIDATE") {

                navigate("/candidate/jobs");

            }
            else if (response.role === "ADMIN") {

                navigate("/admin/dashboard");

            }

        }
        catch (error) {

            setError("Invalid email or password");

        }
        finally {

            setLoading(false);

        }
    };

    return (

        <div
            className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-gray-100
            px-4
            "
        >


            <div
                className="
                bg-white
                w-full
                max-w-md
                rounded-2xl
                shadow-xl
                p-8
                "
            >


                <div className="text-center mb-8">


                    <h1
                        className="
                        text-3xl
                        font-bold
                        text-blue-600
                        "
                    >
                        TalentForge
                    </h1>


                    <p
                        className="
                        text-gray-500
                        mt-2
                        "
                    >
                        Sign in to manage your recruitment workflow
                    </p>


                </div>



                {
                    error && (

                        <div
                            className="
                            bg-red-100
                            text-red-600
                            p-3
                            rounded-lg
                            mb-4
                            text-sm
                            "
                        >
                            {error}
                        </div>

                    )
                }



                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >


                    <div>

                        <label
                            className="
                            text-sm
                            font-medium
                            text-gray-700
                            "
                        >
                            Email
                        </label>


                        <input

                            type="email"

                            placeholder="you@example.com"

                            value={email}

                            onChange={(e) =>
                                setEmail(e.target.value)
                            }

                            className="
                            mt-2
                            w-full
                            border
                            rounded-lg
                            px-4
                            py-3
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            "

                            required

                        />

                    </div>



                    <div>


                        <label
                            className="
                            text-sm
                            font-medium
                            text-gray-700
                            "
                        >
                            Password
                        </label>


                        <input

                            type="password"

                            placeholder="••••••••"

                            value={password}

                            onChange={(e) =>
                                setPassword(e.target.value)
                            }

                            className="
                            mt-2
                            w-full
                            border
                            rounded-lg
                            px-4
                            py-3
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            "

                            required

                        />


                    </div>




                    <button

                        type="submit"

                        disabled={loading}

                        className="
                        w-full
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        py-3
                        rounded-lg
                        font-semibold
                        transition
                        disabled:opacity-50
                        "

                    >

                        {
                            loading
                                ? "Signing in..."
                                : "Login"
                        }


                    </button>



                </form>

                <p
                    className="
                    text-center
                    text-sm
                    text-gray-500
                    mt-6
                    "
                >

                    Don't have an account?

                    <span
                        className="
                        text-blue-600
                        ml-1
                        cursor-pointer
                        "
                    >
                        Register
                    </span>

                </p>


            </div>


        </div>

    );
}