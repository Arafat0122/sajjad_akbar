import {
    FaBookOpen,
    FaChalkboardTeacher,
    FaBrain,
    FaLightbulb,
    FaCode,
    FaInfinity,
    FaClock,
    FaMoneyBillAlt,
    FaCalendarAlt,
} from "react-icons/fa";
import { FaBook } from "react-icons/fa6";

const courseList = [
    {
        title: "Islamic Philosophy",
        icon: <FaLightbulb size={24} className="text-[#D4AF37]" />,
        image: "https://www.almahdi.edu/wp-content/uploads/2020/06/sina.jpg",
        description:
            "Delve into foundational concepts of Islamic metaphysics, epistemology, and logic. Analyze thinkers like Al-Ghazali and Ibn Sina.",
        duration: "8 weeks",
        fee: "$49",
        startDate: "August 15, 2025",
    },
    {
        title: "Modern Muslim Identity",
        icon: <FaBrain size={24} className="text-[#D4AF37]" />,
        image: "https://miro.medium.com/v2/resize:fit:1400/0*pKNwDej8WGdePmqf",
        description:
            "Examine contemporary challenges faced by Muslims globally, including secularism, modernity, and cultural integration.",
        duration: "6 weeks",
        fee: "$39",
        startDate: "September 1, 2025",
    },
    {
        title: "Comparative Theology",
        icon: <FaBookOpen size={24} className="text-[#D4AF37]" />,
        image: "https://www.allahsword.com/images/books/comparative_religion/comparative_religion_main.png",
        description:
            "Study world religions and their philosophical intersections with Islam. Gain tools for respectful interfaith dialogue.",
        duration: "10 weeks",
        fee: "$59",
        startDate: "October 1, 2025",
    },
    {
        title: "Tarbiyah",
        icon: <FaChalkboardTeacher size={24} className="text-[#D4AF37]" />,
        image: "https://media.istockphoto.com/id/1151574314/photo/muslim-man-reading-koran.jpg?s=612x612&w=0&k=20&c=TWqOqGLLeeZkDeBr3G51eLiGTwBJmQ3dl-xbAI0-bPE=",
        description:
            "Practical training on self-discipline, goal setting, and spiritual purification through Qur'anic guidance.",
        duration: "4 weeks",
        fee: "$29",
        startDate: "August 25, 2025",
    },
    {
        title: "Ethics in Islamic Tradition",
        icon: <FaInfinity size={24} className="text-[#D4AF37]" />,
        image: "https://i0.wp.com/desiredmomin.com/wp-content/uploads/2025/06/Islamic-scholars-shaping-the-rules-of-warfare-ethics.webp?resize=1000%2C571&ssl=1",
        description:
            "Explore ethical frameworks in the Qur’an and Hadith. Learn how moral reasoning shapes Muslim behavior and law.",
        duration: "5 weeks",
        fee: "$35",
        startDate: "September 10, 2025",
    },
    {
        title: "Research",
        icon: <FaCode size={24} className="text-[#D4AF37]" />,
        image: "https://islamicportal.co.uk/wp-content/uploads/2018/03/General-books.jpg",
        description:
            "Master research methodologies, argument structure, and critical thinking aligned with Islamic scholarship.",
        duration: "6 weeks",
        fee: "$45",
        startDate: "September 20, 2025",
    },
];

const Courses = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#F8F5E3] text-center mb-16 drop-shadow-xl">
                    Courses
                </h2>

                {/* Course Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {courseList.map((course, index) => (
                        <div
                            key={index}
                            className="bg-[#141414] rounded-2xl overflow-hidden border border-[#2A2A2A] hover:shadow-[0_0_25px_#D4AF3780] transition-shadow duration-300"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6 flex flex-col gap-3 h-full">
                                {/* Header */}
                                <div className="flex items-center gap-3">
                                    {course.icon}
                                    <h3 className="text-xl font-serif font-bold text-[#E8C97E]">
                                        {course.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-[#F8F5E3] font-serif text-base leading-relaxed">
                                    {course.description}
                                </p>

                                {/* Info Line */}
                                <div className="text-sm text-[#E0DFC5] space-y-1 font-serif">
                                    <div className="flex items-center gap-2">
                                        <FaClock /> <span>Duration: {course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaMoneyBillAlt /> <span>Fee: {course.fee}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt /> <span>Start: {course.startDate}</span>
                                    </div>
                                </div>

                                {/* WhatsApp Button */}
                                <a
                                    href={`https://wa.me/201554883928?text=Salam! I want to book the course: ${encodeURIComponent(
                                        course.title
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block text-center px-4 py-2 bg-[#D4AF37] text-black rounded-full font-semibold hover:bg-[#E8C97E] transition-colors duration-200"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;