import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '@/components/Navbar'
import Aside from '@/components/Aside'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className='flex '>
                    <Aside />
                    <div className='w-full sm:w-[calc(100vw-15rem)]'>
                        <Navbar />
                        {children}
                    </div>
                </main>
            </body>
        </html>
    )
}
