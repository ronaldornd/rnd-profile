import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CertificationsAndHighlights from './components/CertificationsAndHighlights';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Skills />
                    <CertificationsAndHighlights />
                    <Testimonials />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
