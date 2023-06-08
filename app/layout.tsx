import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar'

const inter = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'UMEB',
  description: 'New UMEB Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
