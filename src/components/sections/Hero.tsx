import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-scroll';

export const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-16">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center" >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-sm md:text-base font-semibold text-accent tracking-wide uppercase mb-4">
                            Full Stack Developer
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                            Building digital <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                                experiences that matter.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            I craft clean, performant, and accessible web applications with a focus on details and user experience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <Link to="projects" smooth={true} duration={500} offset={-70}>
                            <Button size="lg" className="h-12 px-8 text-base">
                                View My Work
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="h-12 px-8 text-base" onClick={() => window.open('/resume.pdf', '_blank')}>
                            Download Resume
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex justify-center gap-6"
                    >
                        <SocialLink href="https://github.com" icon={<Github />} />
                        <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
                        <SocialLink href="https://twitter.com" icon={<Twitter />} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
    >
        {icon}
    </a>
);
