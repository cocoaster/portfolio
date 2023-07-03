import './globals.css'
import '../styles/index.scss'

import Mouse from '@/components/Mouse'
import {NavBar, Logo, Footer} from '@/components'



export const metadata = {
  name: "viewport",
  content:"width=device-width, initial-scale=1"

}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      <NavBar />

        <main className='' >
        <Mouse />
        {/* <Logo/> */}
          {children}
         
        </main>
        <Footer />
      </body>
    </html>
  )
}
