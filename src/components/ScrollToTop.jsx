import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mostrar botão quando rolar mais de 300px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Função para rolar suavemente para o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all group"
                    initial={{ opacity: 0, scale: 0, y: 100 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0,
                        y: 100,
                        transition: {
                            duration: 0.2
                        }
                    }}
                    whileHover={{
                        scale: 1.1,
                        rotate: 360,
                        transition: { duration: 0.4 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Voltar ao topo"
                >
                    <FaArrowUp className="text-xl group-hover:animate-bounce" />

                    {/* Círculo de progresso */}
                    <motion.svg
                        className="absolute inset-0 w-full h-full -rotate-90"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <motion.circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{
                                pathLength: Math.min(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight), 1)
                            }}
                            transition={{ duration: 0.1 }}
                        />
                    </motion.svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
