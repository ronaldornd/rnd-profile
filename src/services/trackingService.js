// src/services/trackingService.js

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

// Armazena os dados da sessão para evitar chamadas repetidas à API de localização.
let sessionData = null;

/**
 * Busca os dados de geolocalização e tipo de dispositivo.
 * Armazena o resultado em cache na variável sessionData.
 */
const initializeSessionData = async () => {
  if (sessionData || !SCRIPT_URL) {
    return;
  }

  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) {
      throw new Error('IP API response was not ok.');
    }
    const locationData = await response.json();
    
    const deviceType = /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

    sessionData = {
      ip: locationData.ip,
      city: locationData.city,
      region: locationData.region,
      country: locationData.country_name,
      deviceType: deviceType,
    };
  } catch (error) {
    console.error('Error fetching location data:', error);
    // Em caso de erro, preenche com dados padrão para não quebrar o rastreamento.
    sessionData = {
      ip: 'N/A',
      city: 'N/A',
      region: 'N/A',
      country: 'N/A',
      deviceType: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
    };
  }
};

/**
 * Envia um evento de rastreamento para o Google Apps Script usando fetch.
 * @param {string} eventType - O tipo de evento (ex: 'SESSION_START').
 * @param {object} eventData - Dados adicionais sobre o evento.
 */
export const trackEvent = async (eventType, eventData = {}) => {
  if (!SCRIPT_URL) return;

  // Garante que os dados da sessão foram inicializados.
  await initializeSessionData();

  const payload = {
    timestamp: new Date().toISOString(),
    eventType,
    eventData,
    ...sessionData,
  };

  try {
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Necessário ao chamar Apps Script desta forma
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error('Tracking Error:', error);
  }
};

/**
 * Envia um evento de rastreamento usando navigator.sendBeacon.
 * Ideal para eventos de fim de sessão (ex: 'beforeunload').
 * @param {string} eventType - O tipo de evento.
 * @param {object} eventData - Dados adicionais.
 */
export const trackEventWithBeacon = (eventType, eventData = {}) => {
  if (!SCRIPT_URL || !navigator.sendBeacon) return;

  const payload = {
    timestamp: new Date().toISOString(),
    eventType,
    eventData,
    ...sessionData,
  };

  const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
  navigator.sendBeacon(SCRIPT_URL, blob);
};
