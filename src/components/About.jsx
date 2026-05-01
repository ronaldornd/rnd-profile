import { motion } from 'framer-motion';
import { FaCode, FaCoffee, FaMusic, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const About = () => {
    const journey = [
        { icon: '🎓', title: 'Desenvolvimento Web para Internet', org: 'IFPE', period: '2022–2024', desc: 'Técnico em Informática para Internet' },
        { icon: '👨‍🏫', title: 'Monitor de Disciplina', org: 'IFPE', period: '2023–2024', desc: 'Ensino técnico · Nota 9.5 de avaliação' },
        { icon: '🔧', title: 'Suporte & Manuteno Freelance', org: 'Autônomo', period: '2022–2024', desc: 'Manutenção, suporte remoto, Windows/Linux' },
        { icon: '💻', title: 'Desenvolvedor Web', org: 'Projetos pessoais', period: '2023–Atual', desc: 'React, Node.js, PostgreSQL, IA' },
    ];

    const interests = [
        { icon: <FaCode />, text: 'Desenvolvimento' },
        { icon: <FaCoffee />, text: 'Café' },
        { icon: <FaMusic />, text: 'Música' },
        { icon: <FaLaptopCode />, text: 'Design' },
    ];

    const facts = [
        '💪 Já resolvi bugs às 3h da manhã só por teimosia.',
        '☕ Combustível oficial: café e música lofi.',
        '🎯 Aprendizado contínuo é um valor pessoal.',
    ];

    const containerAnim = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
    const item = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

    return (
        <section id="about" className="h-full flex flex-col justify-center px-4 md:px-8 py-4 overflow-hidden">
            <motion.div
                className="max-w-6xl mx-auto w-full grid md:grid-cols-3 gap-5 items-start"
                variants={containerAnim}
                initial="hidden"
                animate="visible"
            >
                {/* COLUMN 1 — Photo + bio */}
                <motion.div variants={item} className="flex flex-col gap-4">
                    {/* Section label */}
                    <div>
                        <p className="text-xs text-primary-500 font-bold uppercase tracking-widest mb-1">Sobre mim</p>
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                            Quem é <span className="gradient-text">Ronaldo</span>?
                        </h2>
                    </div>

                    {/* Photo */}
                    <motion.div
                        className="relative w-36 h-36 md:w-44 md:h-44"
                        whileHover={{ scale: 1.04, rotate: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary-500 to-blue-600 p-0.5">
                            <img src="https://github.com/ronaldornd.png" alt="Ronaldo" className="w-full h-full rounded-2xl object-cover" />
                        </div>
                        <motion.div className="absolute -top-3 -right-3 bg-primary-500 text-white p-2 rounded-lg shadow-lg text-sm" animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity }}>💻</motion.div>
                        <motion.div className="absolute -bottom-3 -left-3 bg-blue-600 text-white p-2 rounded-lg shadow-lg text-sm" animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>🚀</motion.div>
                    </motion.div>

                    {/* Bio */}
                    <div className="space-y-2">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Sou um <span className="font-semibold gradient-text">criador curioso</span> que começou desmontando computadores e hoje reconstrói ideias com código. Gosto de unir <span className="font-semibold text-primary-500">lógica e arte</span> — da tela ao sistema.
                        </p>
                        <div className="card-glass p-3">
                            <p className="text-xs font-bold text-primary-500 mb-1">🎯 Minha Missão</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Aprender sempre, compartilhar conhecimento e criar soluções acessíveis que fazem a diferença.</p>
                        </div>
                    </div>
                </motion.div>

                {/* COLUMN 2 — Journey timeline */}
                <motion.div variants={item} className="flex flex-col gap-4">
                    <p className="text-xs text-primary-500 font-bold uppercase tracking-widest">Trajetória</p>
                    <div className="relative">
                        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary-500 to-blue-600" />
                        <div className="space-y-3 pl-10">
                            {journey.map((j, i) => (
                                <motion.div
                                    key={i}
                                    className="relative card-glass p-3 group"
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.18 }}
                                >
                                    <div className="absolute -left-7 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full border-2 border-dark-bg flex items-center justify-center text-xs">{j.icon}</div>
                                    <p className="text-xs font-bold text-gray-800 dark:text-gray-200 leading-tight">{j.title}</p>
                                    <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                                        {j.org && <span className="text-xs text-primary-500 font-semibold">{j.org}</span>}
                                        {j.period && <span className="text-xs text-gray-400 bg-gray-100 dark:bg-dark-border px-1.5 py-0.5 rounded font-mono">{j.period}</span>}
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{j.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* COLUMN 3 — Curiosidades + interesses */}
                <motion.div variants={item} className="flex flex-col gap-4">
                    {/* Facts */}
                    <div>
                        <p className="text-xs text-primary-500 font-bold uppercase tracking-widest mb-2">Curiosidades</p>
                        <div className="space-y-2">
                            {facts.map((f, i) => (
                                <motion.div
                                    key={i}
                                    className="card-glass p-3 text-sm text-gray-700 dark:text-gray-300"
                                    whileHover={{ x: 3 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {f}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Interests */}
                    <div>
                        <p className="text-xs text-primary-500 font-bold uppercase tracking-widest mb-2">Interesses</p>
                        <div className="grid grid-cols-2 gap-2">
                            {interests.map((interest, i) => (
                                <motion.div
                                    key={i}
                                    className="card-glass px-3 py-2 flex items-center gap-2"
                                    whileHover={{ scale: 1.04, rotate: 1 }}
                                    whileTap={{ scale: 0.96 }}
                                >
                                    <span className="text-primary-500 text-base">{interest.icon}</span>
                                    <span className="font-semibold text-xs">{interest.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Mini skill tags */}
                    <div>
                        <p className="text-xs text-primary-500 font-bold uppercase tracking-widest mb-2">Foco atual</p>
                        <div className="flex flex-wrap gap-1.5">
                            {['TypeScript', 'Next.js', 'IA', 'Docker', 'Testing'].map(s => (
                                <span key={s} className="px-2.5 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-full font-medium">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
