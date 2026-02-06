
import { useEffect, useState, useCallback } from 'react';

declare global {
    interface Window {
        grecaptcha: any;
    }
}

const SITE_KEY = '6LfJsmIsAAAAAPhgKRBB8UUcMYuyvox5xj8g4BjX';

export const useRecaptcha = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const checkGrecaptcha = () => {
            if (window.grecaptcha && window.grecaptcha.enterprise) {
                setIsReady(true);
            } else {
                setTimeout(checkGrecaptcha, 100);
            }
        };
        checkGrecaptcha();
    }, []);

    const executeRecaptcha = useCallback(async (action: string): Promise<string | null> => {
        if (!isReady || !window.grecaptcha?.enterprise) {
            console.warn('ReCaptcha not ready');
            return null;
        }

        try {
            return await window.grecaptcha.enterprise.execute(SITE_KEY, { action });
        } catch (error) {
            console.error('ReCaptcha execution failed:', error);
            return null;
        }
    }, [isReady]);

    return { executeRecaptcha, isReady };
};
