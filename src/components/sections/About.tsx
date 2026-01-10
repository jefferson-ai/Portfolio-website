import { motion } from 'framer-motion';

export const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image/Avatar Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-1/3 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gray-100 shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300">
                            {/* Placeholder for actual image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400">
                                <span className="text-4xl">👋</span>
                            </div>
                            {/* <img src="/path/to/profile.jpg" alt="Profile" className="object-cover w-full h-full" /> */}
                        </div>
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-2/3"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                I’m Jefferson Adda, a Computer Engineering student with a strong interest in web development and applied AI. I enjoy building systems that are not only functional, but fast, scalable, and reliable.

                            </p>
                            <p>
                                My work focuses on experimenting, prototyping, and optimizing performance, especially in backend-heavy applications. I’m interested in how data, APIs, and intelligent systems come together to solve real-world problems, and I enjoy pushing projects from idea to implementation.
                            </p>
                            <p>
                                I’m currently seeking  <span className="text-accent font-medium"> internships</span> and  <span className="text-accent font-medium"> full-time opportunities</span> where I can grow as an engineer, contribute to meaningful products, and work on systems that operate at scale.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
