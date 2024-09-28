import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames
    matcher: [
        '/',
        '/(ru|en|ar|ch)/:path*',
        '/((?!_next|_vercel|.*\\..*).*)'
    ]
};