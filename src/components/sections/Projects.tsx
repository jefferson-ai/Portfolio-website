import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';

interface Project {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
    image: string;
}

const projects: Project[] = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and analytics. Features real-time data visualization and inventory management.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
        githubUrl: "#",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500" // Placeholder
    },
    {
        title: "Task Management App",
        description: "Collaborative task manager with drag-and-drop functionality, dark mode, and team workspaces. Built for productivity and ease of use.",
        tags: ["Next.js", "Prisma", "PostgreSQL", "dnd-kit"],
        githubUrl: "#",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800&h=500" // Placeholder
    },
    {
        title: "Personal Expense Tracker",
        description: "A smart finance tool to track income and expenses with visual analytics. Features budget planning, category management, and monthly reports.",
        tags: ["React", "Recharts", "Firebase", "Context API"],
        githubUrl: "https://github.com/jefferson-ai/Expense-Tracker.git",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=500" // Placeholder
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A selection of projects that demonstrate my technical skills and problem-solving abilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded-md border border-gray-100"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <Button variant="outline" size="sm" className="flex-1" onClick={() => window.open(project.githubUrl, '_blank')}>
                                        <Github className="w-4 h-4 mr-2" />
                                        Code
                                    </Button>
                                    <Button variant="default" size="sm" className="flex-1" onClick={() => window.open(project.liveUrl, '_blank')}>
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Demo
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
