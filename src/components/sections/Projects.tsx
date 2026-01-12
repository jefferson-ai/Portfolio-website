import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';

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

                <div className="max-w-4xl mx-auto">
                    <ScrollStack className="space-y-8 pb-24">
                        {projects.map((project, index) => (
                            <ScrollStackItem key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="relative h-64 md:h-auto overflow-hidden">
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="p-6 flex flex-col justify-center">
                                            <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-600 mb-6 leading-relaxed">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded-full border border-gray-100"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-4">
                                                <Button variant="outline" size="sm" onClick={() => window.open(project.githubUrl, '_blank')}>
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Code
                                                </Button>
                                                <Button variant="default" size="sm" onClick={() => window.open(project.liveUrl, '_blank')}>
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Demo
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </ScrollStackItem>
                        ))}
                    </ScrollStack>
                </div>
            </div>
        </section>
    );
};
