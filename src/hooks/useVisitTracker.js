import { useEffect } from 'react';

/**
 * Hook para rastrear visitas ao site e enviar notificação no WhatsApp
 * 
 * CONFIGURAÇÃO:
 * 1. Envie "I allow callmebot to send me messages" para +34 644 39 44 83 no WhatsApp
 * 2. Salve o API Key que você receber
 * 3. Configure as variáveis de ambiente no arquivo .env
 */
const useVisitTracker = () => {
    useEffect(() => {
        const trackVisit = async () => {
            try {
                // Verifica se já enviou notificação nesta sessão
                const hasNotified = sessionStorage.getItem('visit_notified');

                if (hasNotified) {
                    return; // Já notificou nesta sessão
                }

                // Coleta informações do visitante
                const visitorInfo = {
                    timestamp: new Date().toLocaleString('pt-BR'),
                    userAgent: navigator.userAgent,
                    language: navigator.language,
                    platform: navigator.platform,
                    screenResolution: `${window.screen.width}x${window.screen.height}`,
                    referrer: document.referrer || 'Direto',
                };

                // Detecta dispositivo
                const isMobile = /Mobile|Android|iPhone/i.test(navigator.userAgent);
                const isTablet = /Tablet|iPad/i.test(navigator.userAgent);
                const deviceType = isMobile ? '📱 Mobile' : isTablet ? '📱 Tablet' : '💻 Desktop';

                // Monta a mensagem
                const message = `
🔔 *Nova Visita no Portfolio!*

⏰ ${visitorInfo.timestamp}
${deviceType}
🌍 Idioma: ${visitorInfo.language}
📺 Resolução: ${visitorInfo.screenResolution}
🔗 Origem: ${visitorInfo.referrer}
                `.trim();

                // Envia notificação
                await sendWhatsAppNotification(message);

                // Marca como notificado nesta sessão
                sessionStorage.setItem('visit_notified', 'true');

                console.log('✅ Notificação de visita enviada com sucesso!');
            } catch (error) {
                console.error('❌ Erro ao enviar notificação:', error);
            }
        };

        // Aguarda 2 segundos antes de rastrear (evita notificações durante desenvolvimento)
        const timer = setTimeout(() => {
            trackVisit();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
};

/**
 * Envia notificação via WhatsApp usando CallMeBot API
 */
const sendWhatsAppNotification = async (message) => {
    // Suas credenciais (configure no arquivo .env para produção)
    const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '5581982914552';
    const API_KEY = import.meta.env.VITE_CALLMEBOT_API_KEY || '';

    if (!API_KEY) {
        console.warn('⚠️ API Key do CallMeBot não configurada');
        return;
    }

    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.callmebot.com/whatsapp.php?phone=${PHONE}&text=${encodedMessage}&apikey=${API_KEY}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'no-cors', // CallMeBot não suporta CORS
        });

        // Com no-cors, não podemos ler a resposta, mas a requisição é enviada
        return response;
    } catch (error) {
        throw new Error('Falha ao enviar notificação WhatsApp: ' + error.message);
    }
};

export default useVisitTracker;
