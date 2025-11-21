import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { trackEvent, trackEventWithBeacon } from './services/trackingService';
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
    // Rastreia o ciclo de vida da sessão e interações do usuário
    useEffect(() => {
        // Rastreia o início da sessão
        trackEvent('SESSION_START', { page: window.location.pathname });

        // Função para rastrear o fim da sessão ao sair da página
        const handleBeforeUnload = () => {
            trackEventWithBeacon('SESSION_END', { lastPage: window.location.pathname });
        };
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Função para rastrear cliques em elementos com `data-tracking-id`
        const handleInteraction = (event) => {
            const element = event.target.closest('[data-tracking-id]');
            if (element) {
                const trackingId = element.getAttribute('data-tracking-id');
                trackEvent('INTERACTION', {
                    id: trackingId,
                    tag: element.tagName,
                    text: element.innerText.trim(),
                });
            }
        };
        document.addEventListener('click', handleInteraction);


        // Função de limpeza para remover os listeners
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            document.removeEventListener('click', handleInteraction);
        };
    }, []); // O array vazio garante que o efeito rode apenas uma vez

    return (
        <ThemeProvider>
            <div
                className="flex flex-col max-w-100vw min-h-100vh bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-200"
            >
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
