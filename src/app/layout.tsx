import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mayday Web',
  description: 'Bienvenue sur Mayday Web !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`bg-[#0D5B5F] ${inter.className}`}>{children}</body>
    </html>
  )
}
