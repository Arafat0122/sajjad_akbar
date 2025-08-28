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
        <footer className="bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] text-gray-300 py-14 px-6 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

                    {/* Brand / About */}
                    <div>
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
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {navItems.map(({ to, label }) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        className="text-gray-400 hover:text-[#FFD369] transition-colors duration-300"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
                            Connect With Me
                        </h3>
                        <div className="flex gap-5">
                            {socialLinks.map(({ id, icon, url, label }) => (
                                <a
                                    key={id}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="p-3 bg-[#222222] rounded-full text-gray-400 hover:text-white hover:bg-[#FFD369] hover:scale-110 transition-all duration-300"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider + Copyright */}
                <div className="mt-12 border-t border-[#2F2F2F] pt-6 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Sajjad Akbar. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;