import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {

    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (

        <nav
            className="
                bg-[#0B1220]
                shadow-sm
                px-6
                py-4
                flex
                justify-between
                items-center
            "
        >

            <h1
                className="
                    text-2xl
                    font-bold
                    text-violet-600
                    cursor-pointer
                "
                onClick={() => {

                    if (user?.role === "CANDIDATE") {
                        navigate("/candidate/jobs");
                    }
                    else if (user?.role === "RECRUITER") {
                        navigate("/recruiter/dashboard");
                    }

                }}
            >
                TalentForge
            </h1>


            <div className="
                flex
                items-center
                gap-3
            ">

                {user?.role === "CANDIDATE" && (

                    <>
                        <button
                            onClick={() =>
                                navigate("/candidate/jobs")
                            }
                            className="
                                text-slate-300
                                hover:text-white
                                px-4
                                py-2
                                rounded-lg
                                transition
                            "
                        >
                            Jobs
                        </button>


                        <button
                            onClick={() =>
                                navigate(
                                    "/candidate/applications"
                                )
                            }
                            className="
                                text-slate-300
                                hover:text-white
                                px-4
                                py-2
                                rounded-lg
                                transition
                            "
                        >
                            My Applications
                        </button>
                    </>

                )}


                <button
                    onClick={handleLogout}
                    style={{ cursor: "pointer" }}
                    className="
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        px-4
                        py-2
                        rounded-lg
                        transition
                    "
                >
                    Logout
                </button>
            </div>
        </nav>

    );
}