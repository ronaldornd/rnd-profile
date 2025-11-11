import { motion } from 'framer-motion';
import { useScrollAnimation, scrollAnimationVariants } from '../hooks/useScrollAnimation';

/**
 * Componente wrapper para adicionar animações de scroll facilmente
 * 
 * @example
 * <ScrollReveal variant="slideUp">
 *   <div>Seu conteúdo aqui</div>
 * </ScrollReveal>
 */
const ScrollReveal = ({
    children,
    variant = 'slideUp',
    once = false,
    threshold = 0.2,
    margin = "0px 0px -100px 0px",
    delay = 0,
    className = ""
}) => {
    const { ref, isInView } = useScrollAnimation({ once, threshold, margin });

    // Pega a variante pré-definida ou usa a customizada
    const animationVariant = typeof variant === 'string'
        ? scrollAnimationVariants[variant]
        : variant;

    // Adiciona delay se fornecido
    const variants = {
        hidden: animationVariant.hidden,
        visible: {
            ...animationVariant.visible,
            transition: {
                ...animationVariant.visible.transition,
                delay
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
