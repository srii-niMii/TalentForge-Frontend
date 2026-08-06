export default function Navbar() {

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


            <button
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


        </nav>

    );

}