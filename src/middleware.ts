/* eslint-disable */
import { NextRequest, NextResponse } from 'next/server';

export type TLocale = 'en' | 'fr';

export const locales: TLocale[] = ['en', 'fr'];

export const defaultLocale = locales[0];


export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|icons|favicon.ico|error).*)'
  ],
};
