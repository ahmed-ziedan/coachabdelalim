import { NextRequest, NextResponse } from 'next/server';
import { isValidLocale } from '@/config/locales';

/**
 * Proxy for locale routing (Next.js 16+ convention):
 *
 * - `/`    → internally rewrite to /ar (Arabic is the default)
 * - `/en`  → serve /en as-is
 * - `/ar`  → redirect 308 to / (canonical Arabic URL is root)
 * - Other  → locale-aware 404
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Extract the first path segment
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  // `/ar` → redirect 308 to `/` (canonical Arabic URL is root)
  if (firstSegment === 'ar') {
    const url = request.nextUrl.clone();
    url.pathname = '/' + segments.slice(1).join('/');
    return NextResponse.redirect(url, 308);
  }

  // `/en` → pass through to the [locale] route
  if (firstSegment === 'en') {
    return NextResponse.next();
  }

  // `/` (no locale segment) → rewrite to /ar internally
  if (!firstSegment || !isValidLocale(firstSegment)) {
    const url = request.nextUrl.clone();
    url.pathname = `/ar${pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // Match all paths except Next.js internals, API routes, and static files
  matcher: [
    '/((?!_next|api|favicon\\.ico|images|fonts|video|.*\\..*).*)',
  ],
};
