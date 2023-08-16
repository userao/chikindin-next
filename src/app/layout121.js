import './globals.css'

export const metadata = {
  title: 'Chikindin-design',  
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className='bg-slate-800'>{children}</body>
    </html>
  )
}
