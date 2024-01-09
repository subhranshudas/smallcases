import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React Smallcases',
  description: 'A repo to showcase React code snippets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
      <div className="flex flex-col p-6">
        <h1 className="text-3xl flex justify-center mt-4">
          <Link href="/">React UI smallcases</Link>
        </h1>

        {children}

        </div>
      </body>
    </html>
  )
}
