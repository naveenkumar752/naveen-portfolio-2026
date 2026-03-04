import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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

                    {/* Desktop Menu */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:flex items-center gap-6"
                    >
                        <a href="#about" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">About</a>
                        <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Skills</a>
                        <a href="#experience" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Experience</a>

                        <div className="w-px h-5 bg-slate-700"></div>

                        <a href="https://www.linkedin.com/in/naveenkumar-m-4024b7245/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://github.com/naveenkumar752" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="mailto:naveenkumarm752@gmail.com" className="text-slate-400 hover:text-indigo-400 transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </motion.div>

                    {/* Mobile Menu Toggle button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white transition-colors" aria-label="Toggle menu">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 py-6 flex flex-col gap-4">
                            <a href="#about" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-indigo-400 transition-colors">About</a>
                            <a href="#skills" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-indigo-400 transition-colors">Skills</a>
                            <a href="#experience" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-indigo-400 transition-colors">Experience</a>

                            <div className="h-px w-full bg-slate-800 my-2"></div>

                            <div className="flex items-center gap-6">
                                <a href="https://www.linkedin.com/in/naveenkumar-m-4024b7245/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="https://github.com/naveenkumar752" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="mailto:contact@example.com" className="text-slate-400 hover:text-indigo-400 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
