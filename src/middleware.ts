import { NextResponse, NextRequest } from 'next/server';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = { matcher: ['/'] };
