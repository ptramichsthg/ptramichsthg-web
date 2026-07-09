import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasSession = request.cookies.has("session-admin")

  // Jika user mencoba mengakses halaman login secara spesifik
  if (pathname === "/administrator") {
    if (hasSession) {
      // Sudah login, arahkan langsung ke dashboard
      const url = request.nextUrl.clone()
      url.pathname = "/administrator/dashboard"
      return NextResponse.redirect(url)
    }
  } else if (pathname.startsWith("/administrator/")) {
    // Jika mengakses halaman di dalam /administrator/* selain halaman login
    if (!hasSession) {
      // Belum login, redirect ke halaman login
      const url = request.nextUrl.clone()
      url.pathname = "/administrator"
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  // Hanya jalankan middleware untuk rute administrator
  matcher: ["/administrator/:path*"],
}
