import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

/**
 * Página de demonstração das animações de scroll
 * Adicione no App.jsx para ver funcionando
 */
const ScrollAnimationDemo = () => {
    const cards = Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        title: `Card ${i + 1}`,
        description: 'Este card aparece e desaparece conforme você rola a página',
        color: ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 'bg-orange-500', 'bg-teal-500'][i]
    }));

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center">
                <ScrollReveal variant="scale">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold mb-4">
                            Animações de <span className="gradient-text">Scroll</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                            Role para baixo e veja a mágica acontecer ✨
                        </p>
                        <div className="text-4xl animate-bounce">
                            ⬇️
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Fade In Example */}
            <section className="section-container">
                <ScrollReveal variant="fadeIn">
                    <h2 className="text-4xl font-bold text-center mb-4">
                        Fade In Simples
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                        Aparece com um fade suave
                    </p>
                </ScrollReveal>
            </section>

            {/* Slide Up Example */}
            <section className="section-container bg-gray-100 dark:bg-dark-card">
                <ScrollReveal variant="slideUp">
                    <h2 className="text-4xl font-bold text-center mb-4">
                        Slide Up
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                        Desliza de baixo para cima
                    </p>
                </ScrollReveal>
            </section>

            {/* Two Columns */}
            <section className="section-container">
                <ScrollReveal variant="slideUp">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Direções Diferentes
                    </h2>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <ScrollReveal variant="slideLeft">
                        <div className="card-glass p-8">
                            <h3 className="text-2xl font-bold mb-4 text-primary-500">
                                ⬅️ Da Esquerda
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Este card desliza da esquerda para a direita quando aparece na tela.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="slideRight">
                        <div className="card-glass p-8">
                            <h3 className="text-2xl font-bold mb-4 text-blue-500">
                                Da Direita ➡️
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Este card desliza da direita para a esquerda quando aparece na tela.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Grid with Cascade */}
            <section className="section-container bg-gray-100 dark:bg-dark-card">
                <ScrollReveal variant="slideUp">
                    <h2 className="text-4xl font-bold text-center mb-4">
                        Efeito Cascata
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                        Cards aparecem um após o outro
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {cards.map((card, index) => (
                        <ScrollReveal
                            key={card.id}
                            variant="scale"
                            delay={index * 0.15}
                        >
                            <div className={`${card.color} p-8 rounded-2xl text-white shadow-xl`}>
                                <h3 className="text-2xl font-bold mb-3">
                                    {card.title}
                                </h3>
                                <p className="opacity-90">
                                    {card.description}
                                </p>
                                <div className="mt-4 text-sm opacity-75">
                                    Delay: {(index * 0.15).toFixed(2)}s
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Rotate + Scale */}
            <section className="section-container">
                <ScrollReveal variant="slideUp">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Rotação + Escala
                    </h2>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {[1, 2, 3].map((num, index) => (
                        <ScrollReveal
                            key={num}
                            variant="rotateScale"
                            delay={index * 0.2}
                        >
                            <div className="card-glass p-8 text-center">
                                <div className="text-6xl mb-4">
                                    {['🚀', '⚡', '🎨'][index]}
                                </div>
                                <h3 className="text-xl font-bold gradient-text">
                                    Item {num}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    Gira e escala ao aparecer
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Blur Fade */}
            <section className="section-container bg-gray-100 dark:bg-dark-card">
                <ScrollReveal variant="blurFade">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">
                            Blur + Fade
                        </h2>
                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            Este texto aparece com um efeito de desfoque que vai ficando nítido.
                            É perfeito para destacar conteúdo importante de forma elegante.
                        </p>
                    </div>
                </ScrollReveal>
            </section>

            {/* Repeat vs Once */}
            <section className="section-container">
                <ScrollReveal variant="slideUp">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Repetir vs Uma Vez
                    </h2>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <ScrollReveal variant="slideUp" once={false}>
                        <div className="card-glass p-8 bg-blue-50 dark:bg-blue-900/10">
                            <h3 className="text-2xl font-bold mb-4 text-blue-600">
                                🔄 Sempre Anima
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Este card anima <strong>toda vez</strong> que você rola para cima/baixo.
                                Role para baixo e volte para ver novamente.
                            </p>
                            <div className="mt-4 text-sm bg-blue-100 dark:bg-blue-900/30 p-3 rounded">
                                <code>once={'{false}'}</code>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="slideUp" once={true}>
                        <div className="card-glass p-8 bg-green-50 dark:bg-green-900/10">
                            <h3 className="text-2xl font-bold mb-4 text-green-600">
                                1️⃣ Anima Uma Vez
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Este card anima <strong>apenas uma vez</strong>.
                                Mesmo se você rolar para cima e voltar, ele não anima de novo.
                            </p>
                            <div className="mt-4 text-sm bg-green-100 dark:bg-green-900/30 p-3 rounded">
                                <code>once={'{true}'}</code>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Final Section */}
            <section className="section-container bg-gradient-to-br from-primary-500 to-blue-600 text-white">
                <ScrollReveal variant="scale">
                    <div className="text-center py-20">
                        <h2 className="text-5xl font-bold mb-6">
                            Pronto! 🎉
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Agora você pode aplicar essas animações em todos os seus componentes
                        </p>
                        <motion.div
                            className="text-6xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 360, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            ✨
                        </motion.div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
};

export default ScrollAnimationDemo;
