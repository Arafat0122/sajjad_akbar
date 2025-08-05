import {
    FaChalkboardTeacher,
    FaHandsHelping,
    FaCompass,
    FaGift,
    FaUsers,
} from "react-icons/fa";

const services = [
    {
        id: 1,
        title: "Teaching",
        icon: <FaChalkboardTeacher size={28} className="text-[#D4AF37]" />,
        description:
            "Delivering insightful lessons rooted in Quran and Sunnah for all ages.",
    },
    {
        id: 2,
        title: "Counselling",
        icon: <FaHandsHelping size={28} className="text-[#D4AF37]" />,
        description:
            "Providing spiritual and personal guidance to help navigate life's challenges.",
    },
    {
        id: 3,
        title: "Guidance",
        icon: <FaCompass size={28} className="text-[#D4AF37]" />,
        description:
            "Offering direction and support in faith and worldly matters.",
    },
    {
        id: 4,
        title: "Charities",
        icon: <FaGift size={28} className="text-[#D4AF37]" />,
        description:
            "Engaging in and promoting charitable causes to support communities.",
    },
    {
        id: 5,
        title: "Organisations",
        icon: <FaUsers size={28} className="text-[#D4AF37]" />,
        description:
            "Collaborating with groups to foster growth and outreach.",
    },
    {
        id: 6,
        title: "Workshops",
        icon: <FaChalkboardTeacher size={28} className="text-[#D4AF37]" />,
        description: "Conducting interactive workshops to deepen understanding and skills.",
    }
];

const WhatIDo = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                {/* Gold Accent Line */}
                <div className="h-1 w-48 mx-auto mb-12 bg-gradient-to-r from-[#D4AF37] via-[#E8C97E] to-[#D4AF37] rounded-full shadow-[0_0_20px_#D4AF3770]" />

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-serif font-extrabold mb-14 drop-shadow-xl">
                    What I Do
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map(({ id, title, icon, description }) => (
                        <div
                            key={id}
                            className="bg-[#141414] p-8 rounded-3xl shadow-lg border border-[#2A2A2A] hover:shadow-[#D4AF3760] transition-shadow duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="mb-4">{icon}</div>
                                <h3 className="text-2xl font-serif font-semibold text-[#E8C97E] mb-3">
                                    {title}
                                </h3>
                                <p className="text-[#F8F5E3] leading-relaxed mb-6 font-serif italic">
                                    {description}
                                </p>
                            </div>

                            <button
                                type="button"
                                className="self-start px-6 py-2 bg-[#D4AF37] hover:bg-[#E8C97E] text-black font-semibold rounded-full shadow-md transition duration-300"
                                aria-label={`Learn more about ${title}`}
                            >
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;