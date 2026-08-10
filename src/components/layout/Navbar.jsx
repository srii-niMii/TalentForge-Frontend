import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

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
                "
            >
                TalentForge
            </h1>

            <span className="
                bg-red-500
                hover:bg-red-600
                text-white
                px-4
                py-2
                rounded-lg
                transition ">
                <button onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
                    Logout
                </button>
            </span>


        </nav>

    );

}