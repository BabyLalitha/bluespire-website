
import './globals.css'

import './globals.css';
import NavBar from './NavBar';
import Footer from './Footer';



export const metadata = {
  title: 'Blue Spire Technologies',
  description: '',
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
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  )
}
