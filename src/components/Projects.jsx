import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaDatabase } from 'react-icons/fa';
import { SiPrisma, SiTailwindcss, SiJavascript } from 'react-icons/si';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            name: 'Sistema de Gerenciamento',
            category: 'fullstack',
            description: 'Sistema completo para gerenciamento de tarefas e projetos com autenticação de usuários.',
            problem: 'Organização de tarefas para equipes pequenas',
            learning: 'Aprendi sobre autenticação JWT e gerenciamento de estado global',
            image: '📊',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Prisma'],
            github: 'https://github.com/ronaldornd',
            demo: '#',
        },
        {
            id: 2,
            name: 'API REST',
            category: 'backend',
            description: 'API robusta para gerenciamento de dados com documentação completa e testes automatizados.',
            problem: 'Necessidade de uma API escalável e bem documentada',
            learning: 'Implementei boas práticas de REST e documentação com Swagger',
            image: '🔌',
            technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
            github: 'https://github.com/ronaldornd',
            demo: null,
        },
        {
            id: 3,
            name: 'Landing Page Interativa',
            category: 'frontend',
            description: 'Landing page moderna com animações suaves e design responsivo.',
            problem: 'Criar uma experiência visual atraente e performática',
            learning: 'Dominei animações com Framer Motion e otimização de performance',
            image: '🎨',
            technologies: ['React', 'TailwindCSS', 'Framer Motion'],
            github: 'https://github.com/ronaldornd',
            demo: '#',
        },
        {
            id: 4,
            name: 'Dashboard Analytics',
            category: 'fullstack',
            description: 'Dashboard para visualização de dados com gráficos interativos e filtros avançados.',
            problem: 'Visualização clara de dados complexos',
            learning: 'Trabalhei com bibliotecas de gráficos e otimização de queries',
            image: '📈',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
            github: 'https://github.com/ronaldornd',
            demo: '#',
        },
    ];

    const filters = [
        { id: 'all', name: 'Todos' },
        { id: 'frontend', name: 'Front-End' },
        { id: 'backend', name: 'Back-End' },
        { id: 'fullstack', name: 'Fullstack' },
    ];

    const getTechIcon = (tech) => {
        const icons = {
            'React': <FaReact className="text-blue-400" />,
            'Node.js': <FaNode className="text-green-500" />,
            'PostgreSQL': <FaDatabase className="text-blue-600" />,
            'Prisma': <SiPrisma className="text-indigo-600" />,
            'TailwindCSS': <SiTailwindcss className="text-cyan-400" />,
            'JavaScript': <SiJavascript className="text-yellow-400" />,
        };
        return icons[tech] || <FaReact />;
    };

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="section-container bg-gray-50 dark:bg-dark-card/30">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Meus <span className="gradient-text">Projetos</span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                    Onde ideias ganham vida através do código
                </p>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((f) => (
                        <motion.button
                            key={f.id}
                            onClick={() => setFilter(f.id)}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all ${filter === f.id
                                    ? 'bg-gradient-to-r from-primary-500 to-blue-600 text-white shadow-lg'
                                    : 'bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:shadow-md'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {f.name}
                        </motion.button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="card-glass overflow-hidden group"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            {/* Project Image/Icon */}
                            <div className="relative h-48 bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center text-8xl">
                                {project.image}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    {project.github && (
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaGithub size={24} />
                                        </motion.a>
                                    )}
                                    {project.demo && (
                                        <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaExternalLinkAlt size={20} />
                                        </motion.a>
                                    )}
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 gradient-text">{project.name}</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

                                {/* Problem & Learning */}
                                <div className="space-y-2 mb-4">
                                    <div className="text-sm">
                                        <span className="font-semibold text-primary-500">🎯 Problema:</span>
                                        <p className="text-gray-600 dark:text-gray-400 mt-1">{project.problem}</p>
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-semibold text-primary-500">💡 Aprendizado:</span>
                                        <p className="text-gray-600 dark:text-gray-400 mt-1">{project.learning}</p>
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-dark-border rounded-full text-sm"
                                        >
                                            {getTechIcon(tech)}
                                            <span>{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Quer ver mais projetos?
                    </p>
                    <a
                        href="https://github.com/ronaldornd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <FaGithub />
                        Visitar meu GitHub
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;
