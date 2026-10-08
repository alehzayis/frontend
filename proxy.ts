import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the landing page
  if (pathname === "/") {
    return NextResponse.next();
  }

  // Hide all other application pages
  return NextResponse.redirect(new URL("/", request.url));
}

// IMPORTANT:
// Don't run the proxy on Next.js assets, API routes, or public files.
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};