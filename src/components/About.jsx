import { motion } from 'framer-motion';
import { FaCode, FaCoffee, FaMusic, FaLaptopCode } from 'react-icons/fa';

const About = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const interests = [
        { icon: <FaCode />, text: 'Desenvolvimento' },
        { icon: <FaCoffee />, text: 'Café' },
        { icon: <FaMusic />, text: 'Música' },
        { icon: <FaLaptopCode />, text: 'Design' },
    ];

    return (
        <section id="about" className="section-container bg-gray-50 dark:bg-dark-card/30">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Quem é <span className="gradient-text">Ronaldo</span>?
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                    Um pouco sobre minha jornada
                </p>

                <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                    {/* Image/Avatar Side */}
                    <motion.div
                        className="flex justify-center"
                        variants={fadeInUp}
                    >
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
                    </motion.div>

                    {/* Text Side */}
                    <motion.div variants={fadeInUp} className="space-y-4">
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
                    </motion.div>
                </div>

                {/* Journey Timeline */}
                <motion.div variants={fadeInUp} className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center">Minha Trajetória</h3>
                    <div className="space-y-6">
                        {[
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
                        ].map((item, index) => (
                            <motion.div
                                key={index}
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
                        ))}
                    </div>
                </motion.div>

                {/* Fun Facts */}
                <motion.div variants={fadeInUp}>
                    <h3 className="text-2xl font-bold mb-6 text-center">Curiosidades</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="card-glass p-6 hover:shadow-2xl transition-shadow">
                            <p className="text-gray-700 dark:text-gray-300">
                                💪 Já resolvi bugs às <span className="font-bold text-primary-500">3h da manhã</span> só por teimosia.
                            </p>
                        </div>
                        <div className="card-glass p-6 hover:shadow-2xl transition-shadow">
                            <p className="text-gray-700 dark:text-gray-300">
                                ☕ Combustível oficial: <span className="font-bold text-primary-500">café</span> e música.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Interests */}
                <motion.div variants={fadeInUp} className="mt-12">
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
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
