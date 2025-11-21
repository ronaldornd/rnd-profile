import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaDatabase, FaJava, FaHtml5, FaCss3Alt, FaMagic } from 'react-icons/fa';
import { SiPrisma, SiTailwindcss, SiJavascript, SiTypescript, SiSpringboot } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            name: 'RND Profile',
            category: 'frontend',
            description: 'Uma página que me descreve, projetos, e habilidades',
            problem: 'Criar um portfolio profissional moderno e interativo',
            learning: 'Aprendi sobre React 19, Vite, Framer Motion e TailwindCSS para criar animações suaves',
            image: '🚀',
            technologies: ['React', 'TailwindCSS', 'Framer Motion', 'JavaScript'],
            github: 'https://github.com/ronaldornd/rnd-profile',
            demo: 'https://ronaldornd.vercel.app',
        },
        {
            id: 2,
            name: 'Live Backend (NLW HEAT)',
            category: 'backend',
            description: 'Backend do projeto NLW-HEAT - Sistema de mensagens em tempo real',
            problem: 'Implementar comunicação em tempo real com WebSocket',
            learning: 'Trabalhei com TypeScript, Node.js e integração com OAuth do GitHub',
            image: '🔥',
            technologies: ['TypeScript', 'Node.js'],
            github: 'https://github.com/ronaldornd/Live-back',
            demo: null,
        },
        {
            id: 3,
            name: 'Live Web (NLW HEAT)',
            category: 'frontend',
            description: 'Frontend do projeto NLW-HEAT - Interface web para mensagens em tempo real',
            problem: 'Criar interface responsiva e moderna para chat em tempo real',
            learning: 'Implementei WebSocket no frontend e autenticação OAuth',
            image: '💬',
            technologies: ['TypeScript', 'React'],
            github: 'https://github.com/ronaldornd/Live-web',
            demo: null,
        },
        {
            id: 4,
            name: 'Live Native (NLW HEAT)',
            category: 'frontend',
            description: 'Aplicativo mobile do projeto NLW-HEAT desenvolvido com React Native',
            problem: 'Desenvolver versão mobile do sistema de mensagens',
            learning: 'Aprendi React Native e desenvolvimento mobile multiplataforma',
            image: '📱',
            technologies: ['TypeScript', 'React Native'],
            github: 'https://github.com/ronaldornd/Live-native',
            demo: null,
        },
        {
            id: 5,
            name: 'OxeFood API',
            category: 'backend',
            description: 'Projeto utilizado como exemplo para a disciplina Desenvolvimento WEB no IFPE Campus Jaboatão dos Guararapes',
            problem: 'Desenvolver API REST completa para sistema de delivery de alimentos',
            learning: 'Aprendi sobre desenvolvimento de APIs REST com Java e Spring Boot',
            image: '🍔',
            technologies: ['Java', 'Spring Boot'],
            github: 'https://github.com/ronaldornd/oxefood-api-ronaldornd',
            demo: null,
        },
        {
            id: 6,
            name: 'OxeFood Web',
            category: 'fullstack',
            description: 'Interface web para o sistema OxeFood - Projeto acadêmico de delivery',
            problem: 'Criar interface intuitiva para sistema de pedidos online',
            learning: 'Integrei frontend React com API REST e implementei fluxo completo de pedidos',
            image: '🌐',
            technologies: ['JavaScript', 'React'],
            github: 'https://github.com/ronaldornd/oxefood-web-ronaldornd',
            demo: null,
        },
        {
            id: 7,
            name: 'RND Links',
            category: 'frontend',
            description: 'Página de links estilo Linktree personalizada',
            problem: 'Centralizar todos os links importantes em uma única página',
            learning: 'Criei uma landing page simples e efetiva com HTML/CSS puro',
            image: '🔗',
            technologies: ['HTML', 'CSS'],
            github: 'https://github.com/ronaldornd/rndlinks',
            demo: 'https://ronaldornd.github.io/rndlinks/',
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
            'React Native': <FaReact className="text-blue-500" />,
            'Node.js': <FaNode className="text-green-500" />,
            'PostgreSQL': <FaDatabase className="text-blue-600" />,
            'Prisma': <SiPrisma className="text-indigo-600" />,
            'TailwindCSS': <SiTailwindcss className="text-cyan-400" />,
            'JavaScript': <SiJavascript className="text-yellow-400" />,
            'TypeScript': <SiTypescript className="text-blue-600" />,
            'Java': <FaJava className="text-red-600" />,
            'Spring Boot': <SiSpringboot className="text-green-600" />,
            'HTML': <FaHtml5 className="text-orange-500" />,
            'CSS': <FaCss3Alt className="text-blue-500" />,
            'Framer Motion': <FaMagic className="text-purple-500" />,
        };
        return icons[tech] || <FaReact />;
    };

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="bg-gray-50 dark:bg-dark-card/30 py-16 md:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal variant="slideUp" once={true} trackingName="Projects">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Meus <span className="gradient-text">Projetos</span>
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                        Onde ideias ganham vida através do código
                    </p>
                </ScrollReveal>

                {/* Filter Buttons */}
                <ScrollReveal variant="fadeIn" once={true} className="flex flex-wrap justify-center gap-4 mb-12">
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
                </ScrollReveal>

                {/* Projects Carousel */}
                <ScrollReveal variant="fadeIn" className="w-full">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        grabCursor={true}
                        centeredSlides={false}
                        slidesPerView={1}
                        spaceBetween={16}
                        navigation={{
                            enabled: true,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={filteredProjects.length > 1}
                        className="projects-swiper !pb-16"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 16,
                                centeredSlides: false,
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                                centeredSlides: false,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                                centeredSlides: false,
                            },
                            1024: {
                                slidesPerView: 2.5,
                                spaceBetween: 30,
                                centeredSlides: true,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                                centeredSlides: true,
                            },
                        }}
                    >
                        {filteredProjects.map((project) => (
                            <SwiperSlide key={project.id} className="!h-auto">
                                <motion.div
                                    className="card-glass overflow-hidden group h-full flex flex-col w-full mx-auto"
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.3 }}
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
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-2xl font-bold mb-2 gradient-text">{project.name}</h3>
                                        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

                                        {/* Problem & Learning */}
                                        <div className="space-y-2 mb-4 flex-1">
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </ScrollReveal>

                {/* CTA */}
                <ScrollReveal variant="fadeIn" once={true} className="text-center mt-12">
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
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Projects;
