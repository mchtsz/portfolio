import type { Metadata } from 'next'
import NavBar from './components/NavBar'
import "./globals.css"

export const metadata: Metadata = {
  title: 'Min portfolio',
  description: 'Lagd i NextJS av meg',
}

export default function RootLayout({
  children
}:
  {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body>
        <nav><NavBar /></nav>
        <main>{children}</main> 
      </body>
    </html>
  )
}