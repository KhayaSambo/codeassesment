import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Added Inter here as it renders it better then when it is added in css
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brand',
  description: 'Brand', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
