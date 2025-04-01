export { auth as middleware } from '@/auth'

export const config = {
  matcher: ['/post/:path*', '/user/:path*'], // Đường dẫn yêu cầu login
}
