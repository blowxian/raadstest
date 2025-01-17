import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'RAADS-R Test Platform - Professional Autism Assessment',
    description: 'Your comprehensive platform for the Ritvo Autism Asperger Diagnostic Scale-Revised (RAADS-R) assessment. Access validated testing, multi-language support, and professional resources.',
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