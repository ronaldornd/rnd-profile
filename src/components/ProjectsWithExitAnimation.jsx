import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

/**
 * Exemplo de como usar AnimatePresence com filtros
 * Este componente demonstra animações de entrada e saída em projetos filtrados
 */
const ProjectsWithExitAnimation = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        { id: 1, name: 'Projeto Frontend', category: 'frontend', color: '#0cdcf7' },
        { id: 2, name: 'Projeto Backend', category: 'backend', color: '#f70c8f' },
        { id: 3, name: 'Projeto Fullstack', category: 'fullstack', color: '#8f0cf7' },
        { id: 4, name: 'Outro Frontend', category: 'frontend', color: '#0cf77c' },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    const filters = [
        { label: 'Todos', value: 'all' },
        { label: 'Frontend', value: 'frontend' },
        { label: 'Backend', value: 'backend' },
        { label: 'Fullstack', value: 'fullstack' },
    ];

    return (
        <section className="section-container">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">
                    Projetos com <span className="gradient-text">Exit Animation</span>
                </h2>

                {/* Filtros */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((f) => (
                        <motion.button
                            key={f.value}
                            onClick={() => setFilter(f.value)}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all ${filter === f.value
                                    ? 'bg-primary-500 text-white'
                                    : 'bg-gray-200 dark:bg-dark-card text-gray-700 dark:text-gray-300'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {f.label}
                        </motion.button>
                    ))}
                </div>

                {/* Grid de Projetos com AnimatePresence */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={filter}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{
                                        opacity: 0,
                                        scale: 0.8,
                                        y: 50
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        y: 0
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.8,
                                        y: -50,
                                        transition: {
                                            duration: 0.2,
                                            delay: index * 0.05
                                        }
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.1
                                    }}
                                    className="card-glass p-6 hover:shadow-2xl transition-shadow"
                                    style={{
                                        borderTop: `4px solid ${project.color}`
                                    }}
                                >
                                    <h3 className="text-xl font-bold mb-2 gradient-text">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                        Categoria: {project.category}
                                    </p>
                                    <div className="flex gap-3">
                                        <motion.button
                                            className="flex items-center gap-2 text-sm text-primary-500 hover:text-primary-600"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaGithub /> GitHub
                                        </motion.button>
                                        <motion.button
                                            className="flex items-center gap-2 text-sm text-primary-500 hover:text-primary-600"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaExternalLinkAlt /> Demo
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </AnimatePresence>

                {/* Mensagem quando não há projetos */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-xl text-gray-500 dark:text-gray-400">
                            Nenhum projeto encontrado nesta categoria
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ProjectsWithExitAnimation;
