import React from "react";
import Button from "@/Common/Button/Button";

const publications = [
    {
        id: 1,
        title: "The Light of Faith",
        img: "https://seekersguidance.org/wp-content/uploads/2024/02/shutterstock_1073367659.jpg",
        description: "An insightful guide to understanding core principles of faith in modern times.",
        link: "#",
    },
    {
        id: 2,
        title: "Path to Wisdom",
        img: "https://spreadingwisdom.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-14-at-21.46.35_e7a29b94-1024x1024.jpg",
        description: "Exploring timeless wisdom from the Quran and Sunnah with practical guidance.",
        link: "#",
    },
    {
        id: 3,
        title: "Modern Mentorship",
        img: "https://www.quranicconnection.tv/wp-content/uploads/2019/02/Mentor.jpg",
        description: "How to guide and inspire the next generation through knowledge and compassion.",
        link: "#",
    },
    {
        id: 4,
        title: "Charity & Compassion",
        img: "https://www.mysalahmat.com/cdn/shop/articles/Untitled_design-27_700x.png?v=1722945386",
        description: "A look into Islamic charitable practices and their impact in communities today.",
        link: "#",
    },
];

const Publications = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-extrabold font-serif text-gray-900 mb-4">
                    Publications
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Discover our curated collection of books and writings that inspire knowledge, reflection, and growth.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {publications.map(({ id, title, img, description }) => (
                    <div
                        key={id}
                        className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
                    >
                        {/* Image */}
                        <img
                            src={img}
                            alt={title}
                            className="w-full h-80 object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                        {/* Content on hover */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h3>
                            <p className="text-gray-200 text-sm sm:text-base mb-4 leading-relaxed">{description}</p>
                            <Button text="Read More" className="!bg-[#FFD369] !text-black !py-2 !px-5 !rounded-lg !font-semibold shadow-md hover:shadow-xl transition-shadow duration-300" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Publications;
