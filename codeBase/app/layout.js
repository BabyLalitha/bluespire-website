
import './globals.css'
import { Inter } from 'next/font/google'
// import { useEffect } from 'react'

import './globals.css';
import NavBar from './NavBar';
import Footer from './Footer';



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <body>
        <NavBar />
        <section>
          {children}
        </section>
        <section>
          {/* <div className='bg-blue h-screen flex justify-center'>Commmon Layout...</div> */}
         <Footer />
        </section>

        {/*********** ion-icon installation. ****************/}
     
      </body>
    </html>
  )
}
