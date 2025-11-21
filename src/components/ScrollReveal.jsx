import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, scrollAnimationVariants } from '../hooks/useScrollAnimation';
import { trackEvent } from '../services/trackingService';

/**
 * Componente wrapper para adicionar animações de scroll e rastreamento de visualização.
 * 
 * @example
 * <ScrollReveal variant="slideUp" trackingName="AboutSection">
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
    className = "",
    trackingName = null // Nova propriedade para rastreamento
}) => {
    const { ref, isInView } = useScrollAnimation({ once, threshold, margin });
    const [hasBeenTracked, setHasBeenTracked] = useState(false);

    // Efeito para rastrear a visualização da seção
    useEffect(() => {
        if (isInView && trackingName && !hasBeenTracked) {
            trackEvent('SECTION_VIEW', { section: trackingName });
            setHasBeenTracked(true);
        }
    }, [isInView, trackingName, hasBeenTracked]);

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
