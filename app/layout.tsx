import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PRVC - Secure Messenger System',
  description: 'The most secure closed-group private messenger system ever',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
