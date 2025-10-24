import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Header = () => {
    return (
        <section className="relative bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#1a1a1a] text-gray-100 py-20 px-6 overflow-hidden">
            {/* Subtle glow background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-sky-900/20 blur-[150px] rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-serif font-extrabold text-center mb-14 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-500 drop-shadow-[0_0_20px_rgba(56,189,248,0.25)]"
                >
                    Publications
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Book Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="/Christian Philosophy Reconciling Faith and Reason.jpg"
                            alt="Christian Philosophy Book Cover"
                            className="rounded-2xl shadow-[0_0_25px_rgba(56,189,248,0.2)] border border-gray-700 hover:shadow-[0_0_40px_rgba(56,189,248,0.35)] transition-all duration-500"
                        />
                    </motion.div>

                    {/* Book Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-gray-300 text-lg leading-relaxed font-serif space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-sky-300 tracking-wide">
                            Christian Philosophy: Reconciling Faith and Reason
                        </h3>
                        <p>
                            Authored by{" "}
                            <strong className="text-sky-400">
                                Sajjad Akbar Hossain
                            </strong>
                            , this work explores the rich landscape of Christian philosophical thought, focusing on the harmony between reason and divine revelation.
                        </p>
                        <p>
                            Through scholarly analysis and thoughtful reflection, the book provides insights into key debates, thinkers, and ideas that have shaped the Christian philosophical tradition across centuries.
                        </p>
                        <p className="italic text-sky-400/90">
                            A must-read for anyone interested in comparative theology, interfaith understanding, or the interface of logic and belief.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Header;
