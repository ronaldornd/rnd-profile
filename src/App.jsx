import { ThemeProvider } from './contexts/ThemeContext';
import useVisitTracker from './hooks/useVisitTracker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CertificationsAndHighlights from './components/CertificationsAndHighlights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
    // Rastreia visitas e envia notificação no WhatsApp
    useVisitTracker();

    return (
        <ThemeProvider>
            <div className="flex flex-col max-w-100vw min-h-100vh bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-200">
                <Navbar />
                <main className="flex-grow">
                    <Hero />
                    <About />
                    <Experience />
                    <Skills />
                    <Projects />
                    <CertificationsAndHighlights />
                    <Contact />
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </ThemeProvider>
    );
}

export default App;
