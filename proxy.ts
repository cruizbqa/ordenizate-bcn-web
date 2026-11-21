import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match every pathname except /api, /_next, /_vercel and files with a dot
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
};
