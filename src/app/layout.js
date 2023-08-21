import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css'

export const metadata = {
  title: 'Chikindin-design',  
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className='font-primary'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
