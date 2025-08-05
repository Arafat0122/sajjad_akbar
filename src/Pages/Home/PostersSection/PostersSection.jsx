const PostersSection = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 md:px-12">
            <h2 className="text-4xl font-serif font-extrabold text-blue-900 text-center mb-10">
                Posters & Moments
            </h2>

            <div className="space-y-8">
                {/* First Row - 1 full width image */}
                <div>
                    <img
                        src="/poster1.jpg"
                        alt="Poster 1"
                        className="w-full rounded-lg shadow-lg object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Second Row - 2 images side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img
                        src="/poster2.jpg"
                        alt="Poster 2"
                        className="w-full rounded-lg shadow-md object-cover"
                        loading="lazy"
                    />
                    <img
                        src="/poster3.jpg"
                        alt="Poster 3"
                        className="w-full rounded-lg shadow-md object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Third Row - 2 images side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img
                        src="/poster4.jpg"
                        alt="Poster 4"
                        className="w-full rounded-lg shadow-md object-cover"
                        loading="lazy"
                    />
                    <img
                        src="/poster5.jpg"
                        alt="Poster 5"
                        className="w-full rounded-lg shadow-md object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default PostersSection;