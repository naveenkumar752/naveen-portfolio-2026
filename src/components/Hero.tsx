import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -z-10 mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 mix-blend-screen" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex-1 text-center md:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6 text-sm font-medium"
                        >
                            <Terminal className="w-4 h-4" />
                            <span>Available for new opportunities</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                            Hi, I'm <br />
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                NaveenKumar M
                            </span>
                        </h1>

                        <h2 className="text-xl md:text-2xl text-slate-400 mb-8 font-light max-w-2xl">
                            Junior Software Engineer specializing in scalable web applications, AWS cloud infrastructure, and modern frontend frameworks.
                        </h2>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <a
                                href="#experience"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors cursor-pointer"
                            >
                                View My Work
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium transition-colors"
                            >
                                Contact Me
                            </a>
                        </div>
                    </motion.div>

                    {/* Image/Visual Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex-1 relative hidden md:block"
                    >
                        <div className="relative w-80 h-80 mx-auto">
                            {/* Outer glowing border effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 to-pink-500 opacity-20 blur-xl" />
                            {/* The image container */}
                            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-slate-800 overflow-hidden shadow-2xl flex items-center justify-center">
                                <div className="text-slate-500 flex flex-col items-center">
                                    <Terminal className="w-16 h-16 mb-4 opacity-50" />
                                    <span className="font-mono text-sm opacity-50">const developer = "Naveen";</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
