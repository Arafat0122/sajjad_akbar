import { Link } from "react-router-dom";
import {
    FaYoutube,
    FaFacebookF,
    FaTelegramPlane,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/publications", label: "Publications" },
    { to: "/courses", label: "Courses" },
    { to: "/contact", label: "Get in Touch" },
];

const socialLinks = [
    { id: 1, icon: <FaYoutube size={20} />, url: "https://youtube.com/yourchannel", label: "YouTube" },
    { id: 2, icon: <FaFacebookF size={20} />, url: "https://facebook.com/yourpage", label: "Facebook" },
    { id: 3, icon: <FaTelegramPlane size={20} />, url: "https://t.me/yourhandle", label: "Telegram" },
    { id: 4, icon: <FaInstagram size={20} />, url: "https://instagram.com/yourprofile", label: "Instagram" },
    { id: 5, icon: <FaLinkedinIn size={20} />, url: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
];

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#2b2b2b] to-[#141414] text-gray-300 py-14 px-6 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Main Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 text-center md:text-left">

                    {/* Brand / About */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                className="h-12 w-auto"
                                src="/Sajjad_Akbar_Logo.png"
                                alt="Sajjad Akbar Logo"
                            />
                            <span className="text-2xl font-bold text-white tracking-wide">
                                Sajjad Akbar
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
                            Sharing timeless wisdom rooted in Quran and Sunnah, inspiring
                            purposeful living in today’s modern world.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {navItems.map(({ to, label }) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        className="text-gray-400 hover:text-blue-300 transition-colors duration-300"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
                            Connect With Me
                        </h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            {socialLinks.map(({ id, icon, url, label }) => (
                                <a
                                    key={id}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="p-3 bg-[#222222] rounded-full text-gray-400 hover:text-white hover:bg-blue-300 hover:scale-110 transition-all duration-300"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-12 border-t border-[#2F2F2F] pt-6 text-center text-gray-500 text-sm space-y-2">
                    <p>
                        &copy; {new Date().getFullYear()} Sajjad Akbar. All rights reserved.
                    </p>

                    {/* Developer Credit */}
                    <p>
                        Developed by{" "}
                        <a
                            href="https://codesraft.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:text-white font-medium transition-colors duration-300"
                        >
                            CodesRaft
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;