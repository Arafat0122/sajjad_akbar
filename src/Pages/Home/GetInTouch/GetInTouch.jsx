import {
    FaYoutube,
    FaFacebookF,
    FaTelegramPlane,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const socialLinks = [
    {
        id: 1,
        icon: <FaYoutube size={24} />,
        url: "https://youtube.com/yourchannel",
        label: "YouTube",
    },
    {
        id: 2,
        icon: <FaFacebookF size={24} />,
        url: "https://facebook.com/yourpage",
        label: "Facebook",
    },
    {
        id: 3,
        icon: <FaTelegramPlane size={24} />,
        url: "https://t.me/yourhandle",
        label: "Telegram",
    },
    {
        id: 4,
        icon: <FaInstagram size={24} />,
        url: "https://instagram.com/yourprofile",
        label: "Instagram",
    },
    {
        id: 5,
        icon: <FaLinkedinIn size={24} />,
        url: "https://linkedin.com/in/yourprofile",
        label: "LinkedIn",
    },
];

const GetInTouch = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Gold Accent Line */}
                <div className="h-1 w-48 mx-auto mb-12 bg-gradient-to-r from-[#D4AF37] via-[#E8C97E] to-[#D4AF37] rounded-full shadow-[0_0_20px_#D4AF3770]" />

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-center mb-16 drop-shadow-xl">
                    Get in Touch
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                    {/* Contact Form */}
                    <form
                        className="bg-[#141414] rounded-3xl p-10 shadow-lg border border-[#2A2A2A]"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Form submitted! (Add your submission logic)");
                        }}
                        aria-label="Contact form"
                    >
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 font-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
                                placeholder="Your full name"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
                                placeholder="Your email address"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="subject" className="block mb-2 font-semibold">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
                                placeholder="Subject (optional)"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 font-semibold">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition resize-none"
                                placeholder="Write your message here..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-[#D4AF37] hover:bg-[#E8C97E] text-black font-semibold rounded-full shadow-md transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Social & Info */}
                    <div className="flex flex-col justify-between bg-[#141414] rounded-3xl p-10 shadow-lg border border-[#2A2A2A]">
                        {/* Social Media */}
                        <div>
                            <h3 className="text-2xl font-serif font-semibold text-[#E8C97E] mb-6">
                                Connect with me
                            </h3>
                            <div className="flex gap-6 justify-center md:justify-start">
                                {socialLinks.map(({ id, icon, url, label }) => (
                                    <a
                                        key={id}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="text-[#D4AF37] hover:text-[#E8C97E] transition text-3xl"
                                    >
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Optional: Calendly Embed placeholder */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-serif font-semibold text-[#E8C97E] mb-4">
                                Schedule a Meeting
                            </h3>
                            <div className="aspect-[4/3] bg-[#0B0B0B] rounded-lg border border-[#2A2A2A] flex items-center justify-center text-[#D4AF37] font-semibold italic">
                                {/* Replace this div with your Calendly iframe embed */}
                                Calendly embed goes here
                            </div>
                        </div>

                        {/* Optional: Location / Timezone info */}
                        <div className="mt-12 text-[#CFC9A9] text-center md:text-left text-sm font-serif italic">
                            <p>Location: Dhaka, Bangladesh</p>
                            <p>Timezone: GMT+6</p>
                            <p className="mt-2 text-xs">
                                Best times to contact: 9 AM – 6 PM (GMT+6)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;