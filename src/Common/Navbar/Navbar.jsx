import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    const navItems = [
        { to: "/", label: "HOME" },
        { to: "/about", label: "ABOUT" },
        { to: "/publications", label: "PUBLICATIONS" },
        { to: "/courses", label: "COURSES" },
        { to: "/contact", label: "GET IN TOUCH" },
    ];

    const activeClass = "text-[#D4AF37] font-semibold border-b-2 border-[#D4AF37]";
    const inactiveClass = "text-black hover:text-[#D4AF37] transition";

    return (
        <nav className="bg-[#ffffff] bg-opacity-95 backdrop-blur shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
                {/* Logo */}
                <NavLink to="/" className="flex items-center">
                    <img className="h-12 w-auto" src="/Sajjad-Akbar-Logo-Dark.png" alt="Sajjad Akbar Logo" />
                </NavLink>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 items-center">
                    {navItems.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle Button */}
                <button
                    onClick={toggleDrawer}
                    className="md:hidden text-[#F8F5E3] text-3xl focus:outline-none"
                    aria-label={drawerOpen ? "Close menu" : "Open menu"}
                >
                    {drawerOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#0B0B0B] shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${drawerOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <nav className="flex flex-col p-8 space-y-6 text-[#F8F5E3]">
                    {navItems.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            onClick={() => setDrawerOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#D4AF37] font-semibold border-b border-[#D4AF37] pb-1"
                                    : "hover:text-[#D4AF37] transition"
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
            <div className="h-[0.5px] w-full mx-auto mb-0 bg-gradient-to-r from-[#ffffff] via-[#E8C97E] to-[#D4AF37] rounded-full shadow-[0_0_20px_#D4AF3770]"></div>
        </nav>
    );
};

export default Navbar;