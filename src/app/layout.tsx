import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

export const metadata = {
    title: 'Jazzclub FAQ',
    description: 'De Grote Epische Jazzclub I: Jazztronomical FAQ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={"tw-bg-jazz-blue"}>{children}</body>
        </html>
    )
}
