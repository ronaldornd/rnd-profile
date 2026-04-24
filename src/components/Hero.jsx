import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState, useMemo } from 'react';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

const Particle = ({ delay, x, y, size }) => (
    <motion.div
        className="absolute rounded-full bg-primary-500/20 dark:bg-primary-400/15"
        style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
        animate={{
            y: [0, -60, -30, -80, 0],
            x: [0, 20, -15, 30, 0],
            opacity: [0.15, 0.4, 0.25, 0.35, 0.15],
            scale: [1, 1.3, 0.9, 1.15, 1],
        }}
        transition={{
            duration: 10 + Math.random() * 6,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
        }}
    />
);

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = 'transformo ideias em código e conexões em soluções.';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50);

        return () => clearInterval(timer);
    }, []);

    const particles = useMemo(() =>
        Array.from({ length: 12 }, (_, i) => ({
            id: i,
            delay: i * 0.8,
            x: Math.random() * 90 + 5,
            y: Math.random() * 80 + 10,
            size: Math.random() * 12 + 6,
        })), []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    const socialLinks = [
        { href: 'https://github.com/ronaldornd', icon: FaGithub, label: 'GitHub', trackingId: 'github-profile' },
        { href: 'https://linkedin.com/in/ronaldosbarbosaa', icon: FaLinkedin, label: 'LinkedIn', trackingId: 'linkedin_profile' },
        { href: 'mailto:ronaldo.s.barbosa@outlook.com', icon: FaEnvelope, label: 'E-mail', trackingId: 'email_contact', noTarget: true },
        { href: 'https://wa.me/5581997999249', icon: FaWhatsapp, label: 'WhatsApp', trackingId: 'whatsapp_contact' },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-white dark:bg-dark-bg">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

                {/* Floating Particles */}
                {particles.map(p => (
                    <Particle key={p.id} {...p} />
                ))}
            </div>

            <motion.div
                className="section-container text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Avatar/Photo */}
                <motion.div
                    className="mb-8 flex justify-center"
                    variants={itemVariants}
                >
                    <div className="relative">
                        <motion.div
                            className="w-40 h-40 rounded-full bg-gradient-to-r from-primary-500 to-blue-600 p-1"
                            animate={{
                                rotate: [0, 3, -3, 0],
                                scale: [1, 1.03, 1.03, 1],
                                y: [0, -8, 0],
                                boxShadow: [
                                    "0px 10px 30px rgba(54, 247, 16, 0.17)",
                                    "0px 20px 40px rgba(24, 245, 116, 0.42)",
                                    "0px 10px 30px rgba(2, 247, 124, 0.47)"
                                ]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-dark-card flex items-center justify-center text-6xl font-bold gradient-text">
                                <img
                                    src="https://github.com/ronaldornd.png"
                                    alt="Ronaldo"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-green-700"
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6 text-balance"
                    variants={itemVariants}
                >
                    Sou <span className="gradient-text">Ronaldo</span>
                </motion.h1>

                {/* Typing Effect */}
                <motion.div
                    className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 min-h-[4rem]"
                    variants={itemVariants}
                >
                    <span>{text}</span>
                    <motion.span
                        className="inline-block w-0.5 h-6 bg-primary-500 ml-1 align-middle"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 text-pretty"
                    variants={itemVariants}
                >
                    Técnico em Informática formado pelo IFPE, com foco em desenvolvimento web, React e PostgreSQL.
                    Busco minha primeira oportunidade como desenvolvedor júnior.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    variants={itemVariants}
                >

                    <MdKeyboardDoubleArrowDown size={24} className="animate-bounce text-gray-600 dark:text-gray-400" />
                </motion.div>

                {/* Social Links */}
                <motion.div
                    className="flex justify-center gap-6"
                    variants={itemVariants}
                >
                    {socialLinks.map((link) => (
                        <motion.a
                            key={link.trackingId}
                            href={link.href}
                            target={link.noTarget ? undefined : "_blank"}
                            rel={link.noTarget ? undefined : "noopener noreferrer"}
                            data-tracking-id={link.trackingId}
                            className="relative group text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                            whileHover={{ scale: 1.2, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <link.icon size={28} />
                            {/* Tooltip */}
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {link.label}
                            </span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="fixed top-1/2 right-6 transform -translate-x-1/2 -translate-y-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                        <motion.div
                            className="w-2 h-2 bg-primary-500 rounded-full mt-2"
                            animate={{ y: [0, 16, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
