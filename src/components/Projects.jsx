import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
    FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaDatabase, FaJava,
    FaHtml5, FaCss3Alt, FaStar, FaLock, FaChevronDown, FaLink,
    FaCheckCircle, FaSpinner, FaPauseCircle, FaBook
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
import ScrollReveal from './ScrollReveal';

const STATUS_CONFIG = {
    stable: { label: 'Estável', icon: <FaCheckCircle size={10} />, class: 'status-stable' },
    dev: { label: 'Em desenvolvimento', icon: <FaSpinner size={10} />, class: 'status-dev' },
    paused: { label: 'Pausado', icon: <FaPauseCircle size={10} />, class: 'status-paused' },
};

const projects = [
    {
        id: 1,
        name: 'RonnyZim OS',
        subtitle: 'The Intelligence Interface',
        category: 'ia',
        featured: true,
        status: 'dev',
        type: 'Web',
        lastUpdate: 'Mai 2025',
        description: 'Uma "interface generativa" focada em produtividade e gestão de carreira — conceito de "cérebro digital" com design de alta densidade e foco em reduzir distrações.',
        problem: 'Centralizar contexto pessoal/técnico (skills, experiência, biorritmo) e automatizar busca/triagem de oportunidades.',
        solution: 'Arquitetura com MCP para desacoplar IA de infra, Auth SSR + RLS com Supabase e integração com Gemini/Tavily.',
        features: ['Memory Guardian', 'Market Intelligence', 'Auth SSR + RLS', 'Dashboard de carreira'],
        stack: ['Next.js', 'TypeScript', 'Supabase', 'Framer Motion', 'MCP'],
        challenges: 'Integração do protocolo MCP com SSR e gerenciamento de estado de contexto persistente.',
        nextSteps: ['Dashboard de oportunidades', 'Integrações com LinkedIn API', 'App mobile'],
        image: '🧠',
        github: 'https://github.com/ronaldornd/RonnyZim',
        demo: null,
        ciUrl: 'https://github.com/ronaldornd/RonnyZim/actions',
        isPrivate: false,
        screenshots: [],
    },
    {
        id: 2,
        name: 'EnfeTech Mobile',
        subtitle: 'Educação Gamificada em Enfermagem',
        category: 'mobile',
        featured: true,
        status: 'dev',
        type: 'Mobile',
        lastUpdate: 'Abr 2025',
        description: 'Aplicativo mobile gamificado para técnicos/estudantes de enfermagem, transformando protocolos e cálculos clínicos em uma experiência de estudo progressiva.',
        problem: 'Tornar conteúdos complexos de enfermagem acessíveis e engajadores através de gamificação.',
        solution: 'Empacotamento mobile com Capacitor, persistência local e UI moderna com Tailwind + animações.',
        features: ['XP & Níveis', 'Flashcards interativos', 'Simuladores Clínicos', 'Progresso offline'],
        stack: ['React', 'TailwindCSS', 'Capacitor', 'Framer Motion'],
        challenges: 'Persistência offline com sincronização e feedback tátil consistente cross-platform.',
        nextSteps: ['iOS build', 'Notificações push', 'Modo colaborativo'],
        image: '🏥',
        github: 'https://github.com/ronaldornd/enfetech',
        demo: null,
        ciUrl: 'https://github.com/ronaldornd/enfetech/actions',
        isPrivate: false,
        screenshots: [],
    },
    {
        id: 3,
        name: 'RND Profile',
        subtitle: 'Dashboard Pessoal',
        category: 'frontend',
        status: 'stable',
        type: 'Web',
        lastUpdate: 'Mai 2025',
        description: 'Portfólio pessoal interativo em formato de dashboard com painéis, animações suaves e foco em UX premium.',
        problem: 'Criar um portfólio profissional moderno, responsivo e com identidade visual marcante.',
        solution: 'React 19, Vite, Framer Motion, TailwindCSS e design system com tema dark/light persistente.',
        features: ['Painéis interativos', 'Dark/Light mode', 'Animações', 'Formulário de contato'],
        stack: ['React', 'TailwindCSS', 'Framer Motion', 'JavaScript'],
        challenges: 'Transição suave entre painéis com AnimatePresence e layout dashboard responsivo.',
        nextSteps: ['Internacionalização', 'Lighthouse 100', 'Blog integrado'],
        image: '🚀',
        github: 'https://github.com/ronaldornd/rnd-profile',
        demo: 'https://ronaldornd.vercel.app',
        ciUrl: null,
    },
    {
        id: 4,
        name: 'Live Web',
        subtitle: 'Chat Real-Time',
        category: 'frontend',
        status: 'paused',
        type: 'Web',
        lastUpdate: 'Dez 2023',
        description: 'Front-end de chat em tempo real com login via GitHub OAuth, recebimento em tempo real via Socket.IO e estado global via Context API.',
        problem: 'Criar interface responsiva e moderna para chat em tempo real com autenticação OAuth.',
        solution: 'Integração REST + WebSocket, autenticação GitHub OAuth e gerenciamento de estado com Context API.',
        features: ['GitHub OAuth', 'Chat em tempo real', 'Context API', 'Interface responsiva'],
        stack: ['TypeScript', 'React', 'Socket.IO', 'SCSS'],
        challenges: 'Sincronização de eventos WebSocket com React state sem race conditions.',
        nextSteps: ['Salas privadas', 'Histórico persistente'],
        image: '💬',
        github: 'https://github.com/ronaldornd/Live-web',
        demo: null,
    },
    {
        id: 5,
        name: 'Live Backend',
        subtitle: 'API NLW Heat',
        category: 'backend',
        status: 'paused',
        type: 'API',
        lastUpdate: 'Dez 2023',
        description: 'Backend do sistema de mensagens em tempo real — OAuth GitHub, perfil, mensagens e eventos via Socket.IO.',
        problem: 'Implementar autenticação OAuth, endpoints REST e comunicação WebSocket em tempo real.',
        solution: 'TypeScript no backend, Node.js com integração OAuth e eventos em tempo real via Socket.IO.',
        features: ['OAuth GitHub', 'REST endpoints', 'WebSocket', 'Prisma ORM'],
        stack: ['TypeScript', 'Node.js', 'Socket.IO'],
        challenges: 'Gerenciar salas de socket e broadcasts sem vazamento de memória em sessões longas.',
        nextSteps: ['Rate limiting', 'Testes de integração'],
        image: '🔥',
        github: 'https://github.com/ronaldornd/Live-back',
        demo: null,
    },
    {
        id: 6,
        name: 'Live Native',
        subtitle: 'App Mobile do Chat',
        category: 'mobile',
        status: 'paused',
        type: 'Mobile',
        lastUpdate: 'Dez 2023',
        description: 'Cliente mobile do ecossistema Live — chat em tempo real via React Native + Expo, conectando ao backend via WebSocket.',
        problem: 'Desenvolver versão mobile multiplataforma do sistema de mensagens.',
        solution: 'React Native com Expo, navegação mobile, integração WebSocket e UI adaptativa.',
        features: ['React Native', 'Expo', 'WebSocket client', 'UI adaptativa'],
        stack: ['TypeScript', 'React Native'],
        challenges: 'Gerenciar conexão WebSocket em background no ciclo de vida do app mobile.',
        nextSteps: ['Push notifications', 'Offline mode'],
        image: '📱',
        github: 'https://github.com/ronaldornd/Live-native',
        demo: null,
    },
    {
        id: 7,
        name: 'OxeFood API',
        subtitle: 'Projeto Acadêmico',
        category: 'backend',
        status: 'stable',
        type: 'API',
        lastUpdate: 'Jun 2024',
        description: 'API REST em Java/Spring Boot para sistema de delivery de alimentos — disciplina Desenvolvimento WEB no IFPE.',
        problem: 'Desenvolver API REST completa com fundamentos sólidos de backend.',
        solution: 'APIs REST com Java e Spring Boot, persistência de dados e arquitetura MVC.',
        features: ['CRUD completo', 'Spring Boot', 'MVC pattern', 'Persistência'],
        stack: ['Java', 'Spring Boot'],
        challenges: 'Configurar corretamente as relações JPA e gerenciar transações de banco de dados.',
        nextSteps: ['Adicionar autenticação JWT', 'Deploy em cloud'],
        image: '🍔',
        github: 'https://github.com/ronaldornd/oxefood-api-ronaldornd',
        demo: null,
    },
    {
        id: 8,
        name: 'OxeFood Web',
        subtitle: 'Interface do Delivery',
        category: 'fullstack',
        status: 'stable',
        type: 'Web',
        lastUpdate: 'Jun 2024',
        description: 'Interface web para o sistema OxeFood — CRUD completo, fluxos de UI e integração com API REST do backend.',
        problem: 'Criar interface intuitiva para sistema de pedidos online integrado à API.',
        solution: 'Integrei frontend React com API REST e implementei fluxo completo de pedidos.',
        features: ['CRUD visual', 'Integração REST', 'Fluxo de pedidos', 'SPA'],
        stack: ['JavaScript', 'React'],
        challenges: 'Gerenciar estado global de pedidos e sincronização com a API de forma responsiva.',
        nextSteps: ['Autenticação', 'Carrinho persistente'],
        image: '🌐',
        github: 'https://github.com/ronaldornd/oxefood-web-ronaldornd',
        demo: null,
    },
    {
        id: 9,
        name: 'RND Links',
        subtitle: 'Linktree Pessoal',
        category: 'frontend',
        status: 'stable',
        type: 'Web',
        lastUpdate: 'Jan 2024',
        description: 'Página de links estilo Linktree personalizada com design clean e responsivo.',
        problem: 'Centralizar todos os links importantes em uma única página.',
        solution: 'Landing page simples e efetiva com HTML/CSS puro, foco em design minimalista.',
        features: ['HTML/CSS puro', 'Design responsivo', 'Links sociais', 'Sem dependências'],
        stack: ['HTML', 'CSS'],
        challenges: 'Criar design atraente sem frameworks, com CSS puro e performance máxima.',
        nextSteps: ['Modo escuro', 'Analytics'],
        image: '🔗',
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
        'React': <FaReact className="text-blue-400" />, 'React Native': <FaReact className="text-blue-500" />,
        'Node.js': <FaNode className="text-green-500" />, 'PostgreSQL': <FaDatabase className="text-blue-600" />,
        'Prisma': <SiPrisma className="text-indigo-600" />, 'TailwindCSS': <SiTailwindcss className="text-cyan-400" />,
        'JavaScript': <SiJavascript className="text-yellow-400" />, 'TypeScript': <SiTypescript className="text-blue-600" />,
        'Java': <FaJava className="text-red-600" />, 'Spring Boot': <SiSpringboot className="text-green-600" />,
        'HTML': <FaHtml5 className="text-orange-500" />, 'CSS': <FaCss3Alt className="text-blue-500" />,
        'Framer Motion': <SiFramer className="text-pink-500" />, 'Next.js': <SiNextdotjs className="text-gray-800 dark:text-gray-200" />,
        'Supabase': <SiSupabase className="text-emerald-500" />, 'Socket.IO': <SiSocketdotio className="text-gray-700 dark:text-gray-300" />,
        'Capacitor': <SiCapacitor className="text-blue-500" />, 'MCP': <FaDatabase className="text-amber-500" />,
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
    const labels = { frontend: 'Front-End', backend: 'Back-End', fullstack: 'Fullstack', mobile: 'Mobile', ia: 'IA' };
    return labels[category] || category;
};

const ProjectCard = ({ project }) => {
    const status = STATUS_CONFIG[project.status] || STATUS_CONFIG.dev;

    return (
        <div className="card-glass overflow-hidden h-full flex flex-col md:flex-row">

            {/* LEFT — Visual card (40%) */}
            <div className={`relative md:w-2/5 flex-shrink-0 flex flex-col items-center justify-center ${project.featured
                    ? 'bg-gradient-to-br from-primary-600 via-emerald-500 to-blue-600'
                    : 'bg-gradient-to-br from-primary-500 to-blue-600'
                } p-6 min-h-48`}>

                {/* Badges top-left */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {project.featured && (
                        <span className="badge-featured"><FaStar size={10} />Destaque</span>
                    )}
                    {project.isPrivate && (
                        <span className="badge-private"><FaLock size={10} />Privado</span>
                    )}
                </div>

                {/* Badges top-right */}
                <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
                    <span className={`badge-category ${getCategoryColor(project.category)}`}>
                        {getCategoryLabel(project.category)}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold rounded-full ${status.class}`}>
                        {status.icon}{status.label}
                    </span>
                </div>

                {/* Main icon */}
                <span className="text-7xl mb-3">{project.image}</span>

                {/* Title block */}
                <div className="text-center">
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    {project.subtitle && (
                        <p className="text-xs text-white/70 mt-0.5">{project.subtitle}</p>
                    )}
                    <p className="text-xs text-white/60 mt-1">{project.type} · {project.lastUpdate}</p>
                </div>

                {/* Action links */}
                <div className="flex gap-2 mt-4">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                            data-tracking-id={`project-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                            title="Ver no GitHub">
                            <FaGithub size={16} />
                        </a>
                    )}
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                            data-tracking-id={`project-demo-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                            title="Ver demo">
                            <FaExternalLinkAlt size={14} />
                        </a>
                    )}
                    {project.ciUrl && (
                        <a href={project.ciUrl} target="_blank" rel="noopener noreferrer"
                            className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                            title="GitHub Actions CI">
                            <FaCheckCircle size={14} className="text-green-300" />
                        </a>
                    )}
                </div>
            </div>

            {/* RIGHT — Detail panel (60%) */}
            <div className="flex-1 p-5 flex flex-col gap-3 overflow-y-auto">

                {/* Description */}
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>

                {/* 2-col info grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="space-y-1">
                        <span className="font-bold text-primary-500 block">🎯 Problema</span>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="space-y-1">
                        <span className="font-bold text-primary-500 block">💡 Solução</span>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.solution}</p>
                    </div>
                    <div className="space-y-1">
                        <span className="font-bold text-gray-700 dark:text-gray-300 block">⚠️ Desafios</span>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.challenges}</p>
                    </div>
                    {project.nextSteps && (
                        <div className="space-y-1">
                            <span className="font-bold text-gray-700 dark:text-gray-300 block">🗺️ Próximos passos</span>
                            <ul className="space-y-0.5">
                                {project.nextSteps.map((step, i) => (
                                    <li key={i} className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                        <span className="text-primary-400">→</span>{step}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Features */}
                {project.features && (
                    <div>
                        <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">✨ Funcionalidades</p>
                        <div className="flex flex-wrap gap-1.5">
                            {project.features.map((f, i) => (
                                <span key={i} className="text-xs px-2 py-0.5 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-md font-medium">
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Stack */}
                <div>
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">🛠️ Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech, i) => (
                            <motion.div key={i}
                                className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 dark:bg-dark-border rounded-full text-xs"
                                whileHover={{ scale: 1.06 }}
                            >
                                {getTechIcon(tech)}
                                <span className="font-medium">{tech}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Screenshots */}
                <div>
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">🖼️ Prévia</p>
                    {project.screenshots && project.screenshots.length > 0 ? (
                        <div className="flex gap-2 overflow-x-auto pb-1">
                            {project.screenshots.map((src, i) => (
                                <motion.a key={i} href={src} target="_blank" rel="noopener noreferrer"
                                    className="flex-shrink-0 w-28 h-16 rounded-lg overflow-hidden border border-dark-border hover:border-primary-500 transition-colors"
                                    whileHover={{ scale: 1.04 }}
                                >
                                    <img src={src} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover" />
                                </motion.a>
                            ))}
                        </div>
                    ) : (
                        <p className="text-xs text-gray-500 dark:text-gray-600 italic flex items-center gap-1.5">
                            <span>📸</span> Prints em breve — adicione URLs em <code className="text-primary-500 ml-1">screenshots: []</code>
                        </p>
                    )}
                </div>

                {/* CI badge */}
                {project.ciUrl && (
                    <a href={project.ciUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 hover:underline self-start">
                        <FaCheckCircle size={11} />Ver CI/CD no GitHub Actions
                    </a>
                )}
            </div>
        </div>
    );
};


const Projects = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="h-full flex flex-col px-4 md:px-8 py-4 overflow-hidden">
            <motion.div
                className="max-w-6xl mx-auto w-full flex flex-col h-full gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                {/* Header + filters row */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                        <p className="text-xs text-primary-500 font-bold uppercase tracking-widest mb-1">Portfólio</p>
                        <h2 className="text-2xl md:text-3xl font-bold">Meus <span className="gradient-text">Projetos</span></h2>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {filters.map((f) => (
                            <motion.button
                                key={f.id}
                                onClick={() => setFilter(f.id)}
                                className={`px-3 py-1 rounded-lg font-semibold text-xs transition-all flex items-center gap-1 ${filter === f.id
                                        ? 'bg-gradient-to-r from-primary-500 to-blue-600 text-white shadow-lg shadow-primary-500/25'
                                        : 'bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-dark-border'
                                    }`}
                                whileHover={{ scale: 1.04, y: -1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>{f.icon}</span>{f.name}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Swiper — 1 slide at a time, shows project card + detail side by side */}
                <div className="flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={filter}
                            className="h-full"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.25 }}
                        >
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                grabCursor={true}
                                slidesPerView={1}
                                spaceBetween={20}
                                navigation={{ enabled: true }}
                                pagination={{ clickable: true, dynamicBullets: true }}
                                autoplay={{ delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                                loop={filteredProjects.length > 1}
                                className="projects-swiper h-full"
                                style={{ height: '100%' }}
                                breakpoints={{
                                    1024: { slidesPerView: 1.08, centeredSlides: true },
                                    1280: { slidesPerView: 1.1, centeredSlides: true },
                                }}
                            >
                                {filteredProjects.map((project) => (
                                    <SwiperSlide key={project.id} className="!h-auto">
                                        <ProjectCard project={project} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* CTA footer */}
                <div className="flex items-center justify-between text-xs text-gray-500 flex-shrink-0">
                    <span>{filteredProjects.length} projeto{filteredProjects.length !== 1 ? 's' : ''} exibido{filteredProjects.length !== 1 ? 's' : ''}</span>
                    <a href="https://github.com/ronaldornd" target="_blank" rel="noopener noreferrer"
                        data-tracking-id="github-profile" className="inline-flex items-center gap-1.5 text-primary-500 hover:text-primary-400 font-semibold transition-colors">
                        <FaGithub size={12} />Ver mais no GitHub
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
