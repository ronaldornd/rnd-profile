import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
    const [easterEggFound, setEasterEggFound] = useState(false);
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-200 dark:border-dark-border mt-8 py-6 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <img src="/fav.png" alt="RND" className="h-7 w-7 border-2 border-primary-500 rounded-xl" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">Transformando ideias em código.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/ronaldornd" target="_blank" rel="noopener noreferrer" data-tracking-id="footer_github" className="text-gray-400 hover:text-primary-500 transition-colors"><FaGithub size={20} /></a>
                        <a href="https://linkedin.com/in/ronaldosbarbosaa" target="_blank" rel="noopener noreferrer" data-tracking-id="footer_linkedin" className="text-gray-400 hover:text-primary-500 transition-colors"><FaLinkedin size={20} /></a>
                        <a href="mailto:ronaldo.s.barbosa@outlook.com" data-tracking-id="footer_email" className="text-gray-400 hover:text-primary-500 transition-colors"><FaEnvelope size={20} /></a>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
                        <motion.span onClick={() => { setEasterEggFound(true); setTimeout(() => setEasterEggFound(false), 3000); }} className="cursor-pointer hover:text-primary-500 transition-colors select-none" whileHover={{ scale: 1.2 }}>🔍</motion.span>
                        {easterEggFound && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary-500 font-semibold">🎉 "A curiosidade é o primeiro passo para a inovação"</motion.span>}
                        <span className="flex items-center gap-1">© {currentYear} feito com <FaHeart className="text-red-500" size={10} /> por Ronaldo</span>
                    </div>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-600 text-center mt-4">
                    🔒 Este site coleta dados de navegação anônimos para melhorar a experiência. Nenhum dado pessoal identificável é armazenado.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
