import { useEffect } from 'react';
import { trackClick } from '../services/trackingService';

const useVisitTracker = () => {
    useEffect(() => {
        const handleClick = (event) => {
            const anchor = event.target.closest('a');
            if (anchor && anchor.dataset.trackingId) {
                trackClick(anchor.dataset.trackingId);
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);
};

export default useVisitTracker;