import { motion } from 'framer-motion';
import { FaCode, FaCoffee, FaMusic, FaLaptopCode } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const About = () => {
    const interests = [
        { icon: <FaCode />, text: 'Desenvolvimento' },
        { icon: <FaCoffee />, text: 'Café' },
        { icon: <FaMusic />, text: 'Música' },
        { icon: <FaLaptopCode />, text: 'Design' },
    ];

    const journeyItems = [
        {
            title: 'Curso Técnico - IFPE',
            description: 'Formação em Informática para Internet, onde descobri minha paixão por desenvolvimento.',
            icon: '🎓',
        },
        {
            title: 'Monitor de Disciplina',
            description: 'Experiência ajudando outros alunos, desenvolvendo habilidades de comunicação e ensino (nota 9.5).',
            icon: '👨‍🏫',
        },
        {
            title: 'Manutenção e Suporte',
            description: 'Trabalhos freelance resolvendo problemas técnicos e mantendo sistemas funcionando.',
            icon: '🔧',
        },
        {
            title: 'Desenvolvimento Web',
            description: 'Migração para o mundo do desenvolvimento, focando em React, Node.js e PostgreSQL.',
            icon: '💻',
        },
    ];

    return (
        <section id="about" className="section-container bg-gray-50 dark:bg-dark-card/30">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <ScrollReveal variant="slideUp">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Quem é <span className="gradient-text">Ronaldo</span>?
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                        Um pouco sobre minha jornada
                    </p>
                </ScrollReveal>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                    {/* Image/Avatar Side */}
                    <ScrollReveal variant="slideLeft">
                        <div className="flex justify-center">
                            <div className="relative">
                                <motion.div
                                    className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary-500 to-blue-600 p-1"
                                    whileHover={{ scale: 1.05, rotate: 3 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-dark-card flex items-center justify-center text-8xl font-bold gradient-text">
                                        <img
                                            src="https://github.com/ronaldornd.png"
                                            alt="Ronaldo"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                </motion.div>
                                {/* Floating elements */}
                                <motion.div
                                    className="absolute -top-4 -right-4 bg-primary-500 text-white p-3 rounded-lg shadow-lg"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    💻
                                </motion.div>
                                <motion.div
                                    className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                >
                                    🚀
                                </motion.div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Text Side */}
                    <ScrollReveal variant="slideRight">
                        <div className="space-y-4">
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                Sou um <span className="font-semibold gradient-text">criador curioso</span> que
                                começou desmontando computadores e hoje reconstrói ideias com código.
                            </p>
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                Gosto de unir <span className="font-semibold text-primary-500">lógica e arte</span> —
                                da tela ao sistema.
                            </p>
                            <div className="card-glass p-6 mt-6">
                                <h3 className="text-xl font-bold mb-3 gradient-text">Minha Missão</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Aprender sempre, compartilhar conhecimento e criar soluções acessíveis
                                    que fazem a diferença na vida das pessoas.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Journey Timeline */}
                <ScrollReveal variant="slideUp" className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center">Minha Trajetória</h3>
                    <div className="space-y-6">
                        {journeyItems.map((item, index) => (
                            <ScrollReveal key={index} variant="slideLeft" delay={index * 0.1}>
                                <motion.div
                                    className="card-glass p-6 flex gap-4"
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="text-4xl">{item.icon}</div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-primary-500">{item.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Fun Facts */}
                <ScrollReveal variant="scale" className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center">Curiosidades</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <motion.div
                            className="card-glass p-6"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59,130,246,0.2)" }}
                        >
                            <p className="text-gray-700 dark:text-gray-300">
                                💪 Já resolvi bugs às <span className="font-bold text-primary-500">3h da manhã</span> só por teimosia.
                            </p>
                        </motion.div>
                        <motion.div
                            className="card-glass p-6"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34,197,94,0.2)" }}
                        >
                            <p className="text-gray-700 dark:text-gray-300">
                                ☕ Combustível oficial: <span className="font-bold text-primary-500">café</span> e música.
                            </p>
                        </motion.div>
                    </div>
                </ScrollReveal>

                {/* Interests */}
                <ScrollReveal variant="slideUp">
                    <h3 className="text-2xl font-bold mb-6 text-center">Interesses</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {interests.map((interest, index) => (
                            <motion.div
                                key={index}
                                className="card-glass px-6 py-3 flex items-center gap-3"
                                whileHover={{ scale: 1.1, rotate: 2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-primary-500 text-xl">{interest.icon}</span>
                                <span className="font-semibold">{interest.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default About;
