import { Link } from "react-router-dom";
import {
    FaYoutube,
    FaFacebookF,
    FaTelegramPlane,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const navItems = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT" },
    { to: "/publications", label: "PUBLICATIONS" },
    { to: "/courses", label: "COURSES" },
    { to: "/contact", label: "GET IN TOUCH" },
];

const socialLinks = [
    {
        id: 1,
        icon: <FaYoutube size={20} />,
        url: "https://youtube.com/yourchannel",
        label: "YouTube",
    },
    {
        id: 2,
        icon: <FaFacebookF size={20} />,
        url: "https://facebook.com/yourpage",
        label: "Facebook",
    },
    {
        id: 3,
        icon: <FaTelegramPlane size={20} />,
        url: "https://t.me/yourhandle",
        label: "Telegram",
    },
    {
        id: 4,
        icon: <FaInstagram size={20} />,
        url: "https://instagram.com/yourprofile",
        label: "Instagram",
    },
    {
        id: 5,
        icon: <FaLinkedinIn size={20} />,
        url: "https://linkedin.com/in/yourprofile",
        label: "LinkedIn",
    },
];

const Footer = () => {
    return (
        <footer className="bg-[#0B0B0B] text-[#F8F5E3] py-14 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Top flex with logo */}
                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10 mb-10">

                    {/* Social icons for mobile top */}
                    <div className="flex gap-6 md:hidden">
                        {socialLinks.map(({ id, icon, url, label }) => (
                            <a
                                key={id}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-[#D4AF37] hover:text-[#E8C97E] transition duration-300"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                    {/* About */}
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <img
                                className="h-12 w-auto"
                                src="/Sajjad-Akbar-Logo-Dark.png"
                                alt="Sajjad Akbar Logo"
                            />
                            <span className="font-serif text-2xl font-bold text-[#D4AF37] select-none">
                                Sajjad Akbar
                            </span>
                        </div>
                        <p className="text-[#CFC9A9] leading-relaxed font-serif text-sm">
                            Sharing timeless wisdom rooted in Quran and Sunnah, inspiring
                            purposeful living in the modern world.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-xl font-semibold mb-4 text-[#E8C97E]">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 font-serif text-sm">
                            {navItems.map(({ to, label }) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        className="text-[#F8F5E3] hover:text-[#D4AF37] transition duration-300"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media (hidden on mobile, shown here) */}
                    <div className="hidden md:flex flex-col">
                        <h3 className="font-serif text-xl font-semibold mb-4 text-[#E8C97E]">
                            Connect With Me
                        </h3>
                        <div className="flex gap-6 justify-start">
                            {socialLinks.map(({ id, icon, url, label }) => (
                                <a
                                    key={id}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="text-[#D4AF37] hover:text-[#E8C97E] transition duration-300"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 border-t border-[#2A2A2A] pt-6 text-center text-[#CFC9A9] font-serif text-sm select-none">
                    &copy; {new Date().getFullYear()} Sajjad Akbar. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;