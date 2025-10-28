import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
    const [easterEggFound, setEasterEggFound] = useState(false);

    const handleEasterEgg = () => {
        setEasterEggFound(true);
        setTimeout(() => setEasterEggFound(false), 3000);
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <motion.div
                            className="flex items-center gap-2 mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src="/fav.png"
                                alt="Ronaldo Logo"
                                className="h-8 w-8 border-green-500 border-2 rounded-2xl"
                            />
                            <h3 className="text-2xl font-bold gradient-text">
                                Ronaldo
                            </h3>
                        </motion.div>
                        <p className="text-gray-400 mb-4">
                            Transformando ideias em código e conexões em soluções.
                        </p>
                        <div className="flex gap-4">
                            <motion.a
                                href="https://github.com/ronaldornd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary-400 transition-colors"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                <FaGithub size={24} />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/ronaldosbarbosaa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary-400 transition-colors"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                <FaLinkedin size={24} />
                            </motion.a>
                            <motion.a
                                href="mailto:ronaldo.s.barbosa@outlook.com"
                                className="text-gray-400 hover:text-primary-400 transition-colors"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                <FaEnvelope size={24} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Links Rápidos</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Início', href: '#home' },
                                { name: 'Sobre', href: '#about' },
                                { name: 'Projetos', href: '#projects' },
                                { name: 'Habilidades', href: '#skills' },
                                { name: 'Contato', href: '#contact' },
                            ].map((link, index) => (
                                <motion.li key={index} whileHover={{ x: 5 }}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Status & Easter Egg */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Status</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-gray-400">Disponível para trabalho</span>
                            </div>
                            <div className="text-gray-400">
                                <p>📚 Estudando: IA & Machine Learning</p>
                                <p className="text-sm mt-2">☕ Alimentado por café</p>
                            </div>

                            {/* Easter Egg */}
                            <motion.div
                                className="mt-4 cursor-pointer"
                                onClick={handleEasterEgg}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-xs text-gray-500 hover:text-primary-400 transition-colors">
                                    🔍 Clique aqui para encontrar algo especial...
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Easter Egg Message */}
                {easterEggFound && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mb-6 p-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg text-white text-center"
                    >
                        <p className="font-bold">🎉 Você encontrou o Easter Egg!</p>
                        <p className="text-sm mt-1">
                            "A curiosidade é o primeiro passo para a inovação" - Ronaldo
                        </p>
                    </motion.div>
                )}

                {/* Divider */}
                <div className="border-t border-gray-800 my-8"></div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-gray-400 mb-2">
                        © {currentYear} Ronaldo. Todos os direitos reservados.
                    </p>
                    <motion.p
                        className="text-gray-500 text-sm flex items-center justify-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Desenvolvido com <FaHeart className="text-red-500 animate-pulse" /> por Ronaldo
                    </motion.p>
                    <p className="text-xs text-gray-600 mt-2">
                        Feito com React, TailwindCSS & Framer Motion
                    </p>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
