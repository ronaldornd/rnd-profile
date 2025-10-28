import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { sendContactEmail, sendWhatsAppNotification } from '../services/emailService';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        honeypot: '', // Campo honeypot para detectar bots
    });
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    // Validação em tempo real
    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Nome é obrigatório';
                if (value.trim().length < 3) return 'Nome deve ter no mínimo 3 caracteres';
                if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) return 'Nome deve conter apenas letras';
                return '';

            case 'email':
                if (!value.trim()) return 'E-mail é obrigatório';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'E-mail inválido';
                return '';

            case 'message':
                if (!value.trim()) return 'Mensagem é obrigatória';
                if (value.trim().length < 10) return 'Mensagem deve ter no mínimo 10 caracteres';
                if (value.trim().length > 1000) return 'Mensagem muito longa (máximo 1000 caracteres)';
                return '';

            default:
                return '';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Proteção anti-spam: se o honeypot foi preenchido, é um bot
        if (formData.honeypot) {
            console.log('Bot detectado!');
            return;
        }

        // Validar todos os campos
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            if (key !== 'honeypot') {
                const error = validateField(key, formData[key]);
                if (error) newErrors[key] = error;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setStatus('error');
            return;
        }

        setStatus('sending');
        setErrors({});

        try {
            // Enviar email via EmailJS
            await sendContactEmail({
                name: formData.name,
                email: formData.email,
                message: formData.message,
            });

            // Opcional: Enviar notificação no WhatsApp também
            try {
                await sendWhatsAppNotification({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                });
            } catch (whatsappError) {
                // WhatsApp é opcional, não precisa falhar o envio
                console.warn('Notificação WhatsApp falhou:', whatsappError);
            }

            setStatus('success');
            setTimeout(() => {
                setStatus('');
                setFormData({ name: '', email: '', message: '', honeypot: '' });
                setTouched({});
            }, 5000);

        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        // Validar campo se já foi tocado
        if (touched[name]) {
            const error = validateField(name, value);
            setErrors({
                ...errors,
                [name]: error,
            });
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;

        setTouched({
            ...touched,
            [name]: true,
        });

        // Validar campo ao perder foco
        const error = validateField(name, value);
        setErrors({
            ...errors,
            [name]: error,
        });
    };

    const contactMethods = [
        {
            icon: <FaEnvelope className="text-3xl" />,
            title: 'E-mail',
            value: 'ronaldo.s.barbosa@outlook.com',
            link: 'mailto:ronaldo.s.barbosa@outlook.com',
            color: 'from-red-500 to-orange-500',
        },
        {
            icon: <FaWhatsapp className="text-3xl" />,
            title: 'WhatsApp',
            value: '+55 (81) 98291-4552',
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
                            {/* Campo Honeypot (escondido) - Proteção anti-spam */}
                            <input
                                type="text"
                                name="honeypot"
                                value={formData.honeypot}
                                onChange={handleChange}
                                style={{ display: 'none' }}
                                tabIndex="-1"
                                autoComplete="off"
                            />

                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Nome *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.name && touched.name
                                        ? 'border-red-500 focus:ring-red-500'
                                        : 'border-gray-300 dark:border-dark-border focus:ring-primary-500'
                                        } bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 focus:ring-2 focus:border-transparent transition-all`}
                                    placeholder="Seu nome completo"
                                />
                                {errors.name && touched.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    E-mail *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.email && touched.email
                                        ? 'border-red-500 focus:ring-red-500'
                                        : 'border-gray-300 dark:border-dark-border focus:ring-primary-500'
                                        } bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 focus:ring-2 focus:border-transparent transition-all`}
                                    placeholder="seu@email.com"
                                />
                                {errors.email && touched.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Mensagem *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    rows={5}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.message && touched.message
                                        ? 'border-red-500 focus:ring-red-500'
                                        : 'border-gray-300 dark:border-dark-border focus:ring-primary-500'
                                        } bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 focus:ring-2 focus:border-transparent transition-all resize-none`}
                                    placeholder="Conte-me sobre seu projeto ou oportunidade..."
                                />
                                {errors.message && touched.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                )}
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {formData.message.length}/1000 caracteres
                                </p>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`w-full btn-primary flex items-center justify-center gap-2 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                                    }`}
                                whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                                whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <motion.div
                                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        Enviar Mensagem
                                    </>
                                )}
                            </motion.button>

                            {/* Mensagens de status */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg flex items-center gap-3"
                                >
                                    <span className="text-2xl">✅</span>
                                    <div>
                                        <p className="font-semibold">Mensagem enviada com sucesso!</p>
                                        <p className="text-sm">Retornarei em breve 😊</p>
                                    </div>
                                </motion.div>
                            )}

                            {status === 'error' && Object.keys(errors).length === 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg flex items-center gap-3"
                                >
                                    <span className="text-2xl">❌</span>
                                    <div>
                                        <p className="font-semibold">Erro ao enviar mensagem</p>
                                        <p className="text-sm">Tente novamente ou use outro método de contato</p>
                                    </div>
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
                        <a href="mailto:ronaldo.s.barbosa@outlook.com" className="btn-primary">
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
