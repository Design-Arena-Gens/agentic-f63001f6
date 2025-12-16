import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Management & Development',
  description: 'A complete project management and development platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
