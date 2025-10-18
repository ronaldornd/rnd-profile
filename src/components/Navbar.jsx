import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    const navItems = [
        { name: 'Início', href: '#home' },
        { name: 'Sobre', href: '#about' },
        { name: 'Experiência', href: '#experience' },
        { name: 'Projetos', href: '#projects' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Contato', href: '#contact' },
    ];

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
                            className="h-10 w-10"
                        />
                        <span className="text-2xl font-bold gradient-text">Ronaldo</span>
                    </motion.a>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
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
