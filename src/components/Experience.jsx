import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        { icon: '👨‍🏫', title: 'Monitor de Disciplina', org: 'IFPE', period: '2023–2024', desc: 'Auxiliei estudantes em disciplinas técnicas.', badge: '⭐ 9.5', color: 'from-yellow-500 to-orange-500' },
        { icon: '🔧', title: 'Freelancer – Suporte', org: 'Autônomo', period: '2022–2024', desc: 'Manutenção, suporte remoto e resolução de problemas técnicos.', badge: 'Múltiplos clientes', color: 'from-blue-500 to-indigo-500' },
        { icon: '💻', title: 'Dev – Projetos Pessoais', org: 'Autônomo', period: '2023–Atual', desc: 'React, Node.js, Prisma e PostgreSQL em produção.', badge: '9+ projetos', color: 'from-primary-500 to-teal-500' },
    ];

    const education = [
        { icon: '🎓', title: 'Técnico em Informática', org: 'IFPE – Campus Jaboatão', period: '2022–2024', hours: '150h', grade: '7.3' },
        { icon: '📚', title: 'Ensino Médio', org: 'E.E. Cel. Benedito Ramos', period: '2013–2015', note: 'Voluntariado em asilo' },
    ];

    const certs = [
        { icon: '🐙', name: 'GitHub Certification', platform: 'DIO', date: 'Mar 2025' },
        { icon: '🔒', name: 'Cybersecurity Essentials', platform: 'Cisco / IFPE', date: 'Abr 2024' },
        { icon: '🤖', name: 'IA Generativa', platform: 'DIO', date: 'Out 2025' },
    ];

    const containerAnim = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
    const item = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

    return (
        <section id="experience" className="h-full flex flex-col justify-center px-4 md:px-8 py-4 overflow-hidden">
            <motion.div
                className="max-w-6xl mx-auto w-full"
                variants={containerAnim}
                initial="hidden"
                animate="visible"
            >
                {/* Header row */}
                <motion.div variants={item} className="mb-5">
                    <p className="text-xs text-primary-500 font-bold uppercase tracking-widest mb-1">Histórico</p>
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Experiência & <span className="gradient-text">Formação</span>
                    </h2>
                </motion.div>

                {/* 3-column grid */}
                <div className="grid md:grid-cols-3 gap-5">

                    {/* COL 1: Resumo profissional + Experiências */}
                    <motion.div variants={item} className="md:col-span-2 flex flex-col gap-3">
                        {/* Resumo card */}
                        <div className="card-glass p-4 flex items-start gap-3">
                            <span className="text-2xl">👨‍💻</span>
                            <div>
                                <p className="text-sm font-bold text-primary-500 mb-1">Resumo Profissional</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                    Técnico em Informática com experiência em manutenção, suporte remoto e desenvolvimento web com React, Prisma e PostgreSQL. Apaixonado por resolver problemas e criar soluções eficientes.
                                </p>
                            </div>
                        </div>

                        {/* Experience cards */}
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider flex items-center gap-2">
                            <FaBriefcase className="text-primary-500" size={11} />Experiências Relevantes
                        </p>
                        <div className="grid sm:grid-cols-3 gap-3">
                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    className="card-glass p-3 flex flex-col gap-2 group"
                                    whileHover={{ y: -3 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center text-sm`}>
                                        {exp.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-tight">{exp.title}</p>
                                        <p className="text-xs text-gray-500">{exp.org} · {exp.period}</p>
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 flex-1">{exp.desc}</p>
                                    <span className="text-xs font-bold text-primary-500 bg-primary-500/10 px-2 py-0.5 rounded-full self-start">{exp.badge}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* COL 2: Formação + Certificações destaque */}
                    <motion.div variants={item} className="flex flex-col gap-3">
                        {/* Formação */}
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider flex items-center gap-2 mb-2">
                                <FaGraduationCap className="text-primary-500" size={11} />Formação
                            </p>
                            <div className="space-y-2">
                                {education.map((edu, i) => (
                                    <motion.div
                                        key={i}
                                        className="card-glass p-3 flex items-start gap-2"
                                        whileHover={{ x: 3 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <span className="text-xl">{edu.icon}</span>
                                        <div>
                                            <p className="text-xs font-bold text-gray-800 dark:text-gray-200">{edu.title}</p>
                                            <p className="text-xs text-gray-500">{edu.org}</p>
                                            <div className="flex gap-2 mt-0.5">
                                                <span className="text-xs text-primary-500 font-semibold">{edu.period}</span>
                                                {edu.grade && <span className="text-xs text-gray-400">· Nota {edu.grade}</span>}
                                                {edu.note && <span className="text-xs text-gray-400">· {edu.note}</span>}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Certificações destaque */}
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider flex items-center gap-2 mb-2">
                                <FaAward className="text-primary-500" size={11} />Certificações Recentes
                            </p>
                            <div className="space-y-2">
                                {certs.map((cert, i) => (
                                    <motion.div
                                        key={i}
                                        className="card-glass p-2.5 flex items-center gap-2.5"
                                        whileHover={{ x: 3 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <span className="text-lg">{cert.icon}</span>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-bold text-gray-800 dark:text-gray-200 truncate">{cert.name}</p>
                                            <p className="text-xs text-gray-500">{cert.platform} · {cert.date}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 mt-2 text-center">
                                → Ver todas em <span className="text-primary-500 font-semibold cursor-default">Certificações</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
