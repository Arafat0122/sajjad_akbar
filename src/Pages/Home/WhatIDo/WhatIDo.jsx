import Button from "@/Common/Button/Button";
import { ArrowRight } from "lucide-react";
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
        icon: <FaChalkboardTeacher className="text-3xl text-white bg-primary h-[50px] w-[50px] p-[8px] rounded-md"/>,
        description:
            "Delivering insightful lessons rooted in Quran and Sunnah for all ages.",
    },
    {
        id: 2,
        title: "Counselling",
        icon: <FaHandsHelping className="text-3xl text-white bg-primary h-[50px] w-[50px] p-[8px] rounded-md" />,
        description:
            "Providing spiritual and personal guidance to help navigate life's challenges.",
    },
    {
        id: 3,
        title: "Guidance",
        icon: <FaCompass className="text-3xl text-white bg-primary h-[50px] w-[50px] p-[8px] rounded-md" />,
        description:
            "Offering direction and support in faith and worldly matters.",
    },
    {
        id: 4,
        title: "Charities",
        icon: <FaGift className="text-3xl text-white bg-primary h-[50px] w-[50px] p-[8px] rounded-md" />,
        description:
            "Engaging in and promoting charitable causes to support communities.",
    },
    {
        id: 5,
        title: "Organisations",
        icon: <FaUsers size={28} className="text-3xl text-white bg-primary h-[50px] w-[50px] p-[8px] rounded-md"/>,
        description:
            "Collaborating with groups to foster growth and outreach.",
    },
    {
        id: 6,
        title: "Workshops",
        icon: <FaChalkboardTeacher className="text-3xl text-white bg-primary h-[50px] w-[50px] p-[8px] rounded-md" />,
        description: "Conducting interactive workshops to deepen understanding and skills.",
    }
];

const WhatIDo = () => {
    return (
        <section className="bg-[#0B0B0B]  min-h-screen text-white pt-20 px-6 ">
            <div className="mx-auto text-center max-w-7xl">
                {/* Gold Accent Line */}
              

                {/* Title */}
                <h2 className="font-serif text-3xl font-extrabold sm:text-4xl mb-14 drop-shadow-xl">
                    What I Do
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map(({ id, title, icon, description }) => (
                        <div
                            key={id}
                            className="bg-[#141414] p-8 rounded-3xl shadow-lg border border-[#2A2A2A] hover:shadow-[#D4AF3760] transition-shadow duration-300 flex flex-col justify-between text-left"
                        >
                            <div>
                                <div className="flex items-center gap-4 mb-4">{icon}
                                     <h3 className="text-2xl font-serif font-semibold text-[#E8C97E] mb-3">
                                    {title}
                                </h3>
                                </div>
                               
                                <p className="text-[#F8F5E3] leading-relaxed mb-6 font-serif italic">
                                    {description}
                                </p>
                            </div>

                            <div className="flex">
                                <Button text="Learn More " icon={ArrowRight} className="!py-2 border border-primary bg-primary"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;