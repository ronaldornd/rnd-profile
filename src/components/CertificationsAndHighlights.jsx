import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaTrophy, FaStar, FaGithub } from 'react-icons/fa';

const CertificationsAndHighlights = () => {
    const certifications = [
        {
            name: 'Ensino Médio',
            platform: 'E.E. Cel. Benedito Ramos Arantes',
            date: '2015',
            description: 'Formação geral do ensino básico, com destaque para um projeto de voluntariado no terceiro ano. A iniciativa consistia em visitas a um asilo local para oferecer auxílio, suprir necessidades e proporcionar momentos de alegria e companhia para os idosos, tornando seus dias melhores.',
            link: 'https://drive.google.com/file/d/12lCNAdCWe0Do9WwBp2AKeYrtdG3CFZ0U/view?usp=sharing',
            icon: '🎓',
            skills: [
                'Trabalho em equipe',
                'Empatia e responsabilidade social',
                'Comunicação interpessoal',
                'Iniciativa e proatividade'
            ]
        },
        {
            name: 'Cybersecurity Essentials',
            platform: 'Cisco Networking Academy – IFPE',
            date: '02/04/2024',
            description: 'Fundamentos de cibersegurança: CIA Triad, TTPs de cibercriminosos, contramedidas, defesa de redes e legislação em cibersegurança. 30 horas - Nota: 7,9',
            link: 'https://drive.google.com/file/d/1aWhWIyiVpQ6VsMlWgWp2n49cwYYEexqz/view?usp=drive_link',
            icon: '🔒',
            hours: '30 horas',
            grade: '7,9',
            skills: [
                'Confidencialidade, Integridade e Disponibilidade (CIA Triad)',
                'Táticas, Técnicas e Procedimentos de cibercriminosos',
                'Contramedidas de cibersegurança',
                'Tecnologias e processos de defesa de redes',
                'Legislação e ética em cibersegurança'
            ]
        },
        {
            name: 'Curso Técnico em Informática para Internet',
            platform: 'IFPE – Instituto Federal de Pernambuco (Campus Jaboatão dos Guararapes)',
            date: '07/10/2024',
            description: 'Formação técnica focada no desenvolvimento de aplicações web, integração de tecnologias emergentes, design centrado no usuário e práticas profissionais alinhadas ao mercado digital.',
            link: '#',
            icon: '💻',
            hours: '150 horas',
            grade: '7,3',
            skills: [
                'Desenvolvimento de aplicações web responsivas',
                'Interação Humano-Computador (IHC)',
                'Empreendedorismo e inovação em TI',
                'Aplicações de Tecnologias Emergentes',
                'Projeto e Prática Profissional em Informática',
                'Trabalho em equipe e gestão de projetos'
            ]
        },
        {
            name: 'Formação GitHub Certification',
            platform: 'DIO (Digital Innovation One)',
            date: '29/03/2025',
            description: 'Bootcamp focado em fundamentos e boas práticas no uso do Git e GitHub, incluindo versionamento de código, criação de repositórios e colaboração em projetos open source.',
            link: 'https://www.dio.me/certificate/KQXA6YIT/share',
            icon: '🎓',
            hours: '10 horas',
            skills: [
                'Controle de versão com Git',
                'Gerenciamento de repositórios no GitHub',
                'Trabalho colaborativo em equipe com branches e pull requests',
                'Automação e integração com GitHub Actions'
            ]
        },
        {
            name: 'Introdução ao Mundo da Inteligência Artificial (IA) Generativa',
            platform: 'DIO (Digital Innovation One)',
            date: '30/10/2025',
            description: 'Módulo introdutório sobre Inteligência Artificial Generativa, explorando conceitos fundamentais, aplicações práticas e o impacto da IA no mundo atual.',
            link: 'https://drive.google.com/file/d/1Wu8VrGN67wJSsJo3J1X3_RFGcutiZrt3/view?usp=drive_link',
            icon: '🤖',
            hours: '6 horas',
            skills: [
                'Fundamentos de Inteligência Artificial Generativa',
                'Compreensão de modelos de linguagem',
                'Aplicações práticas de IA',
                'Impacto e ética da IA no mundo moderno'
            ]
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
                                className={`card-glass p-6 hover:shadow-2xl transition-all group ${cert.skills ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10' : ''
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                {/* Layout especial para certificados com competências */}
                                {cert.skills ? (
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Coluna esquerda - Informações principais */}
                                        <div>
                                            <div className="flex items-start justify-between mb-4">
                                                <span className="text-5xl">{cert.icon}</span>
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
                                            <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                                                {cert.name}
                                            </h3>
                                            <p className="text-base text-primary-500 font-semibold mb-3">
                                                {cert.platform}
                                            </p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                                {cert.description}
                                            </p>

                                            {/* Informações extras */}
                                            <div className="flex gap-3 mb-3">
                                                {cert.hours && (
                                                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-2 rounded-lg text-sm font-semibold">
                                                        ⏱️ {cert.hours}
                                                    </span>
                                                )}
                                                {cert.grade && (
                                                    <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-2 rounded-lg text-sm font-semibold">
                                                        ⭐ Nota: {cert.grade}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mt-4">
                                                <span className="flex items-center gap-1">
                                                    <FaCertificate />
                                                    Certificado
                                                </span>
                                                <span>{cert.date}</span>
                                            </div>
                                        </div>

                                        {/* Coluna direita - Competências */}
                                        <div className="bg-white/50 dark:bg-dark-bg/50 p-6 rounded-lg">
                                            <p className="text-sm font-bold text-primary-600 dark:text-primary-400 mb-4 flex items-center gap-2">
                                                <span className="text-xl">💡</span>
                                                Competências Adquiridas
                                            </p>
                                            <ul className="space-y-3">
                                                {cert.skills.map((skill, idx) => (
                                                    <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                                                        <span className="text-primary-500 mr-2 text-lg">✓</span>
                                                        <span>{skill}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    /* Layout normal para outros certificados */
                                    <>
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
                                    </>
                                )}
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
                                <div className="text-3xl font-bold text-primary-500 mb-1">8</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">Repositórios</div>
                            </div>
                            <div className="p-4 bg-gray-100 dark:bg-dark-border rounded-lg">
                                <div className="text-3xl font-bold text-primary-500 mb-1">50+</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">Commits</div>
                            </div>
                            <div className="p-4 bg-gray-100 dark:bg-dark-border rounded-lg">
                                <div className="text-3xl font-bold text-primary-500 mb-1">8</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">Projetos</div>
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
