const Publications = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#F8F5E3] text-center mb-12 drop-shadow-xl">
                    Publications
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Book Image Placeholder */}
                    <div>
                        <img
                            src="/Christian Philosophy Reconciling Faith and Reason.jpg"
                            alt="Christian Philosophy Book Cover"
                            className="rounded-2xl shadow-lg border border-[#2A2A2A]"
                        />
                    </div>

                    {/* Book Details */}
                    <div className="text-[#F8F5E3] text-lg leading-relaxed font-serif space-y-6">
                        <h3 className="text-2xl font-bold text-[#E8C97E]">
                            Christian Philosophy: Reconciling Faith and Reason
                        </h3>
                        <p>
                            Authored by <strong className="text-[#D4AF37]">Sajjad Akbar Hossain</strong>, this work explores the rich landscape of Christian philosophical thought, focusing on the harmony between reason and divine revelation.
                        </p>
                        <p>
                            Through scholarly analysis and thoughtful reflection, the book provides insights into key debates, thinkers, and ideas that have shaped the Christian philosophical tradition across centuries.
                        </p>
                        <p className="italic text-[#E8C97E]">
                            A must-read for anyone interested in comparative theology, interfaith understanding, or the interface of logic and belief.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Publications;