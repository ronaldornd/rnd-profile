import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import {
    FaReact, FaNode, FaGitAlt, FaNpm, FaHtml5, FaCss3Alt, FaJs, FaDatabase
} from 'react-icons/fa';
import {
    SiPostgresql, SiPrisma, SiTailwindcss, SiExpress, SiVite, SiVercel,
    SiTypescript, SiNextdotjs, SiSupabase, SiSocketdotio
} from 'react-icons/si';

const AnimatedBar = ({ level, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2 overflow-hidden">
            <motion.div
                className="bg-gradient-to-r from-primary-500 to-blue-600 h-full rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: level / 100 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: delay * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
        </div>
    );
};

const Skills = () => {
    const skillCategories = [
        {
            title: 'Linguagens',
            icon: '💬',
            skills: [
                { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 85 },
                { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, level: 75 },
                { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, level: 90 },
                { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
            ],
        },
        {
            title: 'Frameworks',
            icon: '⚛️',
            skills: [
                { name: 'React', icon: <FaReact className="text-blue-400" />, level: 80 },
                { name: 'Next.js', icon: <SiNextdotjs className="text-gray-800 dark:text-gray-200" />, level: 70 },
                { name: 'Node.js', icon: <FaNode className="text-green-500" />, level: 75 },
                { name: 'Express', icon: <SiExpress className="text-gray-600 dark:text-gray-400" />, level: 70 },
            ],
        },
        {
            title: 'Banco de Dados',
            icon: '🗄️',
            skills: [
                { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" />, level: 75 },
                { name: 'Supabase', icon: <SiSupabase className="text-emerald-500" />, level: 70 },
                { name: 'Prisma ORM', icon: <SiPrisma className="text-indigo-600" />, level: 70 },
            ],
        },
        {
            title: 'Ferramentas',
            icon: '🛠️',
            skills: [
                { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, level: 80 },
                { name: 'NPM', icon: <FaNpm className="text-red-600" />, level: 85 },
                { name: 'Vite', icon: <SiVite className="text-amber-500" />, level: 75 },
                { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-400" />, level: 85 },
            ],
        },
        {
            title: 'Real-time & APIs',
            icon: '🔌',
            skills: [
                { name: 'APIs REST', icon: <FaDatabase className="text-blue-500" />, level: 75 },
                { name: 'Socket.IO', icon: <SiSocketdotio className="text-gray-700 dark:text-gray-300" />, level: 65 },
                { name: 'Deploy (Vercel/Render)', icon: <SiVercel className="text-black dark:text-white" />, level: 70 },
            ],
        },
    ];

    return (
        <section id="skills" className="section-container">
            <ScrollReveal variant="slideUp" once={true}>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
                    Habilidades <span className="gradient-text">Técnicas</span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-pretty">
                    Minha stack de tecnologias e ferramentas
                </p>
            </ScrollReveal>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {skillCategories.map((category, categoryIndex) => (
                    <ScrollReveal
                        key={categoryIndex}
                        variant="scale"
                        delay={categoryIndex * 0.1}
                        threshold={0.1}
                        className="card-glass p-6 group"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-4xl">{category.icon}</span>
                            <h3 className="text-xl font-bold gradient-text">{category.title}</h3>
                        </div>

                        <div className="space-y-4">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex}>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <motion.span
                                                className="text-xl"
                                                whileHover={{ scale: 1.3, rotate: 10 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                {skill.icon}
                                            </motion.span>
                                            <span className="font-semibold text-gray-700 dark:text-gray-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                        <span className="text-sm tabular-nums text-gray-500 dark:text-gray-400">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <AnimatedBar level={skill.level} delay={skillIndex} />
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {/* Additional Info */}
            <ScrollReveal variant="fadeIn" once={true} className="mt-16 max-w-4xl mx-auto card-glass p-8">
                <h3 className="text-2xl font-bold text-center mb-6 gradient-text text-balance">
                    Sempre Aprendendo 📚
                </h3>
                <p className="text-center text-gray-700 dark:text-gray-300 mb-6 text-pretty">
                    Atualmente estou aprofundando meus conhecimentos em:
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        { name: 'TypeScript', emoji: '📘' },
                        { name: 'Next.js', emoji: '⚡' },
                        { name: 'Inteligência Artificial', emoji: '🤖' },
                        { name: 'Docker', emoji: '🐳' },
                        { name: 'Testing (Jest/Vitest)', emoji: '🧪' },
                        { name: 'MCP (Model Context Protocol)', emoji: '🔗' },
                    ].map((learning) => (
                        <motion.div
                            key={learning.name}
                            className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full font-semibold"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span className="mr-2">{learning.emoji}</span>
                            {learning.name}
                        </motion.div>
                    ))}
                </div>
            </ScrollReveal>

            {/* Fun Visualization */}
            <ScrollReveal variant="fadeIn" once={true} className="mt-12 text-center">
                <div className="flex flex-wrap justify-center items-center gap-8 text-6xl">
                    {[
                        { icon: <FaReact />, label: 'React' },
                        { icon: <SiNextdotjs />, label: 'Next.js' },
                        { icon: <FaNode />, label: 'Node.js' },
                        { icon: <SiSupabase />, label: 'Supabase' },
                        { icon: <SiPostgresql />, label: 'PostgreSQL' },
                        { icon: <FaGitAlt />, label: 'Git' },
                        { icon: <SiTailwindcss />, label: 'Tailwind' },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="text-primary-500 relative group cursor-default"
                            whileHover={{ scale: 1.15, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {item.icon}
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
};

export default Skills;
