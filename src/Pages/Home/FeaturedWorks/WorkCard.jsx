import { FaBook, FaPodcast, FaCalendarAlt, FaPenFancy } from "react-icons/fa";

const iconMap = {
    "📚 Book": <FaBook className="text-3xl text-white bg-primary h-[50px] w-[50px] p-[8px] rounded-md" />,
    "📝 Article": <FaPenFancy className="text-3xl text-white bg-primary h-[50px] w-[50px] p-[8px] rounded-md" />,
    "📅 Event": <FaCalendarAlt className="text-3xl text-white bg-primary h-[50px] w-[50px] p-[8px] rounded-md" />,
    "🎧 Podcast": <FaPodcast className="text-3xl text-white bg-primary h-[50px] w-[50px] p-[8px] rounded-md" />,
};

const WorkCard = ({ title, description, category }) => {
    return (
        <div className="bg-[#141414] border border-[#2A2A2A] rounded-md p-6 text-left flex flex-col gap-4">
            <div className="flex items-center gap-4">{iconMap[category]}
                 <h3 className="text-xl font-semibold text-[#F8F5E3]">{title}</h3>
            </div>

           
            <p className="flex-grow text-sm text-gray-400">{description}</p>

            {/* <span className="text-sm font-medium text-[#E8C97E]">{category}</span> */}
        </div>
    );
};

export default WorkCard;