import Button from "@/Common/Button/Button";
import { ArrowRight } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Learning Platform",
        img: "https://static.vecteezy.com/system/resources/thumbnails/057/740/548/small/a-dramatic-ramadan-composition-with-a-silhouette-of-a-grand-mosque-photo.jpg",
        description:
            "An accessible platform to learn authentic Islamic knowledge with ease.",
    },
    {
        id: 2,
        title: "Lighthouse Mentoring",
        img: "https://orbitshub.com/wp-content/uploads/2023/10/where-is-the-tallest-lighthouse-in-the-world.jpg",
        description:
            "Guiding individuals through faith and life with wisdom and mentorship.",
    },
    {
        id: 3,
        title: "Books",
        img: "https://img.freepik.com/free-photo/preparation-ramadan-tradition_23-2151925207.jpg?w=360",
        description:
            "Providing Islamic books and resources to deepen knowledge and practice.",
    },
    {
        id: 4,
        title: "Onsite Courses",
        img: "https://moddakiracademy.com/wp-content/uploads/2024/11/What-Are-the-Benefits-of-Islamic-Studies-for-Kids-Online.jpeg",
        description:
            "Engaging onsite courses to strengthen learning through direct interaction.",
    },
    {
        id: 5,
        title: "Our Channel",
        img: "https://cdn.britannica.com/44/102944-050-18D72EC5/Domes-mosque-Malaysia.jpg",
        description:
            "Spreading knowledge through our digital channel with authentic content.",
    },
    {
        id: 6,
        title: "The Visionaries",
        img: "https://studioarabiya.com/wp-content/uploads/2024/09/2-6-1024x683.jpg",
        description:
            "Empowering visionaries to lead with Islamic values and positive change.",
    },
];

const WhatIDo = () => {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto text-center max-w-7xl">
                {/* Title */}
                <h2 className="font-serif text-3xl font-extrabold sm:text-4xl mb-14">
                    What I Do
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map(({ id, title, img, description }) => (
                        <div
                            key={id}
                            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
                        >
                            {/* Image */}
                            <img
                                src={img}
                                alt={title}
                                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Overlay content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    {title}
                                </h3>
                                <p className="text-sm text-gray-200 mb-4">{description}</p>
                                <Button
                                    text="Learn More"
                                    icon={ArrowRight}
                                    className="!py-2 border border-white bg-white/10 hover:bg-white/20 text-white w-fit ml-auto"
                                />
                            </div>

                            {/* Title (default visible at bottom) */}
                            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-lg font-semibold py-3 px-4 group-hover:opacity-0 transition-opacity duration-500">
                                {title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;