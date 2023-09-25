import './globals.css'
import { Poppins } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

// const poppins está aplicando uma font ao body através de uma classe
const poppins = Poppins({
    weight: ['300', '500', '600', '700'],
    subsets: ['latin']
})

export const metadata = {
    title: 'Instituto Ser Melhor',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body>
                {/* children está adicionando o arquivo "page.tsx" (que é a Home) desta pasta ao body do site */}
                {children}
                <Footer /> 
            </body>
        </html>
    )
}
