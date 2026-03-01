import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ChevronUp } from 'lucide-react';

export default function Contact() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="relative pt-24 pb-12 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-indigo-900/10 rounded-[100%] blur-3xl -z-10" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
                        I'm currently looking for new opportunities as a Software Engineer. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a
                        href="mailto:contact@example.com"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/20"
                    >
                        Say Hello
                        <Mail className="w-5 h-5" />
                    </a>
                </motion.div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent my-12" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <a href="https://linkedin.com/in/naveenkumar-m" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors p-2 hover:bg-indigo-500/10 rounded-full">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors p-2 hover:bg-indigo-500/10 rounded-full">
                            <Github className="w-6 h-6" />
                        </a>
                    </div>

                    <p className="text-slate-500 text-sm">
                        Designed & Built by <span className="text-indigo-400 font-medium">NaveenKumar M</span> © {new Date().getFullYear()}
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-slate-800 hover:bg-indigo-500 text-slate-400 hover:text-white rounded-full transition-all group"
                        aria-label="Scroll to top"
                    >
                        <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

            </div>
        </footer>
    );
}
