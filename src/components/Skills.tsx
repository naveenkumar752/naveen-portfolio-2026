import { motion } from 'framer-motion';

const skills = [
    { category: "Web Technologies", items: ["React.js", "Node.js", "Ruby on Rails", "TypeScript", "JavaScript", "HTML5", "CSS", "Ant Design", "Tailwind CSS", "Bootstrap"] },
    { category: "Cloud & AWS", items: ["AWS Lambda", "Amazon S3", "AWS IAM", "Amazon Cognito", "AWS CodeCommit", "Amazon Web Services Developer - Associate"] },
    { category: "Databases & Tools", items: ["MySQL", "Node", "Ruby"] },
    { category: "Soft Skills", items: ["Problem Solving", "Management", "Presentations", "Communication", "Engineering", "Training"] }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-slate-900/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-indigo-500 rounded mx-auto"></div>
                    <p className="mt-6 text-slate-400 max-w-2xl mx-auto">A comprehensive overview of my technical expertise, ranging from frontend architecture to cloud infrastructure.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="bg-slate-800 rounded-3xl p-8 border border-white/5 shadow-xl hover:border-indigo-500/30 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                                <div className="w-2 h-6 bg-indigo-500 rounded-full" />
                                {skillGroup.category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 text-sm font-medium hover:bg-indigo-500 hover:text-white hover:border-indigo-400 transition-all cursor-default"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
