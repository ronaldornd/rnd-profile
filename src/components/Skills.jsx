import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
    FaReact, FaNode, FaGitAlt, FaNpm, FaHtml5, FaCss3Alt, FaDatabase, FaDocker, FaShieldAlt
} from 'react-icons/fa';
import {
    SiPostgresql, SiPrisma, SiTailwindcss, SiExpress, SiVite, SiVercel,
    SiTypescript, SiNextdotjs, SiSupabase, SiSocketdotio, SiVitest, SiJavascript, SiFramer
} from 'react-icons/si';

const Bar = ({ level, delay = 0 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-30px' });
    return (
        <div ref={ref} className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-1.5 overflow-hidden">
            <motion.div
                className="bg-gradient-to-r from-primary-500 to-blue-600 h-full rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: level / 100 } : {}}
                transition={{ duration: 0.7, delay: delay * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
        </div>
    );
};

const allSkills = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, level: 85, cat: 'Lang' },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" />, level: 75, cat: 'Lang' },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 90, cat: 'Lang' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 85, cat: 'Lang' },
    { name: 'React', icon: <FaReact className="text-blue-400" />, level: 80, cat: 'Front' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-gray-200" />, level: 70, cat: 'Front' },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-400" />, level: 85, cat: 'Front' },
    { name: 'Framer Motion', icon: <SiFramer className="text-pink-500" />, level: 70, cat: 'Front' },
    { name: 'Node.js', icon: <FaNode className="text-green-500" />, level: 75, cat: 'Back' },
    { name: 'Express', icon: <SiExpress className="text-gray-400" />, level: 70, cat: 'Back' },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" />, level: 75, cat: 'DB' },
    { name: 'Supabase', icon: <SiSupabase className="text-emerald-500" />, level: 70, cat: 'DB' },
    { name: 'Prisma ORM', icon: <SiPrisma className="text-indigo-500" />, level: 70, cat: 'DB' },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" />, level: 80, cat: 'Tools' },
    { name: 'Vite', icon: <SiVite className="text-amber-400" />, level: 75, cat: 'Tools' },
    { name: 'Vercel / Render', icon: <SiVercel className="text-gray-200" />, level: 70, cat: 'Tools' },
    { name: 'Socket.IO', icon: <SiSocketdotio className="text-gray-300" />, level: 65, cat: 'Tools' },
];

const practices = [
    { icon: <FaShieldAlt className="text-emerald-500" />, label: 'CI/CD com GitHub Actions', ok: true },
    { icon: <SiTypescript className="text-blue-500" />, label: 'Typecheck (TypeScript)', ok: true },
    { icon: <FaDatabase className="text-amber-500" />, label: '.env.example em todos os repos', ok: true },
    { icon: <FaGitAlt className="text-orange-500" />, label: 'Sem secrets commitados', ok: true },
    { icon: <FaDatabase className="text-indigo-500" />, label: 'Monorepo com workspaces', ok: true },
    { icon: <FaDatabase className="text-primary-500" />, label: 'Licença MIT nos repos públicos', ok: true },
    { icon: <FaDocker className="text-blue-400" />, label: 'docker-compose configurado', ok: false, wip: true },
    { icon: <SiVitest className="text-yellow-500" />, label: 'Testes (Jest/Vitest)', ok: false, wip: true },
];

const learning = ['TypeScript', 'Next.js', 'IA / MCP', 'Docker', 'Vitest'];

const tabs = ['Habilidades', 'Práticas', 'Aprendendo'];

const Skills = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabVariants = {
        enter: { opacity: 0, x: 10 },
        center: { opacity: 1, x: 0, transition: { duration: 0.28 } },
        exit: { opacity: 0, x: -10, transition: { duration: 0.18 } },
    };

    return (
        <section id="skills" className="h-full flex flex-col px-4 md:px-8 py-4 overflow-hidden">
            <div className="max-w-6xl mx-auto w-full flex flex-col h-full gap-4">

                {/* Header + Tabs */}
                <div className="flex items-end justify-between flex-wrap gap-3">
                    <div>
                        <p className="text-xs text-primary-500 font-bold uppercase tracking-widest mb-1">Stack & Práticas</p>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Habilidades <span className="gradient-text">Técnicas</span>
                        </h2>
                    </div>
                    <div className="flex gap-1 bg-gray-100 dark:bg-dark-border p-1 rounded-xl">
                        {tabs.map((tab, i) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(i)}
                                className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${activeTab === i ? 'text-white' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                            >
                                {activeTab === i && (
                                    <motion.div layoutId="skills-tab" className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                                )}
                                <span className="relative">{tab}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab content */}
                <div className="flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                        {/* TAB 0: Skills */}
                        {activeTab === 0 && (
                            <motion.div key="skills" variants={tabVariants} initial="enter" animate="center" exit="exit" className="h-full">
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-1.5 overflow-y-auto h-full pr-2">
                                    {allSkills.map((skill, i) => (
                                        <div key={skill.name}>
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center gap-1.5">
                                                    <motion.span className="text-sm" whileHover={{ scale: 1.3 }}>{skill.icon}</motion.span>
                                                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                                </div>
                                                <span className="text-xs text-gray-400 tabular-nums">{skill.level}%</span>
                                            </div>
                                            <Bar level={skill.level} delay={i} />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* TAB 1: Engineering Practices */}
                        {activeTab === 1 && (
                            <motion.div key="practices" variants={tabVariants} initial="enter" animate="center" exit="exit" className="h-full">
                                <div className="grid sm:grid-cols-2 gap-2.5 overflow-y-auto h-full pr-1">
                                    {practices.map((p, i) => (
                                        <motion.div
                                            key={i}
                                            className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${p.ok
                                                ? 'bg-emerald-50 dark:bg-emerald-900/15 border-emerald-200 dark:border-emerald-800/40'
                                                : 'bg-gray-50 dark:bg-dark-border/30 border-gray-200 dark:border-dark-border'
                                            }`}
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.15 }}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0, transition: { delay: i * 0.05 } }}
                                        >
                                            <span className="text-lg flex-shrink-0">{p.icon}</span>
                                            <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{p.label}</span>
                                            {p.ok
                                                ? <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">✓</span>
                                                : <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded-full">WIP</span>
                                            }
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* TAB 2: Learning */}
                        {activeTab === 2 && (
                            <motion.div key="learning" variants={tabVariants} initial="enter" animate="center" exit="exit" className="flex flex-col gap-4 h-full justify-center">
                                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Aprofundando conhecimentos em:</p>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {[
                                        { name: 'TypeScript', emoji: '📘' }, { name: 'Next.js', emoji: '⚡' },
                                        { name: 'IA / MCP', emoji: '🤖' }, { name: 'Docker', emoji: '🐳' },
                                        { name: 'Vitest / Jest', emoji: '🧪' }, { name: 'Arquitetura', emoji: '🏗️' },
                                    ].map((it, i) => (
                                        <motion.div
                                            key={it.name}
                                            className="card-glass px-5 py-3 flex items-center gap-2 text-sm font-semibold"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1, transition: { delay: i * 0.08 } }}
                                            whileHover={{ scale: 1.08, y: -3 }}
                                        >
                                            <span className="text-lg">{it.emoji}</span>
                                            <span className="gradient-text">{it.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap justify-center gap-6 mt-4 text-4xl">
                                    {[<FaReact className="text-blue-400" />, <SiNextdotjs />, <FaNode className="text-green-500" />, <SiPostgresql className="text-blue-600" />, <FaGitAlt className="text-orange-500" />, <SiTailwindcss className="text-cyan-400" />].map((icon, i) => (
                                        <motion.span key={i} className="text-primary-500" whileHover={{ scale: 1.2, y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>{icon}</motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Skills;
