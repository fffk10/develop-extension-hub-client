import NextAuth from 'next-auth'
import authConfig from '@/auth.config'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  ...authConfig,
  session: { strategy: 'jwt' },
})
