import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isAdminPath = path.startsWith('/admin')
  const isLoginPath = path === '/admin'

  // Get the token and properly check its value
  const authToken = request.cookies.get('admin-token')
  const isAuthenticated = authToken?.value === 'authenticated'

  // Redirect to login if trying to access protected routes without auth
  if (isAdminPath && !isLoginPath && !isAuthenticated) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  // Redirect to dashboard if already authenticated and trying to access login
  if (isLoginPath && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}