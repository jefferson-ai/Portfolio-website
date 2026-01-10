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
                                Hello! I'm a passionate Full Stack Developer embarking on my professional journey.
                                I love building things that live on the internet, from simple landing pages to complex web applications.
                            </p>
                            <p>
                                My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
                            </p>
                            <p>
                                Fast-forward to today, and I've had the privilege of building software for a
                                <span className="text-accent font-medium"> start-up</span>, a
                                <span className="text-accent font-medium"> student organization</span>, and huge corporations.
                            </p>
                            <p>
                                When I'm not coding, you can find me reading about new technologies, playing video games, or hanging out with friends.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
