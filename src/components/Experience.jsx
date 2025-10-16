import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaLanguage, FaCertificate } from 'react-icons/fa';

const Experience = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const experiences = [
        {
            title: 'Monitor de Disciplina',
            organization: 'IFPE',
            period: '2023 - 2024',
            description: 'Auxiliei estudantes em disciplinas técnicas, desenvolvendo habilidades de ensino e comunicação.',
            achievement: 'Nota 9.5 de avaliação',
            icon: '👨‍🏫',
        },
        {
            title: 'Freelancer - Suporte Técnico',
            organization: 'Autônomo',
            period: '2022 - 2024',
            description: 'Manutenção de computadores, suporte remoto e resolução de problemas técnicos.',
            achievement: 'Múltiplos clientes satisfeitos',
            icon: '🔧',
        },
        {
            title: 'Projetos Pessoais - Desenvolvimento',
            organization: 'Autônomo',
            period: '2023 - Presente',
            description: 'Desenvolvimento de aplicações web com React, Node.js, Prisma e PostgreSQL.',
            achievement: 'Portfólio em crescimento',
            icon: '💻',
        },
    ];

    return (
        <section id="experience" className="section-container">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Experiência & <span className="gradient-text">Formação</span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                    Meu histórico profissional e acadêmico
                </p>

                {/* Professional Summary */}
                <motion.div
                    className="card-glass p-8 mb-12 max-w-3xl mx-auto"
                    variants={fadeInUp}
                >
                    <div className="flex items-start gap-4">
                        <div className="text-4xl">👨‍💻</div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3 gradient-text">Resumo Profissional</h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                Técnico em Informática com experiência em manutenção de computadores,
                                suporte remoto e desenvolvimento web com React, Prisma e PostgreSQL.
                                Apaixonado por resolver problemas e criar soluções eficientes.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Experience Timeline */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <FaBriefcase className="text-primary-500" />
                        Experiências Relevantes
                    </h3>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-blue-600"></div>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="relative pl-20 pb-12 last:pb-0"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                {/* Timeline Dot */}
                                <motion.div
                                    className="absolute left-6 top-0 w-5 h-5 bg-primary-500 rounded-full border-4 border-white dark:border-dark-bg"
                                    whileHover={{ scale: 1.5 }}
                                />

                                <div className="card-glass p-6 hover:shadow-2xl transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="text-4xl">{exp.icon}</div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-primary-500 mb-1">{exp.title}</h4>
                                            <p className="text-gray-600 dark:text-gray-400 mb-2">
                                                {exp.organization} • {exp.period}
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 mb-3">{exp.description}</p>
                                            <div className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-semibold">
                                                ⭐ {exp.achievement}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <motion.div className="max-w-4xl mx-auto mb-12" variants={fadeInUp}>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <FaGraduationCap className="text-primary-500" />
                        Educação
                    </h3>
                    <div className="card-glass p-8">
                        <div className="flex items-start gap-4">
                            <div className="text-5xl">🎓</div>
                            <div className="flex-1">
                                <h4 className="text-2xl font-bold mb-2">Técnico em Informática para Internet</h4>
                                <p className="text-xl text-primary-500 mb-2">Instituto Federal de Pernambuco (IFPE)</p>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">2021 - 2024</p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Formação completa em desenvolvimento web, banco de dados, redes e manutenção de sistemas.
                                    Destaque em programação e projetos práticos.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Certifications Preview */}
                <motion.div className="max-w-4xl mx-auto mb-12" variants={fadeInUp}>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <FaCertificate className="text-primary-500" />
                        Certificações
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { name: 'Formação Fullstack', platform: 'DIO', year: '2024' },
                            { name: 'Inteligência Artificial', platform: 'DIO', year: '2024' },
                            { name: 'React Avançado', platform: 'Online', year: '2024' },
                            { name: 'PostgreSQL & Prisma', platform: 'Online', year: '2024' },
                        ].map((cert, index) => (
                            <motion.div
                                key={index}
                                className="card-glass p-4 hover:shadow-lg transition-shadow"
                                whileHover={{ scale: 1.03 }}
                            >
                                <h4 className="font-bold text-lg mb-1">{cert.name}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {cert.platform} • {cert.year}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-6">
                        <a href="#certifications" className="text-primary-500 hover:text-primary-600 font-semibold">
                            Ver todas as certificações →
                        </a>
                    </div>
                </motion.div>

                {/* Languages */}
                <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <FaLanguage className="text-primary-500" />
                        Idiomas
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="card-glass p-6">
                            <h4 className="text-xl font-bold mb-3">Português</h4>
                            <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-3">
                                <div className="bg-gradient-to-r from-primary-500 to-blue-600 h-3 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Nativo</p>
                        </div>
                        <div className="card-glass p-6">
                            <h4 className="text-xl font-bold mb-3">Inglês</h4>
                            <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-3">
                                <div className="bg-gradient-to-r from-primary-500 to-blue-600 h-3 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Intermediário Técnico</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Experience;
