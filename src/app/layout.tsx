import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { UIProvider } from '@yamada-ui/react'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '100',
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
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  )
}
