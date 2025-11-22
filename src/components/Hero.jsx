import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-white dark:bg-dark-bg">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
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
                    className="text-5xl md:text-7xl font-bold mb-6"
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
                    <span className="animate-pulse">|</span>
                </motion.div>

                {/* Description */}
                <motion.p
                    className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
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
                    <motion.a
                        href="https://github.com/ronaldornd"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-tracking-id="github-profile"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaGithub size={28} />
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com/in/ronaldosbarbosaa"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-tracking-id="linkedin_profile"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaLinkedin size={28} />
                    </motion.a>
                    <motion.a
                        href="mailto:ronaldo.s.barbosa@outlook.com"
                        data-tracking-id="email_contact"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaEnvelope size={28} />
                    </motion.a>
                    <motion.a
                        href="https://wa.me/5581982914552"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-tracking-id="whatsapp_contact"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaWhatsapp size={28} />
                    </motion.a>
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
