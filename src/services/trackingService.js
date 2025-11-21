const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const sendData = async (data) => {
    console.log('Sending tracking data:', data);
    if (!GOOGLE_SCRIPT_URL) {
        console.warn('Google Script URL not configured. Set VITE_GOOGLE_SCRIPT_URL in .env');
        return;
    }
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseBody = await response.text();
        console.log('Tracking response status:', response.status);
        console.log('Tracking response body:', responseBody);

        if (!response.ok) {
            throw new Error(`Failed to send tracking data. Status: ${response.status}. Body: ${responseBody}`);
        }

        console.log('Tracking data sent successfully.');
    } catch (error) {
        console.error('Error sending tracking data:', error);
    }
};

const sendDataWithBeacon = (data) => {
    if (!GOOGLE_SCRIPT_URL) {
        console.warn('Google Script URL not configured.');
        return;
    }
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    navigator.sendBeacon(GOOGLE_SCRIPT_URL, blob);
};

export const trackClick = (trackId) => {
    const data = {
        type: 'CLICK',
        track_id: trackId,
        timestamp: new Date().toISOString(),
        url: window.location.href,
    };
    sendData(data);
};

export const trackEvent = (eventType, eventData) => {
    const data = {
        type: eventType,
        ...eventData,
        timestamp: new Date().toISOString(),
        url: window.location.href,
    };
    sendData(data);
};

export const trackEventWithBeacon = (eventType, eventData) => {
    const data = {
        type: eventType,
        ...eventData,
        timestamp: new Date().toISOString(),
        url: window.location.href,
    };
    sendDataWithBeacon(data);
};
