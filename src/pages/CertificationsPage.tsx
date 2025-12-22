import React, { useState } from "react";
import { motion } from "motion/react";
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";

const certifications = [
    {
        id: 1,
        title: "React - The Complete Guide",
        issuer: "Udemy",
        date: "2024",
        description: "Master React with hooks, Redux, Next.js, and more",
        url: "#",
        category: "Frontend Development",
    },
    {
        id: 2,
        title: "Advanced JavaScript Concepts",
        issuer: "Coursera",
        date: "2024",
        description: "Deep dive into closures, promises, async/await, and ES6+ features",
        url: "#",
        category: "Programming",
    },
    {
        id: 3,
        title: "TypeScript Fundamentals",
        issuer: "Pluralsight",
        date: "2023",
        description: "Learn TypeScript from basics to advanced patterns",
        url: "#",
        category: "Programming",
    },
    {
        id: 4,
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2023",
        description: "Understanding of AWS cloud services and architecture",
        url: "#",
        category: "Cloud",
    },
    {
        id: 5,
        title: "Node.js and Express.js Masterclass",
        issuer: "Udemy",
        date: "2024",
        description: "Build scalable server-side applications with Node.js",
        url: "#",
        category: "Backend Development",
    },
    {
        id: 6,
        title: "UI/UX Design Principles",
        issuer: "Google",
        date: "2023",
        description: "Design thinking and user-centered design methodologies",
        url: "#",
        category: "Design",
    },
];

function CertificationsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", ...new Set(certifications.map((cert) => cert.category))];

    const filteredCertifications =
        selectedCategory === "All"
            ? certifications
            : certifications.filter((cert) => cert.category === selectedCategory);

    return (
        <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-black px-6">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="py-12"
            >
                <div className="md:flex py-8">
                    <motion.div
                        initial={{
                            opacity: 0.5,
                            scale: 1.1,
                            y: -10,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        transition={{
                            ease: "easeInOut",
                            duration: 1,
                        }}
                        className="w-full md:w-3/4 md:text-8xl 2xl:text-9xl md:text-start text-5xl text-[#250902] font-semibold font-fjalla"
                        style={{
                            WebkitTextStroke: "0.75px #003566",
                            color: "#250902",
                        }}
                    >
                        Certifications
                    </motion.div>
                    <div className="pt-4 md:pl-4">
                        <span className="text-[#6c757d]">
                            A collection of courses and certifications that showcase my commitment
                            to continuous learning and professional development.
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-3 mb-8"
            >
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                ? "bg-[#0a2463] text-white"
                                : "bg-white text-black border-2 border-[#dee2e6] hover:border-[#0a2463]"
                            }`}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                {filteredCertifications.map((cert, idx) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-lg shadow-lg border border-[#dee2e6] p-6 flex flex-col hover:shadow-xl transition-shadow"
                    >
                        {/* Certificate Icon */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-[#f8f9fa] rounded-lg">
                                <Award className="h-6 w-6 text-[#0a2463]" />
                            </div>
                            <motion.a
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="text-[#6c757d] hover:text-[#0a2463]"
                            >
                                <ExternalLink className="h-5 w-5" />
                            </motion.a>
                        </div>

                        {/* Certificate Info */}
                        <h3 className="text-xl font-semibold text-[#250902] mb-2">
                            {cert.title}
                        </h3>

                        <div className="flex flex-col gap-2 mb-4 text-sm text-[#6c757d]">
                            <div className="flex items-center gap-2">
                                <Building2 className="h-4 w-4" />
                                <span>{cert.issuer}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{cert.date}</span>
                            </div>
                        </div>

                        <p className="text-sm text-[#6c757d] mb-4 flex-grow">
                            {cert.description}
                        </p>

                        {/* Category Badge */}
                        <div className="mt-auto">
                            <span className="inline-block px-3 py-1 bg-[#f8f9fa] text-xs font-medium text-[#250902] rounded-full border border-[#dee2e6]">
                                {cert.category}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Empty State */}
            {filteredCertifications.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <Award className="h-16 w-16 text-[#6c757d] mx-auto mb-4" />
                    <p className="text-[#6c757d]">No certifications found in this category.</p>
                </motion.div>
            )}

            {/* Footer */}
            <footer className="border-t border-dashed border-[#d6ccc2] mt-20 py-8 md:py-12 px-4 md:px-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-xs md:text-sm text-gray-500">
                    <div className="text-center md:text-left">
                        © 2024 Yash Hegde. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default CertificationsPage;

