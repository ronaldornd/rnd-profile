import ScrollReveal from './ScrollReveal';
import {
    FaReact, FaNode, FaGitAlt, FaNpm, FaHtml5, FaCss3Alt, FaJs, FaDatabase
} from 'react-icons/fa';
import {
    SiPostgresql, SiPrisma, SiTailwindcss, SiExpress, SiVite, SiVercel
} from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Linguagens',
            icon: '💬',
            skills: [
                { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 85 },
                { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, level: 90 },
                { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
            ],
        },
        {
            title: 'Frameworks',
            icon: '⚛️',
            skills: [
                { name: 'React', icon: <FaReact className="text-blue-400" />, level: 80 },
                { name: 'Node.js', icon: <FaNode className="text-green-500" />, level: 75 },
                { name: 'Express', icon: <SiExpress className="text-gray-600 dark:text-gray-400" />, level: 70 },
            ],
        },
        {
            title: 'Banco de Dados',
            icon: '🗄️',
            skills: [
                { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" />, level: 75 },
                { name: 'Prisma ORM', icon: <SiPrisma className="text-indigo-600" />, level: 70 },
            ],
        },
        {
            title: 'Ferramentas',
            icon: '🛠️',
            skills: [
                { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, level: 80 },
                { name: 'NPM', icon: <FaNpm className="text-red-600" />, level: 85 },
                { name: 'Vite', icon: <SiVite className="text-purple-500" />, level: 75 },
                { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-400" />, level: 85 },
            ],
        },
        {
            title: 'Outros',
            icon: '🚀',
            skills: [
                { name: 'APIs REST', icon: <FaDatabase className="text-blue-500" />, level: 75 },
                { name: 'Deploy (Vercel/Render)', icon: <SiVercel className="text-black dark:text-white" />, level: 70 },
            ],
        },
    ];

    return (
        <section id="skills" className="section-container">
            <ScrollReveal variant="slideUp" once={true} trackingName="Skills">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Habilidades <span className="gradient-text">Técnicas</span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
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
                        className="card-glass p-6"
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
                                            <span className="text-xl">{skill.icon}</span>
                                            <span className="font-semibold text-gray-700 dark:text-gray-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2 overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-primary-500 to-blue-600 h-full rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {/* Additional Info */}
            <ScrollReveal variant="fadeIn" once={true} className="mt-16 max-w-4xl mx-auto card-glass p-8">
                <h3 className="text-2xl font-bold text-center mb-6 gradient-text">
                    Sempre Aprendendo 📚
                </h3>
                <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
                    Atualmente estou aprofundando meus conhecimentos em:
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        { name: 'TypeScript', emoji: '📘' },
                        { name: 'Next.js', emoji: '⚡' },
                        { name: 'Inteligência Artificial', emoji: '🤖' },
                        { name: 'Docker', emoji: '🐳' },
                        { name: 'Testing (Jest/Vitest)', emoji: '🧪' },
                    ].map((learning) => (
                        <div
                            key={learning.name}
                            className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full font-semibold"
                        >
                            <span className="mr-2">{learning.emoji}</span>
                            {learning.name}
                        </div>
                    ))}
                </div>
            </ScrollReveal>

            {/* Fun Visualization */}
            <ScrollReveal variant="fadeIn" once={true} className="mt-12 text-center">
                <div className="flex flex-wrap justify-center items-center gap-8 text-6xl">
                    {[<FaReact />, <FaNode />, <SiPostgresql />, <FaGitAlt />, <SiTailwindcss />].map((icon, i) => (
                        <div
                            key={i}
                            className="text-primary-500"
                        >
                            {icon}
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
};

export default Skills;
