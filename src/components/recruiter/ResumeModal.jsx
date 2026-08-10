export default function ResumeModal({
    resume,
    onClose
}) {

    if (!resume) return null;


    return (

        <div
            className="
            fixed
            inset-0
            bg-black/70
            flex
            items-center
            justify-center
            z-50
            p-4
            "
        >

            <div
                className="
                bg-[#0B1220]
                w-full
                max-w-5xl
                h-[90vh]
                rounded-2xl
                shadow-2xl
                flex
                flex-col
                overflow-hidden
                "
            >


                <div
                    className="
                    flex
                    items-center
                    justify-between
                    p-5
                    border-b
                    border-gray-700
                    "
                >

                    <div>

                        <h2
                            className="
                            text-xl
                            font-semibold
                            text-white
                            "
                        >
                            Resume Preview
                        </h2>


                        <p
                            className="
                            text-gray-400
                            text-sm
                            "
                        >
                            {resume.name}
                        </p>

                    </div>


                    <button

                        onClick={onClose}

                        className="
                        text-gray-400
                        hover:text-white
                        text-2xl
                        "
                    >

                        ✕

                    </button>


                </div>


                <div
                    className="
                    flex-1
                    bg-gray-900
                    "
                >

                    <iframe

                        src={resume.url}

                        title="Resume Preview"

                        className="
                        w-full
                        h-full
                        "
                    />

                </div>



                <div
                    className="
                    flex
                    justify-end
                    gap-3
                    p-5
                    border-t
                    border-gray-700
                    "
                >

                    <a

                        href={resume.url}

                        target="_blank"

                        rel="noreferrer"

                        className="
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        px-5
                        py-2
                        rounded-lg
                        "
                    >

                        Open New Tab

                    </a>



                    <a

                        href={resume.url}

                        download

                        className="
                        bg-green-600
                        hover:bg-green-700
                        text-white
                        px-5
                        py-2
                        rounded-lg
                        "
                    >

                        Download

                    </a>



                    <button

                        onClick={onClose}

                        className="
                        bg-gray-700
                        hover:bg-gray-800
                        text-white
                        px-5
                        py-2
                        rounded-lg
                        "
                    >

                        Close

                    </button>


                </div>


            </div>


        </div>

    );

}