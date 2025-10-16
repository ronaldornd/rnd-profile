import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaTrophy, FaStar, FaGithub } from 'react-icons/fa';

const CertificationsAndHighlights = () => {
    const certifications = [
        {
            name: 'Formação Fullstack Developer',
            platform: 'Digital Innovation One (DIO)',
            date: 'Outubro 2024',
            description: 'Formação completa em desenvolvimento web fullstack',
            link: '#',
            icon: '🎓',
        },
        {
            name: 'Inteligência Artificial com Python',
            platform: 'Digital Innovation One (DIO)',
            date: 'Outubro 2024',
            description: 'Fundamentos e aplicações de IA',
            link: '#',
            icon: '🤖',
        },
        {
            name: 'React Avançado',
            platform: 'Udemy',
            date: 'Setembro 2024',
            description: 'Hooks, Context API, Performance e otimizações',
            link: '#',
            icon: '⚛️',
        },
        {
            name: 'PostgreSQL & Prisma ORM',
            platform: 'Online Course',
            date: 'Agosto 2024',
            description: 'Banco de dados relacional e ORM moderno',
            link: '#',
            icon: '🗄️',
        },
        {
            name: 'Git & GitHub',
            platform: 'IFPE',
            date: 'Julho 2024',
            description: 'Controle de versão e colaboração',
            link: '#',
            icon: '📚',
        },
        {
            name: 'Técnico em Informática para Internet',
            platform: 'IFPE',
            date: 'Junho 2024',
            description: 'Certificado de conclusão do curso técnico',
            link: '#',
            icon: '🎯',
        },
    ];

    const highlights = [
        {
            title: 'Monitor Destaque',
            description: 'Nota 9.5 na avaliação de monitoria, ajudando dezenas de alunos',
            icon: '🏆',
            color: 'from-yellow-400 to-orange-500',
        },
        {
            title: 'Projetos no GitHub',
            description: 'Portfólio crescente com projetos práticos e bem documentados',
            icon: '💻',
            color: 'from-blue-400 to-indigo-500',
        },
        {
            title: 'Aprendizado Contínuo',
            description: 'Mais de 500 horas de estudo em desenvolvimento web',
            icon: '📚',
            color: 'from-green-400 to-teal-500',
        },
        {
            title: 'Resolução de Problemas',
            description: 'Experiência prática em suporte técnico e debugging',
            icon: '🔧',
            color: 'from-purple-400 to-pink-500',
        },
    ];

    return (
        <section id="certifications" className="section-container bg-gray-50 dark:bg-dark-card/30">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                {/* Certifications Section */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Certificações & <span className="gradient-text">Cursos</span>
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                        Meu compromisso com o aprendizado contínuo
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="card-glass p-6 hover:shadow-2xl transition-all group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <span className="text-4xl">{cert.icon}</span>
                                    {cert.link && (
                                        <motion.a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary-500 hover:text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <FaExternalLinkAlt />
                                        </motion.a>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">
                                    {cert.name}
                                </h3>
                                <p className="text-sm text-primary-500 font-semibold mb-2">
                                    {cert.platform}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                    {cert.description}
                                </p>
                                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <FaCertificate />
                                        Certificado
                                    </span>
                                    <span>{cert.date}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Highlights Section */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Destaques & <span className="gradient-text">Conquistas</span>
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                        Marcos importantes da minha jornada
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                className="card-glass p-8 relative overflow-hidden"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${highlight.color} opacity-10 rounded-full -mr-16 -mt-16`}></div>
                                <div className="relative">
                                    <div className="text-5xl mb-4">{highlight.icon}</div>
                                    <h3 className="text-2xl font-bold mb-3 gradient-text">
                                        {highlight.title}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        {highlight.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* GitHub Stats Card */}
                    <motion.div
                        className="card-glass p-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <FaGithub className="text-5xl text-gray-800 dark:text-gray-200" />
                            <h3 className="text-2xl font-bold gradient-text">GitHub Activity</h3>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="p-4 bg-gray-100 dark:bg-dark-border rounded-lg">
                                <div className="text-3xl font-bold text-primary-500 mb-1">15+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Repositórios</div>
                            </div>
                            <div className="p-4 bg-gray-100 dark:bg-dark-border rounded-lg">
                                <div className="text-3xl font-bold text-primary-500 mb-1">200+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Commits</div>
                            </div>
                            <div className="p-4 bg-gray-100 dark:bg-dark-border rounded-lg">
                                <div className="text-3xl font-bold text-primary-500 mb-1">10+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Projetos</div>
                            </div>
                        </div>
                        <div className="text-center mt-6">
                            <a
                                href="https://github.com/ronaldornd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-500 hover:text-primary-600 font-semibold inline-flex items-center gap-2"
                            >
                                Ver perfil completo no GitHub
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default CertificationsAndHighlights;
