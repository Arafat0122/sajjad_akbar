const About = () => {
    return (
        <section className="bg-[#0B0B0B] text-white pt-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#F8F5E3] text-center mb-12 drop-shadow-xl">
                    About Sajjad Akbar
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div>
                        <img
                            src="/Hero Section Sajjad Akbar.png"
                            alt="Sajjad Akbar"
                        />
                    </div>

                    {/* Bio */}
                    <div className="text-[#F8F5E3] text-lg leading-relaxed font-serif space-y-6">
                        <p>
                            <strong className="text-[#D4AF37]">Sajjad Akbar</strong> is a
                            dedicated educator, speaker, and community guide, committed to
                            empowering modern Muslims with knowledge, clarity, and spiritual
                            purpose.
                        </p>
                        <p>
                            He is a student of <strong>Al-Azhar University</strong>, one of the
                            most prestigious Islamic institutions in the world. He holds an{" "}
                            <strong>MPhil</strong> and is currently pursuing his{" "}
                            <strong>PhD</strong> in Islamic Studies.
                        </p>
                        <p>
                            Combining academic depth with community relevance, his mission is
                            to produce meaningful content, deliver insightful talks, and build
                            platforms for growth rooted in Islamic tradition.
                        </p>
                        <p className="italic text-[#E8C97E]">
                            “Knowledge is light—and my mission is to kindle that light in
                            every heart.”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;