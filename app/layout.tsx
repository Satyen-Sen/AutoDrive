import './globals.css'
import { Inter } from 'next/font/google'
import { Footer, NavBar } from '../components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'AutoDrive',
    description: 'Find, book, or rent a car - quickly and easily'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className='relative'>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
