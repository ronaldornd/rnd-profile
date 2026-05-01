import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt, FaLinkedin, FaChevronDown, FaCalendarAlt, FaClock, FaStar } from 'react-icons/fa';

const stats = [
    { value: '9.5', label: 'Nota Monitoria', icon: '⭐' },
    { value: '9+', label: 'Projetos GitHub', icon: '💻' },
    { value: '500h+', label: 'Horas de estudo', icon: '📚' },
    { value: '5', label: 'Certificações', icon: '🏅' },
];

const certifications = [
    {
        name: 'Ensino Médio',
        platform: 'E.E. Cel. Benedito Ramos Arantes',
        location: 'Recife – PE',
        date: '2015', icon: '🎓', hours: null, grade: null,
        link: 'https://drive.google.com/file/d/12lCNAdCWe0Do9WwBp2AKeYrtdG3CFZ0U/view?usp=sharing',
        skills: ['Trabalho em equipe', 'Empatia', 'Comunicação', 'Voluntariado'],
        note: 'Participei de ação voluntária em asilo durante o período letivo.',
        description: 'Formação básica completa com destaque em atividades sociais e comunitárias. Base para ingresso no IFPE.',
    },
    {
        name: 'Cybersecurity Essentials',
        platform: 'Cisco Networking Academy / IFPE',
        location: 'Cisco (EAD) + IFPE',
        date: 'Abr 2024', icon: '🔒', hours: '30h', grade: '7,9',
        link: 'https://drive.google.com/file/d/1aWhWIyiVpQ6VsMlWgWp2n49cwYYEexqz/view?usp=drive_link',
        skills: ['CIA Triad', 'TTPs', 'Defesa de redes', 'Legislação LGPD'],
        note: 'Curso oficial da Cisco Networking Academy, realizado em parceria com o IFPE.',
        description: 'Fundamentos de segurança cibernética: ameaças, vulnerabilidades, criptografia, defesa de perímetro e legislação brasileira.',
    },
    {
        name: 'Técnico em Informática para Internet',
        platform: 'IFPE – Campus Jaboatão dos Guararapes',
        location: 'Jaboatão dos Guararapes – PE',
        date: 'Out 2024', icon: '💻', hours: '1.200h', grade: '7,3',
        link: '#',
        skills: ['HTML/CSS/JS', 'React', 'Node.js', 'IHC', 'Empreendedorismo'],
        note: 'Curso técnico de 3 anos com foco em Desenvolvimento Web para Internet.',
        description: 'Formação técnica completa em Desenvolvimento Web: lógica de programação, front-end, back-end, banco de dados, UX/UI e empreendedorismo digital.',
    },
    {
        name: 'GitHub Foundations Certification',
        platform: 'DIO – Digital Innovation One',
        location: 'EAD',
        date: 'Mar 2025', icon: '🐙', hours: '10h', grade: null,
        link: 'https://www.dio.me/certificate/KQXA6YIT/share',
        skills: ['Git flow', 'GitHub Actions', 'Pull Requests', 'Open Source', 'Code Review'],
        note: 'Certificação reconhecida pela plataforma DIO.',
        description: 'Versionamento avançado, workflows de CI/CD com GitHub Actions, colaboração em Open Source e boas práticas de code review.',
    },
    {
        name: 'Intro à IA Generativa',
        platform: 'DIO – Digital Innovation One',
        location: 'EAD',
        date: 'Out 2025', icon: '🤖', hours: '6h', grade: null,
        link: 'https://drive.google.com/file/d/1Wu8VrGN67wJSsJo3J1X3_RFGcutiZrt3/view?usp=drive_link',
        skills: ['LLMs', 'Prompt Engineering', 'Ética da IA', 'Casos de uso', 'RAG'],
        note: 'Tendências e aplicações práticas de IA Generativa.',
        description: 'Fundamentos de IA Generativa, modelos de linguagem (LLMs), engenharia de prompts, RAG (Retrieval-Augmented Generation) e ética no uso de IA.',
    },
];

// Accordion individual — cada card tem seu próprio estado
const CertCard = ({ cert, index }) => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            className="card-glass overflow-hidden self-start"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0, transition: { delay: index * 0.06 } }}
        >
            {/* Header */}
            <button
                onClick={() => setOpen(v => !v)}
                className="w-full flex items-center gap-3 p-3 text-left hover:bg-white/5 transition-colors"
            >
                <span className="text-2xl flex-shrink-0">{cert.icon}</span>
                <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-800 dark:text-gray-200 leading-tight">{cert.name}</p>
                    <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
                        <span className="text-xs text-gray-500 truncate">{cert.platform}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <span className="inline-flex items-center gap-1 text-xs text-primary-500 font-semibold">
                            <FaCalendarAlt size={9} />{cert.date}
                        </span>
                        {cert.hours && (
                            <span className="inline-flex items-center gap-1 text-xs text-gray-400 bg-dark-border px-1.5 py-0.5 rounded font-mono">
                                <FaClock size={9} />{cert.hours}
                            </span>
                        )}
                        {cert.grade && (
                            <span className="text-xs text-emerald-500 font-semibold">
                                <FaStar size={9} className="inline mr-0.5" />{cert.grade}
                            </span>
                        )}
                    </div>
                </div>
                <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400 flex-shrink-0"
                >
                    <FaChevronDown size={12} />
                </motion.div>
            </button>

            {/* Expanded */}
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="detail"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <div className="px-3 pb-3 border-t border-dark-border/50 pt-2.5 space-y-2">
                            {/* Description */}
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{cert.description}</p>

                            {/* Note highlight */}
                            {cert.note && (
                                <p className="text-xs text-amber-500 dark:text-amber-400 italic border-l-2 border-amber-500/50 pl-2">
                                    {cert.note}
                                </p>
                            )}

                            {/* Location */}
                            {cert.location && (
                                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                    <span>📍</span><span>{cert.location}</span>
                                </div>
                            )}

                            {/* Skills */}
                            <div>
                                <p className="text-xs font-bold text-primary-500 mb-1.5">Habilidades desenvolvidas</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {cert.skills.map(s => (
                                        <span key={s} className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-full font-medium">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Link */}
                            {cert.link && cert.link !== '#' && (
                                <a href={cert.link} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-500 hover:text-primary-400 transition-colors">
                                    <FaExternalLinkAlt size={10} />Ver Certificado
                                </a>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const CertificationsAndHighlights = () => {
    const containerAnim = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } };
    const item = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

    return (
        <section id="certifications" className="h-full flex flex-col px-4 md:px-8 py-4 overflow-hidden">
            <motion.div
                className="max-w-6xl mx-auto w-full flex flex-col h-full gap-3"
                variants={containerAnim}
                initial="hidden"
                animate="visible"
            >
                {/* Header */}
                <motion.div variants={item} className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <p className="text-xs text-primary-500 font-bold uppercase tracking-widest mb-1">Conquistas</p>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Certificações & <span className="gradient-text">Destaques</span>
                        </h2>
                    </div>
                    <a href="https://www.linkedin.com/in/ronaldosbarbosaa/" target="_blank" rel="noopener noreferrer"
                        className="btn-secondary text-xs py-1.5 px-3 inline-flex items-center gap-1.5">
                        <FaLinkedin size={11} />Ver LinkedIn
                    </a>
                </motion.div>

                {/* Stats row */}
                <motion.div variants={item} className="grid grid-cols-4 gap-2">
                    {stats.map((s, i) => (
                        <div key={i} className="card-glass p-3 flex items-center gap-2.5">
                            <span className="text-xl">{s.icon}</span>
                            <div>
                                <p className="text-lg font-bold gradient-text leading-tight">{s.value}</p>
                                <p className="text-xs text-gray-500">{s.label}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Cert grid — items-start = cards independentes, sem sincronizar altura */}
                <motion.div variants={item} className="flex-1 overflow-y-auto pr-1">
                    <div className="grid sm:grid-cols-2 gap-2 items-start">
                        {certifications.map((cert, i) => (
                            <CertCard key={i} cert={cert} index={i} />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CertificationsAndHighlights;
