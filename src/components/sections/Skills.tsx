import { motion } from 'framer-motion';

const skills = [
    {
        category: "Frontend",
        items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion", "HTML5/CSS3"]
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Supabase", "REST APIs"]
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "GitHub", "Vercel", "Docker", "VS Code", "Figma"]
    },
    {
        category: "Soft Skills",
        items: ["Problem Solving", "Communication", "Teamwork", "Agile/Scrum", "Fast Learner"]
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A comprehensive list of the tools and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                        >
                            <h3 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-100 pb-2">
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-2">
                                {skillGroup.items.map((item) => (
                                    <li key={item} className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
