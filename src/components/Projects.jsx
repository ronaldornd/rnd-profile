import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
    FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaDatabase, FaJava,
    FaHtml5, FaCss3Alt, FaMagic, FaStar, FaLock, FaMobileAlt
} from 'react-icons/fa';
import {
    SiPrisma, SiTailwindcss, SiJavascript, SiTypescript, SiSpringboot,
    SiNextdotjs, SiSupabase, SiSocketdotio, SiCapacitor, SiFramer
} from 'react-icons/si';
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
            name: 'RonnyZim OS',
            subtitle: 'The Intelligence Interface',
            category: 'ia',
            featured: true,
            description: 'Uma "interface generativa" focada em produtividade e gestão de carreira — conceito de "cérebro digital" com design de alta densidade e foco em reduzir distrações.',
            problem: 'Centralizar contexto pessoal/técnico (skills, experiência, biorritmo) e automatizar busca/triagem de oportunidades.',
            learning: 'Arquitetura com MCP para desacoplar IA de infra, Auth SSR + RLS com Supabase, e integração com Gemini/Tavily.',
            image: '🧠',
            technologies: ['Next.js', 'TypeScript', 'Supabase', 'Framer Motion', 'MCP'],
            highlights: ['Memory Guardian', 'Market Intelligence', 'Auth SSR + RLS'],
            github: 'https://github.com/ronaldornd/RonnyZim',
            demo: null,
            isPrivate: false,
        },
        {
            id: 2,
            name: 'EnfeTech Mobile',
            subtitle: 'Educação Gamificada em Enfermagem',
            category: 'mobile',
            featured: true,
            description: 'Aplicativo mobile gamificado para técnicos/estudantes de enfermagem, transformando protocolos e cálculos clínicos em uma experiência de estudo progressiva.',
            problem: 'Tornar conteúdos complexos de enfermagem acessíveis e engajadores através de gamificação.',
            learning: 'Empacotamento mobile com Capacitor, persistência local, UI moderna com Tailwind + animações, e feedback tátil.',
            image: '🏥',
            technologies: ['React', 'TailwindCSS', 'Capacitor', 'Framer Motion'],
            highlights: ['XP & Níveis', 'Flashcards', 'Simuladores Clínicos'],
            github: 'https://github.com/ronaldornd/enfetech',
            demo: null,
            isPrivate: false,
        },
        {
            id: 3,
            name: 'RND Profile',
            category: 'frontend',
            description: 'Landing page/portfólio pessoal interativo com seções dinâmicas, animações suaves e foco em UX premium.',
            problem: 'Criar um portfólio profissional moderno, responsivo e com identidade visual marcante.',
            learning: 'React 19, Vite, Framer Motion, TailwindCSS e design system com tema dark/light persistente.',
            image: '🚀',
            technologies: ['React', 'TailwindCSS', 'Framer Motion', 'JavaScript'],
            github: 'https://github.com/ronaldornd/rnd-profile',
            demo: 'https://ronaldornd.vercel.app',
        },
        {
            id: 4,
            name: 'Live Web',
            subtitle: 'Chat Real-Time',
            category: 'frontend',
            description: 'Front-end de chat em tempo real com login via GitHub OAuth, recebimento em tempo real via Socket.IO e estado global via Context API.',
            problem: 'Criar interface responsiva e moderna para chat em tempo real com autenticação OAuth.',
            learning: 'Integração REST + WebSocket, autenticação GitHub OAuth, e gerenciamento de estado com Context API.',
            image: '💬',
            technologies: ['TypeScript', 'React', 'Socket.IO', 'SCSS'],
            github: 'https://github.com/ronaldornd/Live-web',
            demo: null,
        },
        {
            id: 5,
            name: 'Live Backend',
            subtitle: 'API NLW Heat',
            category: 'backend',
            description: 'Backend do sistema de mensagens em tempo real — OAuth GitHub, perfil, mensagens e eventos via Socket.IO.',
            problem: 'Implementar autenticação OAuth, endpoints REST e comunicação WebSocket em tempo real.',
            learning: 'TypeScript no backend, Node.js com integração OAuth e eventos em tempo real.',
            image: '🔥',
            technologies: ['TypeScript', 'Node.js', 'Socket.IO'],
            github: 'https://github.com/ronaldornd/Live-back',
            demo: null,
        },
        {
            id: 6,
            name: 'Live Native',
            subtitle: 'App Mobile do Chat',
            category: 'mobile',
            description: 'Cliente mobile do ecossistema Live — chat em tempo real via React Native + Expo, conectando ao backend via WebSocket.',
            problem: 'Desenvolver versão mobile multiplataforma do sistema de mensagens.',
            learning: 'React Native com Expo, navegação mobile, integração WebSocket e UI adaptativa.',
            image: '📱',
            technologies: ['TypeScript', 'React Native'],
            github: 'https://github.com/ronaldornd/Live-native',
            demo: null,
        },
        {
            id: 7,
            name: 'OxeFood API',
            subtitle: 'Projeto Acadêmico',
            category: 'backend',
            description: 'API REST em Java/Spring Boot para sistema de delivery de alimentos — disciplina Desenvolvimento WEB no IFPE.',
            problem: 'Desenvolver API REST completa com fundamentos sólidos de backend.',
            learning: 'APIs REST com Java e Spring Boot, persistência de dados, e arquitetura MVC.',
            image: '🍔',
            technologies: ['Java', 'Spring Boot'],
            github: 'https://github.com/ronaldornd/oxefood-api-ronaldornd',
            demo: null,
        },
        {
            id: 8,
            name: 'OxeFood Web',
            category: 'fullstack',
            description: 'Interface web para o sistema OxeFood — CRUD completo, fluxos de UI e integração com API REST do backend.',
            problem: 'Criar interface intuitiva para sistema de pedidos online.',
            learning: 'Integrei frontend React com API REST e implementei fluxo completo de pedidos.',
            image: '🌐',
            technologies: ['JavaScript', 'React'],
            github: 'https://github.com/ronaldornd/oxefood-web-ronaldornd',
            demo: null,
        },
        {
            id: 9,
            name: 'RND Links',
            category: 'frontend',
            description: 'Página de links estilo Linktree personalizada com design clean e responsivo.',
            problem: 'Centralizar todos os links importantes em uma única página.',
            learning: 'Landing page simples e efetiva com HTML/CSS puro, foco em design minimalista.',
            image: '🔗',
            technologies: ['HTML', 'CSS'],
            github: 'https://github.com/ronaldornd/rndlinks',
            demo: 'https://ronaldornd.github.io/rndlinks/',
        },
    ];

    const filters = [
        { id: 'all', name: 'Todos', icon: '🌟' },
        { id: 'frontend', name: 'Front-End', icon: '🎨' },
        { id: 'backend', name: 'Back-End', icon: '⚙️' },
        { id: 'fullstack', name: 'Fullstack', icon: '🔄' },
        { id: 'mobile', name: 'Mobile', icon: '📱' },
        { id: 'ia', name: 'IA', icon: '🤖' },
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
            'Framer Motion': <SiFramer className="text-pink-500" />,
            'Next.js': <SiNextdotjs className="text-gray-800 dark:text-gray-200" />,
            'Supabase': <SiSupabase className="text-emerald-500" />,
            'Socket.IO': <SiSocketdotio className="text-gray-700 dark:text-gray-300" />,
            'Capacitor': <SiCapacitor className="text-blue-500" />,
            'MCP': <FaDatabase className="text-amber-500" />,
            'SCSS': <FaCss3Alt className="text-pink-400" />,
        };
        return icons[tech] || <FaReact />;
    };

    const getCategoryColor = (category) => {
        const colors = {
            frontend: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
            backend: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
            fullstack: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300',
            mobile: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
            ia: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
        };
        return colors[category] || '';
    };

    const getCategoryLabel = (category) => {
        const labels = {
            frontend: 'Front-End',
            backend: 'Back-End',
            fullstack: 'Fullstack',
            mobile: 'Mobile',
            ia: 'IA',
        };
        return labels[category] || category;
    };

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="bg-gray-50 dark:bg-dark-card/30 py-16 md:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal variant="slideUp" once={true}>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
                        Meus <span className="gradient-text">Projetos</span>
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-pretty">
                        Onde ideias ganham vida através do código
                    </p>
                </ScrollReveal>

                {/* Filter Buttons */}
                <ScrollReveal variant="fadeIn" once={true} className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map((f) => (
                        <motion.button
                            key={f.id}
                            onClick={() => setFilter(f.id)}
                            className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${filter === f.id
                                ? 'bg-gradient-to-r from-primary-500 to-blue-600 text-white shadow-lg shadow-primary-500/25'
                                : 'bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-dark-border'
                                }`}
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>{f.icon}</span>
                            {f.name}
                        </motion.button>
                    ))}
                </ScrollReveal>

                {/* Projects Carousel */}
                <ScrollReveal variant="fadeIn" className="w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={filter}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
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
                                    delay: 6000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                loop={filteredProjects.length > 2}
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
                                            className={`${project.featured ? 'card-glass-featured' : 'card-glass'} overflow-hidden group h-full flex flex-col w-full mx-auto`}
                                            whileHover={{ y: -8 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Project Image/Icon Header */}
                                            <div className={`relative h-48 flex items-center justify-center text-8xl ${
                                                project.featured
                                                    ? 'bg-gradient-to-br from-primary-600 via-emerald-500 to-blue-600'
                                                    : 'bg-gradient-to-br from-primary-500 to-blue-600'
                                            }`}>
                                                {/* Featured badge */}
                                                {project.featured && (
                                                    <div className="absolute top-3 left-3 z-10">
                                                        <span className="badge-featured">
                                                            <FaStar size={10} />
                                                            Destaque
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Category badge */}
                                                <div className="absolute top-3 right-3 z-10">
                                                    <span className={`badge-category ${getCategoryColor(project.category)}`}>
                                                        {getCategoryLabel(project.category)}
                                                    </span>
                                                </div>

                                                {project.image}

                                                {/* Hover overlay with links */}
                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                                    {project.github && (
                                                        <motion.a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            data-tracking-id={`project-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
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
                                                            data-tracking-id={`project-demo-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
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
                                                <div className="flex items-start justify-between mb-2">
                                                    <div>
                                                        <h3 className="text-2xl font-bold gradient-text">{project.name}</h3>
                                                        {project.subtitle && (
                                                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                                                                {project.subtitle}
                                                            </p>
                                                        )}
                                                    </div>
                                                    {project.isPrivate && (
                                                        <span className="badge-private">
                                                            <FaLock size={10} /> Privado
                                                        </span>
                                                    )}
                                                </div>

                                                <p className="text-gray-700 dark:text-gray-300 mb-4 text-pretty">
                                                    {project.description}
                                                </p>

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

                                                {/* Highlights for featured projects */}
                                                {project.highlights && (
                                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                                        {project.highlights.map((h, i) => (
                                                            <span
                                                                key={i}
                                                                className="text-xs px-2 py-0.5 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-md font-medium"
                                                            >
                                                                {h}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Technologies */}
                                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-dark-border">
                                                    {project.technologies.map((tech, i) => (
                                                        <motion.div
                                                            key={i}
                                                            className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-dark-border rounded-full text-sm"
                                                            whileHover={{ scale: 1.05 }}
                                                        >
                                                            {getTechIcon(tech)}
                                                            <span className="text-xs font-medium">{tech}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </AnimatePresence>
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
                        data-tracking-id="github-profile"
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
