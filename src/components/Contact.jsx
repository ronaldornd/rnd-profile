import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaPaperPlane,
    FaClock, FaHistory
} from 'react-icons/fa';
import { sendContactEmail, sendWhatsAppNotification } from '../services/emailService';
import Footer from './Footer';

const changelog = [
    { date: 'Mai 2025', text: 'Dashboard interativo com painéis' },
    { date: 'Mai 2025', text: 'CI no EnfeTech via GitHub Actions' },
    { date: 'Abr 2025', text: 'Publicado RonnyZim OS' },
    { date: 'Mar 2025', text: 'Limpeza Live-back: removido .env' },
    { date: 'Mar 2025', text: 'GitHub Certification na DIO' },
];

const contactMethods = [
    { icon: FaEnvelope, title: 'E-mail', value: 'ronaldo.s.barbosa@outlook.com', link: 'mailto:ronaldo.s.barbosa@outlook.com', color: 'from-red-500 to-orange-500', preferred: true, trackingId: 'contact-method-email' },
    { icon: FaWhatsapp, title: 'WhatsApp', value: '+55 (81) 99799-9249', link: 'https://wa.me/5581997999249', color: 'from-green-500 to-teal-500', trackingId: 'contact-method-whatsapp' },
    { icon: FaLinkedin, title: 'LinkedIn', value: '/ronaldosbarbosaa', link: 'https://linkedin.com/in/ronaldosbarbosaa', color: 'from-blue-500 to-indigo-500', preferred: true, trackingId: 'contact-method-linkedin' },
    { icon: FaGithub, title: 'GitHub', value: '/ronaldornd', link: 'https://github.com/ronaldornd', color: 'from-gray-600 to-gray-800', trackingId: 'contact-method-github' },
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
    const [status, setStatus] = useState('');
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validate = (name, value) => {
        if (name === 'name') {
            if (!value.trim()) return 'Obrigatório';
            if (value.trim().length < 3) return 'Mínimo 3 chars';
            if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) return 'Apenas letras';
        }
        if (name === 'email') {
            if (!value.trim()) return 'Obrigatório';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'E-mail inválido';
        }
        if (name === 'message') {
            if (!value.trim()) return 'Obrigatório';
            if (value.trim().length < 10) return 'Mínimo 10 chars';
            if (value.trim().length > 1000) return 'Máximo 1000';
        }
        return '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.honeypot) return;
        const errs = {};
        ['name', 'email', 'message'].forEach(k => { const e = validate(k, formData[k]); if (e) errs[k] = e; });
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setStatus('sending');
        try {
            await sendContactEmail({ name: formData.name, email: formData.email, message: formData.message });
            try { await sendWhatsAppNotification({ name: formData.name, email: formData.email, message: formData.message }); } catch { }
            setStatus('success');
            setTimeout(() => { setStatus(''); setFormData({ name: '', email: '', message: '', honeypot: '' }); setTouched({}); }, 4000);
        } catch { setStatus('error'); setTimeout(() => setStatus(''), 4000); }
    };

    const inputCls = (field) => `w-full px-3 py-2 rounded-lg border text-sm ${errors[field] && touched[field] ? 'border-red-500' : 'border-gray-300 dark:border-dark-border'} bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-all`;

    const containerAnim = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } };
    const item = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

    return (
        <React.Fragment>
            <section id="contact" className="h-full flex flex-col px-4 md:px-8 py-4 overflow-hidden">
                <motion.div
                    className="max-w-6xl mx-auto w-full flex flex-col h-full gap-3"
                    variants={containerAnim}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header */}
                    <motion.div variants={item} className="flex items-center justify-between flex-wrap gap-2">
                        <div>
                            <p className="text-xs text-primary-500 font-bold uppercase tracking-widest mb-0.5">Contato</p>
                            <h2 className="text-2xl md:text-3xl font-bold">Vamos <span className="gradient-text">Conversar?</span></h2>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="pulse-dot" />
                            <span className="text-xs text-primary-500 font-semibold">Disponível · resp. em até 24h</span>
                        </div>
                    </motion.div>

                    {/* 4-col body */}
                    <div className="grid grid-cols-4 gap-3 flex-1 overflow-hidden">

                        {/* COL 1: channels 2x2 grid */}
                        <motion.div variants={item} className="flex flex-col gap-2">
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Canais</p>
                            <div className="grid grid-cols-2 gap-2 flex-1">
                                {contactMethods.map((m, i) => (
                                    <motion.a
                                        key={i}
                                        href={m.link}
                                        target="_blank" rel="noopener noreferrer"
                                        data-tracking-id={m.trackingId}
                                        className="card-glass p-2.5 flex flex-col items-center justify-center gap-1.5 text-center group hover:shadow-lg min-h-0"
                                        whileHover={{ y: -3 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${m.color} text-white`}>
                                            <m.icon size={14} />
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-center gap-1">
                                                <span className="text-xs font-bold text-gray-800 dark:text-gray-200">{m.title}</span>
                                                {m.preferred && <span className="text-xs text-yellow-400">⭐</span>}
                                            </div>
                                            <p className="text-xs text-gray-500 leading-tight truncate max-w-full px-1">{m.value.split(' ')[0]}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* COL 2: response info + updates */}
                        <motion.div variants={item} className="flex flex-col gap-2 overflow-hidden">
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Info</p>
                            {/* Preferred */}
                            <div className="card-glass p-2.5 bg-primary-500/5 border-primary-500/20">
                                <div className="flex items-center gap-1.5 mb-1">
                                    <FaClock size={10} className="text-primary-500" />
                                    <span className="text-xs font-bold gradient-text">Preferência</span>
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    <strong>LinkedIn</strong> ou <strong>E-mail</strong> — resposta garantida.
                                </p>
                            </div>
                            {/* Updates */}
                            <div className="card-glass p-2.5 flex-1 overflow-hidden">
                                <div className="flex items-center gap-1.5 mb-2">
                                    <FaHistory size={10} className="text-primary-500" />
                                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Updates</span>
                                </div>
                                <div className="space-y-1.5 overflow-hidden">
                                    {changelog.map((c, i) => (
                                        <div key={i} className="flex gap-1.5 text-xs">
                                            <span className="text-primary-500 font-semibold whitespace-nowrap flex-shrink-0 text-xs">{c.date}</span>
                                            <span className="text-gray-500 dark:text-gray-400 leading-tight truncate">{c.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* CTA buttons */}
                            <div className="flex flex-col gap-1.5">
                                <a href="mailto:ronaldo.s.barbosa@outlook.com" data-tracking-id="contact_cta_email"
                                    className="btn-primary text-xs py-1.5 px-3 text-center flex items-center justify-center gap-1.5">
                                    <FaEnvelope size={11} />E-mail
                                </a>
                                <a href="https://wa.me/5581997999249" target="_blank" rel="noopener noreferrer" data-tracking-id="contact_cta_whatsapp"
                                    className="btn-secondary text-xs py-1.5 px-3 text-center flex items-center justify-center gap-1.5">
                                    <FaWhatsapp size={11} />WhatsApp
                                </a>
                            </div>
                        </motion.div>

                        {/* COL 3-4: Form */}
                        <motion.div variants={item} className="col-span-2 flex flex-col gap-2 overflow-hidden">
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Enviar Mensagem</p>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-2 flex-1">
                                <input type="text" name="honeypot" value={formData.honeypot} onChange={e => setFormData({ ...formData, honeypot: e.target.value })} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <label className="block text-xs font-semibold mb-1 text-gray-600 dark:text-gray-400">Nome *</label>
                                        <input type="text" value={formData.name} required
                                            onChange={e => { setFormData({ ...formData, name: e.target.value }); if (touched.name) setErrors({ ...errors, name: validate('name', e.target.value) }); }}
                                            onBlur={e => { setTouched({ ...touched, name: true }); setErrors({ ...errors, name: validate('name', e.target.value) }); }}
                                            className={inputCls('name')} placeholder="Seu nome" />
                                        {errors.name && touched.name && <p className="text-red-500 text-xs mt-0.5">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold mb-1 text-gray-600 dark:text-gray-400">E-mail *</label>
                                        <input type="email" value={formData.email} required
                                            onChange={e => { setFormData({ ...formData, email: e.target.value }); if (touched.email) setErrors({ ...errors, email: validate('email', e.target.value) }); }}
                                            onBlur={e => { setTouched({ ...touched, email: true }); setErrors({ ...errors, email: validate('email', e.target.value) }); }}
                                            className={inputCls('email')} placeholder="seu@email.com" />
                                        {errors.email && touched.email && <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <label className="block text-xs font-semibold mb-1 text-gray-600 dark:text-gray-400">Mensagem * ({formData.message.length}/1000)</label>
                                    <textarea value={formData.message} required rows={4}
                                        onChange={e => { setFormData({ ...formData, message: e.target.value }); if (touched.message) setErrors({ ...errors, message: validate('message', e.target.value) }); }}
                                        onBlur={e => { setTouched({ ...touched, message: true }); setErrors({ ...errors, message: validate('message', e.target.value) }); }}
                                        className={`${inputCls('message')} resize-none flex-1`}
                                        placeholder="Conte sobre seu projeto ou oportunidade..." />
                                    {errors.message && touched.message && <p className="text-red-500 text-xs mt-0.5">{errors.message}</p>}
                                </div>

                                <div className="flex items-center gap-3 flex-wrap">
                                    <motion.button type="submit" disabled={status === 'sending'}
                                        className={`btn-primary flex items-center gap-2 text-sm py-2 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                                        whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                                    >
                                        {status === 'sending'
                                            ? <><motion.div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }} />Enviando...</>
                                            : <><FaPaperPlane size={13} />Enviar</>}
                                    </motion.button>

                                    <AnimatePresence>
                                        {status === 'success' && (
                                            <motion.span initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                                                className="text-sm text-green-600 dark:text-green-400 font-semibold">
                                                ✅ Enviado! Retorno em breve 😊
                                            </motion.span>
                                        )}
                                        {status === 'error' && (
                                            <motion.span initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                                                className="text-sm text-red-500 font-semibold">
                                                ❌ Erro — use outro canal.
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </form>

                            {/* Bottom CTA strip */}
                            <div className="card-glass p-2.5 bg-gradient-to-r from-primary-500/10 to-blue-600/10 flex items-center gap-2">
                                <span>🚀</span>
                                <p className="text-xs text-gray-600 dark:text-gray-400 flex-1">Aberto a desafios, colaborações e aprendizado.</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default Contact;
