import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { UIProvider } from '@yamada-ui/react'
import { colorModeManager, customConfig } from '@/src/app/features/theme'
import Header from '@/src/app/components/layout/header'
import Footer from '@/src/app/components/layout/footer'
import Main from '@/src/app/components/layout/main'
import NextAuthProvider from '@/src/app/providers/nextauth'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Extension Hub',
  description: 'Extension Hub',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body className={roboto.className}>
        <NextAuthProvider>
          <UIProvider config={customConfig} colorModeManager={colorModeManager}>
            <Header />

            <Main>{children}</Main>

            <Footer />
          </UIProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
