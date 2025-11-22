const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const getIPData = async () => {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        return {
            ip: data.ip || 'N/A',
            city: data.city || 'N/A',
            region: data.region || 'N/A',
            country: data.country || 'N/A',
            deviceType: navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop'
        };
    } catch (error) {
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
    const blob = new Blob([JSON.stringify(fullData)], { type: 'text/plain' });
    const success = navigator.sendBeacon(GOOGLE_SCRIPT_URL, blob);
    if (!success) {
        // Optionally handle failure, but since it's fire and forget, maybe not
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