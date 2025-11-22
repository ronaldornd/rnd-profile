const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const getIPData = async () => {
    try {
        const response = await fetch('https://ipapi.co/json/', {
            method: 'GET',
            mode: 'cors',
        });
        const data = await response.json();
        return {
            ip: data.ip || 'N/A',
            city: data.city || 'N/A',
            region: data.region || 'N/A',
            country: data.country || 'N/A',
            deviceType: navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop'
        };
    } catch (error) {
        console.warn('Failed to fetch IP data:', error);
        return {
            ip: 'N/A',
            city: 'N/A',
            region: 'N/A',
            country: 'N/A',
            deviceType: navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop'
        };
    }
};

const sendData = async (data) => {
    if (!GOOGLE_SCRIPT_URL) {
        return;
    }
    const ipData = await getIPData();
    const fullData = { ...data, ...ipData };
    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(fullData),
        });
    } catch (error) {
        console.warn('Failed to send tracking data:', error);
    }
};

const sendDataWithBeacon = async (data) => {
    if (!GOOGLE_SCRIPT_URL) {
        return;
    }
    const ipData = await getIPData();
    const fullData = { ...data, ...ipData };
    const blob = new Blob([JSON.stringify(fullData)], { type: 'text/plain' });
    navigator.sendBeacon(GOOGLE_SCRIPT_URL, blob);
};

export const trackClick = (trackId) => {
    const data = {
        eventType: 'CLICK',
        eventData: { track_id: trackId, url: window.location.href },
        timestamp: new Date().toISOString(),
    };
    sendData(data);
};

export const trackEvent = (eventType, eventData) => {
    const data = {
        eventType: eventType,
        eventData: { ...eventData, url: window.location.href },
        timestamp: new Date().toISOString(),
    };
    sendData(data);
};

export const trackEventWithBeacon = (eventType, eventData) => {
    const data = {
        eventType: eventType,
        eventData: { ...eventData, url: window.location.href },
        timestamp: new Date().toISOString(),
    };
    sendDataWithBeacon(data);
};