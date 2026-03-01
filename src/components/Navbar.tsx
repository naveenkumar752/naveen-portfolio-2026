import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
                    >
                        Naveen.Dev
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-6"
                    >
                        <a href="#about" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors hidden sm:block">About</a>
                        <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors hidden sm:block">Skills</a>
                        <a href="#experience" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors hidden sm:block">Experience</a>

                        <div className="w-px h-5 bg-slate-700 hidden sm:block"></div>

                        <a href="https://linkedin.com/in/naveenkumar-m" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="mailto:contact@example.com" className="text-slate-400 hover:text-indigo-400 transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
}
