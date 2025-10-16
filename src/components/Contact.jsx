import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica de envio do formulário
        // Por enquanto, vamos apenas mostrar uma mensagem de sucesso
        setStatus('success');
        setTimeout(() => {
            setStatus('');
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactMethods = [
        {
            icon: <FaEnvelope className="text-3xl" />,
            title: 'E-mail',
            value: 'ronaldo.f.barbosa@outlook.com',
            link: 'mailto:ronaldo.f.barbosa@outlook.com',
            color: 'from-red-500 to-orange-500',
        },
        {
            icon: <FaWhatsapp className="text-3xl" />,
            title: 'WhatsApp',
            value: '+55 (XX) XXXXX-XXXX',
            link: 'https://wa.me/5581982914552',
            color: 'from-green-500 to-teal-500',
        },
        {
            icon: <FaLinkedin className="text-3xl" />,
            title: 'LinkedIn',
            value: '/ronaldosbarbosaa',
            link: 'https://linkedin.com/in/ronaldosbarbosaa',
            color: 'from-blue-500 to-indigo-500',
        },
        {
            icon: <FaGithub className="text-3xl" />,
            title: 'GitHub',
            value: '/ronaldornd',
            link: 'https://github.com/ronaldornd',
            color: 'from-gray-600 to-gray-800',
        },
    ];

    return (
        <section id="contact" className="section-container bg-gray-50 dark:bg-dark-card/30">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Vamos <span className="gradient-text">Conversar?</span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                    Estou sempre aberto a novas oportunidades e projetos interessantes
                </p>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Methods */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
                        <div className="space-y-4 mb-8">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={index}
                                    href={method.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-glass p-4 flex items-center gap-4 hover:shadow-xl transition-all group"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color} text-white`}>
                                        {method.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 dark:text-gray-200">
                                            {method.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {method.value}
                                        </p>
                                    </div>
                                    <motion.div
                                        className="ml-auto text-primary-500 opacity-0 group-hover:opacity-100"
                                        whileHover={{ x: 5 }}
                                    >
                                        →
                                    </motion.div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Current Status */}
                        <motion.div
                            className="card-glass p-6 bg-gradient-to-br from-primary-500/10 to-blue-600/10"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="font-bold text-lg mb-2 gradient-text">Status Atual</h4>
                            <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <span className="text-2xl">📚</span>
                                Aprendendo Inteligência Artificial na DIO
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                Disponível para novas oportunidades!
                            </p>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Sua mensagem aqui..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FaPaperPlane />
                                Enviar Mensagem
                            </motion.button>

                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg text-center font-semibold"
                                >
                                    ✅ Mensagem enviada com sucesso!
                                </motion.div>
                            )}
                        </form>

                        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
                            Ou se preferir, me chame diretamente no WhatsApp! 📱
                        </p>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-16 card-glass p-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-4">
                        Vamos criar algo <span className="gradient-text">incrível</span> juntos! 🚀
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Estou sempre em busca de novos desafios e oportunidades de aprendizado.
                        Se você tem um projeto interessante ou uma vaga que combina com meu perfil,
                        adoraria conversar!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="mailto:ronaldo.f.barbosa@outlook.com" className="btn-primary">
                            Enviar E-mail
                        </a>
                        <a href="https://wa.me/5581982914552" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                            <FaWhatsapp />
                            WhatsApp
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
