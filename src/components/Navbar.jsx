import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [activeSection, setActiveSection] = useState('Início');

    const navItems = [
        { name: 'Início', href: '#home' },
        { name: 'Sobre', href: '#about' },
        { name: 'Experiência', href: '#experience' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Contato', href: '#contact' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Encontrar a seção com maior visibilidade
                let maxRatio = 0;
                let mostVisibleSection = null;

                entries.forEach((entry) => {
                    if (entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio;
                        mostVisibleSection = entry.target.id;
                    }
                });

                // Atualizar apenas se houver uma seção visível
                if (mostVisibleSection && maxRatio > 0.1) {
                    const navItem = navItems.find(item => item.href === `#${mostVisibleSection}`);
                    if (navItem) {
                        setActiveSection(navItem.name);
                    }
                }
            },
            {
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
                rootMargin: '-80px 0px -20% 0px'
            }
        );

        // Observar todas as seções
        const sections = ['home', 'about', 'experience', 'skills', 'contact'];
        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-card/80 backdrop-blur-lg border-b border-gray-200 dark:border-dark-border"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src="/fav.png"
                            alt="Ronaldo Logo"
                            className="h-10 w-10 border-2 border-green-500 rounded-2xl"
                        />
                    </motion.a>

                    {/* Active Section Name - Mobile Only */}
                    <div className="md:hidden flex-1 text-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {activeSection}
                        </span>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className={`transition-colors ${activeSection === item.name
                                        ? 'text-primary-500 dark:text-primary-400 font-semibold'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
                                    }`}
                                whileHover={{ y: -2 }}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <motion.button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-gray-200 dark:bg-dark-border hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                        whileHover={{ rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
                        title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
                    >
                        {theme === 'light' ? (
                            <FaMoon className="w-5 h-5 text-gray-700" />
                        ) : (
                            <FaSun className="w-5 h-5 text-yellow-400" />
                        )}
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
