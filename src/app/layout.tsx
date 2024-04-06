import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { UIProvider } from '@yamada-ui/react'
import { colorModeManager, customConfig } from '@/app/features/theme'
import Header from '@/app/components/layout/header'
import Footer from '@/app/components/layout/footer'
import Main from '@/app/components/layout/main'

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
        <UIProvider config={customConfig} colorModeManager={colorModeManager}>
          <Header />

          <Main>{children}</Main>

          <Footer />
        </UIProvider>
      </body>
    </html>
  )
}
