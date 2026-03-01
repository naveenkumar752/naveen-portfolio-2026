import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
      </main>
      <Contact />
    </div>
  )
}

export default App;
