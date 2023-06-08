import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar'

const inter = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Alec Palo',
  description: 'Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
