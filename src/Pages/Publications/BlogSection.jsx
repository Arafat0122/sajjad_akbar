import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const BlogItem = ({ blog, index }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 bg-white/60 backdrop-blur-md rounded-3xl shadow-sm border border-sky-100 hover:shadow-md transition-all duration-300 p-6 md:p-8"
        >
            {/* Image Section */}
            <div className="w-full md:w-1/3">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover rounded-2xl shadow-md border border-sky-50"
                />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-2/3 text-gray-800">
                <p className="text-sm text-sky-600 font-medium mb-2">
                    {new Date(blog.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-sky-900 mb-4">
                    {blog.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                    {expanded ? blog.content : `${blog.content.slice(0, 300)}...`}
                </p>

                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-4 inline-block text-sky-700 font-medium hover:text-sky-900 transition-colors duration-200"
                >
                    {expanded ? "Read Less ▲" : "Read More ▼"}
                </button>
            </div>
        </motion.div>
    );
};

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data))
            .catch((err) => console.error("Error loading blogs:", err));
    }, []);

    return (
        <section className="bg-gradient-to-b from-white via-sky-50 to-white py-20 px-6 md:px-10 text-gray-900 font-inter">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center text-sky-900 mb-16"
                >
                    Latest Articles & Reflections
                </motion.h2>

                {/* Blogs */}
                {blogs.map((blog, index) => (
                    <BlogItem key={blog.id} blog={blog} index={index} />
                ))}
            </div>
        </section>
    );
};

export default BlogSection;