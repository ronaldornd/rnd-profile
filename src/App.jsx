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

function App() {
    // Rastreia visitas e envia notificação no WhatsApp
    useVisitTracker();

    return (
        <ThemeProvider>
            <div className="min-h-screen">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Experience />
                    <Skills />
                    <CertificationsAndHighlights />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
