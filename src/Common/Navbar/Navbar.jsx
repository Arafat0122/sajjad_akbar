import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    const navItems = [
        { to: "/", label: "HOME" },
        { to: "/about", label: "ABOUT" },
        { to: "/publications", label: "PUBLICATIONS" },
        { to: "/courses", label: "COURSES" },
        { to: "/contact", label: "GET IN TOUCH" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const activeClass = "text-blue-200 font-semibold border-b-2 border-white";
    const inactiveClass = "text-white hover:text-blue-100 transition";

    return (
        <nav
            className={`fixed w-full z-50 transition-colors duration-500 ${scrolled
                ? "bg-[#333333b6] text-white shadow-md"
                : "backdrop-blur bg-transparent text-white"
                }`}
        >
            <div className="flex items-center justify-around">
                {/* Logo */}
                <NavLink to="/" className="flex items-center h-full">
                    <img
                        className="h-20 w-auto"
                        src="/Sajjad_Akbar_Logo.png"
                        alt="Sajjad Akbar Logo"
                    />
                </NavLink>

                <div>
                    {/* Top Section */}
                    <div className="max-w-7xl px-6 md:px-12 flex justify-end items-center h-10">
                        {/* Right: Flag, Search, Bank */}
                        <div className="flex items-center space-x-3">
                            <img
                                src="https://cdn.britannica.com/67/6267-050-8A26DFEE/Flag-Bangladesh.jpg"
                                alt="Bangladesh"
                                className="h-5 w-7"
                            />
                            
                            <NavLink
                                to="/bank"
                                className="ml-2 px-3 py-1 border border-white rounded hover:bg-white hover:text-blue-600 transition"
                            >
                                Bank Account
                            </NavLink>
                            <FiSearch className="text-white text-lg cursor-pointer hover:text-blue-200" />
                        </div>
                    </div>

                    <hr className="border-gray-400/30" />

                    {/* Bottom Section */}
                    <div className="max-w-7xl px-6 md:px-12 flex justify-end items-center h-10">
                        {/* Desktop Menu */}
                        <ul className="hidden md:flex space-x-6 items-center">
                            {navItems.map(({ to, label }) => (
                                <li key={to}>
                                    <NavLink
                                        to={to}
                                        className={({ isActive }) =>
                                            isActive ? activeClass : inactiveClass
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Toggle Button */}
                        <button
                            onClick={toggleDrawer}
                            className="md:hidden text-white text-3xl focus:outline-none"
                            aria-label={drawerOpen ? "Close menu" : "Open menu"}
                        >
                            {drawerOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>

                    {/* Mobile Drawer */}
                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-[#333333b6] shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${drawerOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <nav className="flex flex-col p-8 space-y-6 text-white">
                            {navItems.map(({ to, label }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    onClick={() => setDrawerOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-blue-200 font-semibold border-b border-white pb-1"
                                            : "hover:text-blue-200 transition"
                                    }
                                >
                                    {label}
                                </NavLink>
                            ))}
                        </nav>
                    </div>

                    {/* Mobile Overlay */}
                    {drawerOpen && (
                        <div
                            onClick={toggleDrawer}
                            className="fixed inset-0 bg-black bg-opacity-40 z-30"
                            aria-hidden="true"
                        />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;