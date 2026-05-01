import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';
import { trackEvent } from '../services/trackingService';

const Navbar = ({ activePanel, panels, activeIndex, onNavigate }) => {
    const { theme, toggleTheme } = useTheme();
    const [hoverDot, setHoverDot] = useState(null);

    const canGoBack = activeIndex > 0;
    const canGoForward = activeIndex < panels.length - 1;

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="dashboard-navbar bg-white/90 dark:bg-dark-card/90 backdrop-blur-xl border-b border-gray-200 dark:border-dark-border"
        >
            {/* LEFT: Logo + breadcrumb */}
            <div className="flex items-center gap-3 min-w-0">
                <motion.a
                    href="#"
                    onClick={(e) => { e.preventDefault(); onNavigate(0); }}
                    data-tracking-id="navbar-logo"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-shrink-0"
                >
                    <img src="/fav.png" alt="RND" className="h-8 w-8 border-2 border-primary-500 rounded-xl" />
                </motion.a>
                <span className="text-gray-300 dark:text-gray-600 text-sm select-none">/</span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 truncate">
                    {activePanel.name}
                </span>

                {/* Arrow navigation (desktop) */}
                <div className="hidden md:flex items-center gap-1 ml-2">
                    <button
                        onClick={() => onNavigate(activeIndex - 1)}
                        disabled={!canGoBack}
                        className={`p-1 rounded-md transition-colors ${canGoBack ? 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-border' : 'text-gray-300 dark:text-gray-700 cursor-not-allowed'}`}
                        title="Painel anterior (←)"
                    >
                        <FaChevronLeft size={12} />
                    </button>
                    <button
                        onClick={() => onNavigate(activeIndex + 1)}
                        disabled={!canGoForward}
                        className={`p-1 rounded-md transition-colors ${canGoForward ? 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-border' : 'text-gray-300 dark:text-gray-700 cursor-not-allowed'}`}
                        title="Próximo painel (→)"
                    >
                        <FaChevronRight size={12} />
                    </button>
                </div>
            </div>

            {/* CENTER: Progress dots */}
            <div className="progress-dots hidden sm:flex absolute left-1/2 -translate-x-1/2">
                {panels.map((panel, i) => (
                    <button
                        key={panel.id}
                        onClick={() => onNavigate(i)}
                        onMouseEnter={() => setHoverDot(i)}
                        onMouseLeave={() => setHoverDot(null)}
                        className={`progress-dot transition-all ${i === activeIndex
                            ? 'active bg-primary-500'
                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-400 dark:hover:bg-primary-500'
                        }`}
                        title={panel.name}
                        data-tracking-id={`navbar-dot-${panel.id}`}
                    />
                ))}
            </div>

            {/* RIGHT: Availability + Theme toggle */}
            <div className="flex items-center gap-3">
                <div className="availability-badge bg-primary-500/10 dark:bg-primary-500/15 text-primary-700 dark:text-primary-400 border border-primary-500/20 hidden sm:flex">
                    <span className="pulse-dot" />
                    Disponível
                </div>

                <motion.button
                    onClick={() => { toggleTheme(); trackEvent('THEME_TOGGLE', { to: theme === 'light' ? 'dark' : 'light' }); }}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-dark-border hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
                    transition={{ duration: 0.3 }}
                >
                    {theme === 'light'
                        ? <FaMoon className="w-4 h-4 text-gray-700" />
                        : <FaSun className="w-4 h-4 text-yellow-400" />
                    }
                </motion.button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
