import './../globals.css'
import { Inter } from 'next/font/google'
import NavBar from './../NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function AdminLayout({ children }) {

  return (
    <html lang="en">
      <body>
          {/* <section> */}
          {children}
          {/* </section> */}
       </body>
    </html>
  )
}
