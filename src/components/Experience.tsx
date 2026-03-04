import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: "Software Engineer",
        company: "Jothi Software Private Ltd",
        duration: "Jun 2025 - Present",
        description: "Promoted to Software Engineer after demonstrating strong full-stack capabilities. Leading development of scalable web and mobile applications using modern frameworks and AWS cloud infrastructure.",
        skills: ["Ruby", "Ruby on Rails", "PHP", "Symfony", "AngularJS", "Vue.js", "RubyMine", "Doctrine", "MySQL", "PostgreSQL", "MVC", "Databases", "Node", "Node.js", "Express.js", "Prisma", "React.js", "React Native", "AWS RDS", "CodeCommit", "GitHub", "Git", "CloudFront", "S3", "Lambda", "Cognito", "IAM"]
    },
    {
        role: "Junior Software Engineer",
        company: "Jothi Software Private Ltd",
        duration: "Jul 2024 - Jun 2025",
        description: "Built robust web applications and APIs. Focused on delivering high-quality code and optimizing database performance while collaborating in an agile team environment.",
        skills: ["Ruby on Rails", "Ruby", "JavaScript", "React.js", "Node.js", "TypeScript", "MySQL", "HTML5", "CSS", "Ant Design", "Bootstrap"]
    },
    {
        role: "Intern",
        company: "Jothi Software Private Ltd",
        duration: "Jun 2023 - Jun 2024",
        description: "Worked as a part-time intern, gaining hands-on experience in React.js, Node.js, TypeScript, AWS, and the Ant Design framework. Collaborated effectively within a team, enhancing problem-solving and communication skills. Developed a strong understanding of IT culture, project management, and workflow optimization, contributing to a structured and efficient development environment.",
        skills: ["React.js", "Node", "AWS", "TypeScript", "antd"]
    },
    {
        role: "Student Intern",
        company: "Nokia Solutions And Networks India Pvt Ltd",
        duration: "Aug 2020 - Sep 2020",
        description: "Internship focusing on enterprise networking software and systems engineering exposure.",
        skills: ["Networking", "Enterprise Systems"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-indigo-500 rounded mx-auto md:mx-0"></div>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="md:grid md:grid-cols-4 gap-8 items-start">

                                <div className="hidden md:block col-span-1 pt-1 text-slate-400 font-medium">
                                    {exp.duration}
                                </div>

                                <div className="col-span-3 relative">
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[35px] md:-left-12 top-2 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-slate-900 z-10"></div>
                                    {/* Timeline line */}
                                    {index !== experiences.length - 1 && (
                                        <div className="absolute -left-[29px] md:-left-[42px] top-6 w-0.5 h-full bg-slate-800"></div>
                                    )}

                                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/30 transition-colors">
                                        <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-indigo-300 mb-4">
                                            <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {exp.company}</span>
                                            <span className="flex md:hidden items-center gap-1"><Calendar className="w-4 h-4" /> {exp.duration}</span>
                                        </div>

                                        <p className="text-slate-400 mb-6 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, sIdx) => (
                                                <span key={sIdx} className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-medium border border-indigo-500/20">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
