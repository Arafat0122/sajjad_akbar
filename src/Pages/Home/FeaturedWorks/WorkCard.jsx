import { FaBook, FaPodcast, FaCalendarAlt, FaPenFancy } from "react-icons/fa";

const iconMap = {
    "📚 Book": <FaBook className="text-[#D4AF37] text-3xl" />,
    "📝 Article": <FaPenFancy className="text-[#D4AF37] text-3xl" />,
    "📅 Event": <FaCalendarAlt className="text-[#D4AF37] text-3xl" />,
    "🎧 Podcast": <FaPodcast className="text-[#D4AF37] text-3xl" />,
};

const WorkCard = ({ title, description, category }) => {
    return (
        <div className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-6 hover:shadow-[0_0_20px_#D4AF3760] transition-all duration-300 flex flex-col gap-4">
            <div>{iconMap[category]}</div>

            <h3 className="text-xl font-semibold text-[#F8F5E3]">{title}</h3>
            <p className="text-sm text-gray-400 flex-grow">{description}</p>

            <span className="text-sm font-medium text-[#E8C97E]">{category}</span>
        </div>
    );
};

export default WorkCard;