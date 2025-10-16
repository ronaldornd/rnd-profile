import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Prof. Wagner Junior',
            role: 'Professor - IFPE',
            content: 'Ronaldx é curioso, dedicado e sempre encontra uma forma criativa de resolver problemas. Sua evolução durante o curso foi notável.',
            avatar: '👨‍🏫',
            rating: 5,
        },
        {
            name: 'Maria Silva',
            role: 'Colega de Turma',
            content: 'Trabalhar com Ronaldx em projetos foi ótimo. Ele tem uma capacidade incrível de explicar conceitos complexos de forma simples.',
            avatar: '👩‍💻',
            rating: 5,
        },
        {
            name: 'João Santos',
            role: 'Cliente de Suporte Técnico',
            content: 'Profissional, paciente e eficiente. Resolveu meu problema de forma rápida e me ensinou a evitar futuros problemas.',
            avatar: '💼',
            rating: 5,
        },
    ];

    return (
        <section id="testimonials" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    <span className="gradient-text">Depoimentos</span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                    O que dizem sobre meu trabalho
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="card-glass p-6 relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-4 right-4 text-primary-500/20 text-4xl">
                                <FaQuoteLeft />
                            </div>

                            {/* Avatar */}
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center text-3xl">
                                    {testimonial.avatar}
                                </div>
                            </div>

                            {/* Content */}
                            <p className="text-gray-700 dark:text-gray-300 mb-4 italic text-center">
                                "{testimonial.content}"
                            </p>

                            {/* Rating */}
                            <div className="flex justify-center gap-1 mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <motion.span
                                        key={i}
                                        className="text-yellow-400 text-xl"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 + i * 0.1 }}
                                    >
                                        ⭐
                                    </motion.span>
                                ))}
                            </div>

                            {/* Author */}
                            <div className="text-center">
                                <h4 className="font-bold text-gray-800 dark:text-gray-200">
                                    {testimonial.name}
                                </h4>
                                <p className="text-sm text-primary-500">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                        Quer trabalhar comigo?
                    </p>
                    <a href="#contact" className="btn-primary">
                        Vamos conversar!
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Testimonials;
