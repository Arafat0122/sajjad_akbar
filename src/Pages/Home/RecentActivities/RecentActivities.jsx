import React from "react";

const activities = [
    {
        id: 1,
        title: "New Workshop: Islamic Guidance",
        description: "Conducted an insightful workshop on modern Islamic guidance.",
        img: "https://resala-academy.com/wp-content/uploads/2022/11/5-pillars-of-islam.webp",
        date: "Aug 15, 2025",
    },
    {
        id: 2,
        title: "Charity Event: Helping Communities",
        description: "Participated in a charity initiative supporting local communities.",
        img: "https://www.shutterstock.com/image-vector/muslim-man-give-iftar-food-260nw-2123175854.jpg",
        date: "Aug 10, 2025",
    },
    {
        id: 3,
        title: "Publication: The Light of Faith",
        description: "Released a new publication to inspire faith and reflection.",
        img: "https://iqraonline.com/wp-content/uploads/2025/02/How-to-Strengthen-Your-Faith-in-Allah-in-Daily-Life.jpg",
        date: "Jul 28, 2025",
    },
    {
        id: 4,
        title: "Mentoring Session",
        description: "Guided young learners in a mentoring session online.",
        img: "https://www.almaghrib.org/wp-content/uploads/2023/08/secondimage.webp",
        date: "Jul 20, 2025",
    },
];

const RecentActivities = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-extrabold font-serif text-gray-900 mb-4">
                    Recent Activities
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Explore the latest events, workshops, and publications from Sajjad Akbar.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {activities.map(({ id, title, description, img, date }) => (
                    <div
                        key={id}
                        className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-pointer bg-white"
                    >
                        {/* Image */}
                        <div className="overflow-hidden rounded-t-3xl">
                            <img
                                src={img}
                                alt={title}
                                className="w-full h-60 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Static content below image */}
                        <div className="p-6">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                            <p className="text-gray-600 text-sm sm:text-base mb-2 leading-relaxed">{description}</p>
                            <span className="text-gray-400 text-xs">{date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecentActivities;