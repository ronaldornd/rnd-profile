import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaTrophy, FaStar, FaGithub, FaLinkedin } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

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
            trackingId: 'certificate-cybersecurity',
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
            color: 'from-rose-400 to-pink-500',
        },
    ];

    return (
        <section id="certifications" className="bg-gray-50 dark:bg-dark-card/30 py-16 md:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal variant="slideUp" once={true}>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
                        Certificações & <span className="gradient-text">Destaques</span>
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-pretty">
                        Minhas conquistas e reconhecimentos
                    </p>
                </ScrollReveal>

                {/* Highlights Section */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {highlights.map((highlight, index) => (
                        <ScrollReveal
                            key={index}
                            variant="scale"
                            delay={index * 0.1}
                            once={true}
                        >
                            <motion.div
                                className={`card-glass p-8 text-center flex flex-col items-center justify-center bg-gradient-to-br ${highlight.color} h-full`}
                                whileHover={{ y: -6, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-5xl text-white mb-4">{highlight.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2 text-balance">{highlight.title}</h3>
                                <p className="text-white/90 text-sm text-pretty">{highlight.description}</p>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Certifications Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <ScrollReveal
                            key={index}
                            variant="slideUp"
                            delay={index * 0.08}
                            once={true}
                        >
                            <motion.div
                                className="card-glass p-6 flex flex-col group h-full"
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="text-4xl">{cert.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold gradient-text mb-1 text-balance">{cert.name}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {cert.platform} • {cert.date}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1 text-pretty">{cert.description}</p>

                                {/* Skills */}
                                <div className="mb-4">
                                    <h4 className="font-semibold mb-2 text-primary-500">Habilidades Adquiridas:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill, i) => (
                                            <span key={i} className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-dark-border flex justify-between items-center">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {cert.hours && <span>{cert.hours}</span>}
                                        {cert.grade && <span className="ml-2">| Nota: {cert.grade}</span>}
                                    </div>
                                    {cert.link && cert.link !== '#' && (
                                        <motion.a
                                            data-tracking-id={cert.trackingId || `certificate-${cert.name.toLowerCase().replace(/\s+/g, '-')}`}
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary text-sm inline-flex items-center gap-2"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Ver <FaExternalLinkAlt size={12} />
                                        </motion.a>
                                    )}
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* CTA */}
                <ScrollReveal variant="fadeIn" once={true} className="text-center mt-16">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Interessado em saber mais sobre minhas qualificações?
                    </p>
                    <a
                        href="https://www.linkedin.com/in/ronaldosbarbosaa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <FaLinkedin />
                        Visitar meu LinkedIn
                    </a>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default CertificationsAndHighlights;
