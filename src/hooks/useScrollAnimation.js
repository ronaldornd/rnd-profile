import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Hook personalizado para animar elementos com base no scroll
 * Os elementos aparecem ao entrar na viewport e desaparecem ao sair
 * 
 * @param {Object} options - Opções de configuração
 * @param {number} options.threshold - Porcentagem do elemento visível para disparar (0-1)
 * @param {string} options.margin - Margem para disparar antes/depois (ex: "-100px")
 * @param {boolean} options.once - Se true, anima apenas uma vez
 * @returns {Object} - Retorna ref e isInView
 */
export const useScrollAnimation = (options = {}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: options.once || false,
        amount: options.threshold || 0.2,
        margin: options.margin || "0px 0px -100px 0px"
    });

    return { ref, isInView };
};

/**
 * Variantes de animação pré-definidas para usar com motion components
 */
export const scrollAnimationVariants = {
    // Fade In/Out simples
    fadeIn: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6 }
        }
    },

    // Slide de baixo para cima
    slideUp: {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    },

    // Slide de cima para baixo
    slideDown: {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    },

    // Slide da esquerda
    slideLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    },

    // Slide da direita
    slideRight: {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    },

    // Scale (zoom)
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    },

    // Rotate + Scale
    rotateScale: {
        hidden: { opacity: 0, scale: 0.5, rotate: -10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    },

    // Blur + Fade
    blurFade: {
        hidden: { opacity: 0, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 0.6 }
        }
    }
};
