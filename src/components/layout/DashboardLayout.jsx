import Navbar from "./Navbar";

export default function DashboardLayout({ children }) {

    return (

        <div
            className="
            min-h-screen
            bg-[#0B1220]
            text-slate-100
            "
        >

            <Navbar />


            <main
                className="
                p-4
                md:p-8
                "
            >

                {children}

            </main>


        </div>

    );

}