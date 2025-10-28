import emailjs from '@emailjs/browser';

/**
 * Serviço de envio de emails usando EmailJS
 * 
 * CONFIGURAÇÃO:
 * 1. Crie uma conta em https://www.emailjs.com/
 * 2. Crie um serviço de email (Gmail, Outlook, etc)
 * 3. Crie um template de email
 * 4. Configure as variáveis de ambiente no arquivo .env
 */

// Inicializa o EmailJS com sua Public Key
const initEmailJS = () => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (publicKey) {
        emailjs.init(publicKey);
    } else {
        console.warn('⚠️ EmailJS Public Key não configurada. Configure no arquivo .env');
    }
};

/**
 * Envia email de contato
 * @param {Object} formData - Dados do formulário
 * @param {string} formData.name - Nome do remetente
 * @param {string} formData.email - Email do remetente
 * @param {string} formData.message - Mensagem
 * @returns {Promise} - Promise com resultado do envio
 */
export const sendContactEmail = async (formData) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Validar configurações
    if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS não está configurado. Configure as variáveis de ambiente.');
    }

    // Inicializar EmailJS
    initEmailJS();

    // Preparar dados para o template
    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Ronaldx', // Seu nome
        reply_to: formData.email,
        // Informações adicionais
        timestamp: new Date().toLocaleString('pt-BR'),
    };

    try {
        // Enviar email
        const response = await emailjs.send(
            serviceId,
            templateId,
            templateParams,
            publicKey
        );

        console.log('✅ Email enviado com sucesso:', response);
        return response;

    } catch (error) {
        console.error('❌ Erro ao enviar email:', error);
        throw error;
    }
};

/**
 * Envia notificação para o seu WhatsApp (opcional)
 * @param {Object} formData - Dados do formulário
 */
export const sendWhatsAppNotification = async (formData) => {
    const phone = import.meta.env.VITE_WHATSAPP_PHONE;
    const apiKey = import.meta.env.VITE_CALLMEBOT_API_KEY;

    if (!phone || !apiKey) {
        console.warn('⚠️ WhatsApp não configurado');
        return;
    }

    const message = `
🔔 *Nova Mensagem no Portfolio!*

👤 Nome: ${formData.name}
📧 Email: ${formData.email}

💬 Mensagem:
${formData.message}

⏰ ${new Date().toLocaleString('pt-BR')}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodedMessage}&apikey=${apiKey}`;

    try {
        await fetch(url, { method: 'GET', mode: 'no-cors' });
        console.log('✅ Notificação WhatsApp enviada');
    } catch (error) {
        console.error('❌ Erro ao enviar notificação WhatsApp:', error);
    }
};

export default {
    sendContactEmail,
    sendWhatsAppNotification,
};
