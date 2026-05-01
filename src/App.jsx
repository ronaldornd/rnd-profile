import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import useVisitTracker from './hooks/useVisitTracker';
import { trackEvent, trackEventWithBeacon } from './services/trackingService';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CertificationsAndHighlights from './components/CertificationsAndHighlights';
import Contact from './components/Contact';
import {
    FaHome, FaUser, FaBriefcase, FaCode, FaFolder, FaCertificate, FaEnvelope
} from 'react-icons/fa';

export const PANELS = [
    { id: 'home', name: 'Início', icon: FaHome, Component: Hero },
    { id: 'about', name: 'Sobre', icon: FaUser, Component: About },
    { id: 'experience', name: 'Experiência', icon: FaBriefcase, Component: Experience },
    { id: 'skills', name: 'Habilidades', icon: FaCode, Component: Skills },
    { id: 'projects', name: 'Projetos', icon: FaFolder, Component: Projects },
    { id: 'certifications', name: 'Certificações', icon: FaCertificate, Component: CertificationsAndHighlights },
    { id: 'contact', name: 'Contato', icon: FaEnvelope, Component: Contact },
];

const panelVariants = {
    enter: { opacity: 0, y: 18, scale: 0.985 },
    center: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    exit: {
        opacity: 0, y: -10, scale: 0.992,
        transition: { duration: 0.22, ease: [0.55, 0, 1, 0.45] }
    },
};

function AppContent() {
    useVisitTracker();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        trackEvent('SESSION_START', { page: window.location.pathname });
        const handleBeforeUnload = () => {
            trackEventWithBeacon('SESSION_END', { lastPage: window.location.pathname });
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, []);

    const navigateTo = useCallback((index) => {
        const clamped = Math.max(0, Math.min(PANELS.length - 1, index));
        setActiveIndex(clamped);
        trackEvent('SESSION_VIEW', { section: PANELS[clamped].id });
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navigateTo(activeIndex + 1);
            else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') navigateTo(activeIndex - 1);
            else {
                const num = parseInt(e.key);
                if (num >= 1 && num <= PANELS.length) navigateTo(num - 1);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex, navigateTo]);

    const activePanel = PANELS[activeIndex];
    const ActiveComponent = activePanel.Component;

    return (
        <div className="dashboard-root bg-white dark:bg-dark-bg text-gray-900 dark:text-gray-100">
            <Navbar activePanel={activePanel} panels={PANELS} activeIndex={activeIndex} onNavigate={navigateTo} />
            <div className="dashboard-body">
                <Sidebar panels={PANELS} activeIndex={activeIndex} onNavigate={navigateTo} />
                <main className="dashboard-main">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePanel.id}
                            variants={panelVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="panel-container"
                        >
                            <ActiveComponent />
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>

            {/* Mobile Bottom Nav */}
            <nav className="mobile-bottom-nav bg-white/95 dark:bg-dark-card/95 backdrop-blur-xl border-t border-gray-200 dark:border-dark-border">
                {PANELS.map((panel, i) => {
                    const Icon = panel.icon;
                    const isActive = activeIndex === i;
                    return (
                        <button
                            key={panel.id}
                            onClick={() => navigateTo(i)}
                            className={`mobile-nav-item transition-colors ${isActive
                                ? 'text-primary-500'
                                : 'text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                            }`}
                            title={panel.name}
                        >
                            <Icon size={isActive ? 22 : 18} />
                            <span style={{ fontSize: '9px' }} className={isActive ? 'font-bold' : ''}>
                                {panel.name.length > 6 ? panel.name.slice(0, 6) + '.' : panel.name}
                            </span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;
