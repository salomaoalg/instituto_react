import NavBar from "./NavBar/NavBar"



export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body><NavBar/>{children}
      </body>
    </html>
  )
}
