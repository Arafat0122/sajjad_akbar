import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Section = ({ title, children }) => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative pl-4 sm:pl-6 border-l-4 border-sky-400/40 mb-12"
    >
        <h2 className="text-2xl md:text-3xl font-semibold text-sky-900 mb-3">
            {title}
        </h2>
        <div className="text-gray-700 leading-relaxed text-base sm:text-lg">
            {children}
        </div>
    </motion.section>
);

const Details = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50 text-gray-900 font-inter">
            <div className="max-w-5xl mx-auto px-5 md:px-8 py-16">
                {/* HEADER */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4 tracking-tight">
                        Full Biography
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        Dr. Sajjad Akbar — Philosopher of Religion & Co-founder of Sapience Institute
                    </p>
                </motion.header>

                {/* QUALIFICATIONS */}
                <Section title="Formal Qualifications">
                    <ul className="list-disc list-inside space-y-1">
                        <li>PhD – University of Birmingham (Completing)</li>
                        <li>MTH in Applied Theology – University of Oxford</li>
                        <li>MA in Islamic Studies – SOAS University London</li>
                        <li>MA in History – Queen Mary University of London</li>
                        <li>BA in Politics – Queen Mary University of London</li>
                        <li>BA in Arabic & Islamic Sciences – Al-Azhar University Egypt</li>
                    </ul>
                </Section>

                {/* TEACHERS */}
                <Section title="Islamic Teachers & Studies">
                    <p>
                        Dr. Sajjad Akbar studied under notable scholars such as Shaykh Ammar wild Salim al Shinqeeti,
                        Shaykh Akram al Nadwi, Shaykh Ahmed Makawi, and Shaykh Adil bin Ahmed. He memorized the entire
                        Quran at the Shatibi Institute and pursued advanced studies in Hanbalite Fiqh, Aqeedah, and Usul
                        across Egypt, Saudi Arabia, and India.
                    </p>
                </Section>

                {/* CLASSICAL BOOKS */}
                <Section title="Classical Books Studied">
                    <p>
                        His classical studies include <em>Sahih al Bukhari</em>, <em>Jami’ al Tirmidhi</em>,
                        <em>Bulugh al Maram</em>, <em>Aqeedah al Tahawiyyah</em>, <em>Al-Itqaan fi Ulum al Quran</em>,
                        and <em>Zaad al Mustaqn’</em> among others.
                    </p>
                </Section>

                {/* PUBLICATIONS */}
                <Section title="Publications">
                    <ul className="list-disc list-inside space-y-1">
                        <li>The Double Standard: Media Reactions to Zionist Terror (2023)</li>
                        <li>Burhan (2021)</li>
                        <li>Kalam Cosmological Arguments (2019)</li>
                        <li>Fifth-Wave Feminism (2019)</li>
                        <li>A Treatise on Liberal Critiques of Ridda (2019)</li>
                        <li>The Scientific Deception of the New Atheists (2020)</li>
                    </ul>
                </Section>

                {/* ROLES */}
                <Section title="Professional Roles">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Co-Founder — Sapience Institute</li>
                        <li>Academic Coordinator — Islam Net</li>
                        <li>Lecturer — Mishkah University</li>
                    </ul>
                </Section>

                {/* DEBATES */}
                <Section title="Notable Debates & Discussions">
                    <ul className="list-disc list-inside space-y-1">
                        <li>David Wood vs Mohammed Hijab – 2018</li>
                        <li>Oxford University Forum Debate – 2020</li>
                        <li>Mohammed Hijab & Jordan Peterson Conversations – 2021/22</li>
                        <li>Piers Morgan Uncensored Debates (2023–2024)</li>
                        <li>Norman Finkelstein & Noam Chomsky Discussions</li>
                    </ul>
                </Section>

                {/* MEDIA */}
                <Section title="Media Features">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Channel 4 – Leicester Unrest (Hindutva & Muslims)</li>
                        <li>BBC – Zionism & Palestinian Rights</li>
                        <li>ITV – Gender Wars</li>
                        <li>Piers Morgan Uncensored – Multiple Appearances</li>
                    </ul>
                </Section>

                {/* SERIES */}
                <Section title="Online Series & Programs">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Al-Londoniyyah – Sapience Institute YouTube Channel</li>
                        <li>Shubuhaat Series</li>
                        <li>Modern Trends</li>
                        <li>Sapient Thoughts – Scientific “Mistakes” Series</li>
                        <li>Arguments from the Quran</li>
                        <li>99 Names of Allah</li>
                    </ul>
                </Section>
            </div>
        </div>
    );
};

export default Details;