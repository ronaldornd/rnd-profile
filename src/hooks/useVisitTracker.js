import { useEffect } from 'react';
import { trackEvent } from '../services/trackingService';

const useVisitTracker = () => {
    useEffect(() => {
        const handleClick = (event) => {
            const anchor = event.target.closest('a');
            if (anchor && anchor.dataset.trackingId) {
                trackEvent('LINK_CLICK', {
                    trackingId: anchor.dataset.trackingId,
                    href: anchor.href,
                    text: anchor.innerText.trim(),
                });
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);
};

export default useVisitTracker;