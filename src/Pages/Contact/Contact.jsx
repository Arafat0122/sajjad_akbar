import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-20 px-6">
            <div className="max-w-5xl mx-auto">
                
                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#F8F5E3] text-center mb-16 drop-shadow-xl">
                    Get in Touch
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Info Section */}
                    <div className="space-y-6 text-[#E8C97E] font-serif">
                        <p className="text-lg text-[#F8F5E3]">
                            Have questions, collaborations or course inquiries? I’d love to hear from you.
                        </p>

                        <div className="flex items-start gap-4">
                            <FaEnvelope className="text-[#D4AF37] mt-1" />
                            <p className="text-[#F8F5E3]">sajjad@example.com</p>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaPhoneAlt className="text-[#D4AF37] mt-1" />
                            <p className="text-[#F8F5E3]">+201554883928</p>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-[#D4AF37] mt-1" />
                            <p className="text-[#F8F5E3]">Cairo, Egypt</p>
                        </div>

                        <a
                            href="https://wa.me/201554883928?text=Salam! I'm reaching out from your website."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 mt-4 px-5 py-3 bg-[#D4AF37] text-black rounded-full font-semibold hover:bg-[#E8C97E] transition duration-300"
                        >
                            <FaWhatsapp size={20} />
                            Message on WhatsApp
                        </a>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6">
                        <div>
                            <label className="block mb-1 text-sm font-medium text-[#E8C97E]">Your Name</label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 bg-[#1A1A1A] text-white rounded-lg border border-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-[#E8C97E]">Your Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 bg-[#1A1A1A] text-white rounded-lg border border-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-[#E8C97E]">Your Message</label>
                            <textarea
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full px-4 py-3 bg-[#1A1A1A] text-white rounded-lg border border-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-[#E8C97E] transition duration-200"
                        >
                            📩 Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;