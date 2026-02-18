import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

import { SITE_CONFIG } from './constants';

export function handleInstagramDeepLink(e: React.MouseEvent<HTMLAnchorElement>) {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const { username, webUrl } = SITE_CONFIG.contact.instagram;

    // Detect OS
    const ua = navigator.userAgent;
    const isAndroid = /Android/i.test(ua);
    const isiOS = /iPhone|iPad|iPod/i.test(ua);

    // Desktop: Set target="_blank" dynamically and let the browser navigate
    if (!isAndroid && !isiOS) {
        e.currentTarget.target = "_blank";
        e.currentTarget.rel = "noopener noreferrer";
        return;
    }

    // Mobile: prevent default browser navigation to attempt deep linking
    e.preventDefault();

    let appUrl = `instagram://user?username=${username}`;

    if (isAndroid) {
        // Use Intent URL for Android for more reliable app opening
        appUrl = `intent://instagram.com/_u/${username}/#Intent;package=com.instagram.android;scheme=https;end`;
    }

    const start = Date.now();
    let timer: NodeJS.Timeout;

    // Help avoid the fallback if the app was successfully opened
    const clearHandlers = () => {
        clearTimeout(timer);
        window.removeEventListener('visibilitychange', clearHandlers);
        window.removeEventListener('pagehide', clearHandlers);
    };

    window.addEventListener('visibilitychange', clearHandlers);
    window.addEventListener('pagehide', clearHandlers);

    // Attempt to open the app
    window.location.href = appUrl;

    // Fallback to web if app doesn't open within 1.5s
    timer = setTimeout(() => {
        // If the gap is small (< 2s), the user likely stayed on the browser
        // If the app opened, Date.now() - start would be much larger when they return
        if (Date.now() - start < 2000) {
            window.location.href = webUrl;
        }
        clearHandlers();
    }, 1500);
}
