import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaClock, FaRocket, FaCode, FaLayerGroup } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { useEffect, useState, useMemo } from 'react';

const Particle = ({ delay, x, y, size }) => (
    <motion.div
        className="absolute rounded-full bg-primary-500/20 dark:bg-primary-400/10 pointer-events-none"
        style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
        animate={{ y: [0, -50, -20, -70, 0], x: [0, 15, -10, 25, 0], opacity: [0.1, 0.35, 0.15, 0.3, 0.1] }}
        transition={{ duration: 10 + Math.random() * 6, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
);

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = 'transformo ideias em código e conexões em soluções.';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) { setText(fullText.slice(0, index + 1)); index++; }
            else clearInterval(timer);
        }, 45);
        return () => clearInterval(timer);
    }, []);

    const particles = useMemo(() =>
        Array.from({ length: 8 }, (_, i) => ({
            id: i, delay: i * 1.2,
            x: Math.random() * 85 + 5, y: Math.random() * 80 + 5,
            size: Math.random() * 8 + 4,
        })), []);

    const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
    const item = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } } };

    const socialLinks = [
        { href: 'https://github.com/ronaldornd', icon: FaGithub, label: 'GitHub', trackingId: 'github-profile' },
        { href: 'https://linkedin.com/in/ronaldosbarbosaa', icon: FaLinkedin, label: 'LinkedIn', trackingId: 'linkedin_profile' },
        { href: 'mailto:ronaldo.s.barbosa@outlook.com', icon: FaEnvelope, label: 'E-mail', trackingId: 'email_contact', noTarget: true },
        { href: 'https://wa.me/5581997999249', icon: FaWhatsapp, label: 'WhatsApp', trackingId: 'whatsapp_contact' },
    ];

    const stats = [
        { label: 'Projetos', value: '9+', icon: FaLayerGroup },
        { label: 'Tecnologias', value: '15+', icon: FaCode },
        { label: 'Meses dev', value: '18+', icon: FaClock },
    ];

    return (
        <section id="home" className="h-full flex items-center relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary-500/15 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-blue-500/12 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                {particles.map(p => <Particle key={p.id} {...p} />)}
            </div>

            <motion.div
                className="w-full px-6 md:px-10 py-6"
                variants={stagger}
                initial="hidden"
                animate="visible"
            >
                {/* 2-column layout: left = info, right = avatar + stats */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

                    {/* LEFT COLUMN */}
                    <div>
                        {/* Badge */}
                        <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 text-xs font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                            Disponível · Construtor de interfaces e sistemas web
                        </motion.div>

                        {/* Name */}
                        <motion.h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight" variants={item}>
                            Sou <span className="gradient-text">Ronaldo</span>
                        </motion.h1>

                        {/* Typing */}
                        <motion.div className="text-base md:text-lg text-gray-400 mb-3 min-h-[1.5rem]" variants={item}>
                            <span>{text}</span>
                            <motion.span
                                className="inline-block w-0.5 h-4 bg-primary-500 ml-0.5 align-middle"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.7, repeat: Infinity }}
                            />
                        </motion.div>

                        {/* Description */}
                        <motion.p className="text-sm text-gray-500 dark:text-gray-400 mb-5 max-w-md" variants={item}>
                            Desenvolvimento Web para Internet (IFPE) · React · Node.js · PostgreSQL
                        </motion.p>

                        {/* Social Links */}
                        <motion.div className="flex gap-4 mb-6" variants={item}>
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.trackingId}
                                    href={link.href}
                                    target={link.noTarget ? undefined : '_blank'}
                                    rel={link.noTarget ? undefined : 'noopener noreferrer'}
                                    data-tracking-id={link.trackingId}
                                    className="group relative text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors"
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <link.icon size={22} />
                                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                        {link.label}
                                    </span>
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Availability grid */}
                        <motion.div className="grid grid-cols-3 gap-2" variants={item}>
                            {[
                                { icon: FaRocket, label: 'O que faço', val: 'Construo interfaces', sub: 'Front-end · Fullstack · IA' },
                                { icon: FaMapMarkerAlt, label: 'Modalidade', val: 'Remoto / Híbrido', sub: 'Aberto a presencial PE' },
                                { icon: FaClock, label: 'Canal', val: 'LinkedIn · E-mail', sub: 'Resp. em até 24h' },
                            ].map((it, i) => (
                                <div key={i} className="card-glass p-3 flex flex-col gap-1">
                                    <div className="flex items-center gap-1.5 text-primary-500 mb-0.5">
                                        <it.icon size={11} />
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{it.label}</span>
                                    </div>
                                    <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 leading-tight">{it.val}</p>
                                    <p className="text-xs text-gray-500 leading-tight">{it.sub}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col items-center gap-5">
                        {/* Avatar */}
                        <motion.div variants={item} className="relative">
                            <motion.div
                                className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-primary-500 to-blue-600 p-1"
                                animate={{ y: [0, -8, 0], boxShadow: ['0px 8px 24px rgba(34,197,94,0.2)', '0px 16px 40px rgba(34,197,94,0.4)', '0px 8px 24px rgba(34,197,94,0.2)'] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <img src="https://github.com/ronaldornd.png" alt="Ronaldo" className="w-full h-full rounded-xl object-cover" />
                            </motion.div>
                            <motion.div className="absolute -bottom-2 -right-2 bg-green-500 w-5 h-5 rounded-full border-4 border-dark-bg" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                        </motion.div>

                        {/* Stats */}
                        <motion.div variants={item} className="grid grid-cols-3 gap-3 w-full max-w-sm">
                            {stats.map((stat, i) => (
                                <div key={i} className="card-glass p-3 text-center">
                                    <stat.icon className="text-primary-500 mx-auto mb-1" size={16} />
                                    <p className="text-xl font-bold gradient-text">{stat.value}</p>
                                    <p className="text-xs text-gray-500">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Nav hint */}
                        <motion.div variants={item} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-600">
                            <MdKeyboardDoubleArrowRight size={16} className="animate-bounce text-primary-500" />
                            Use as teclas ← → ou a sidebar para navegar
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
