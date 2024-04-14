import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoadingBar from "@/components/PageLoadingBar";
import ReduxProvider from "@/components/ReduxProvider";
import "./globals.css";

export const metadata = {
  title: "Студия дизайна Chikindin-design",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
  },
  description: 'Семейная дизайн-студия из Новосибирска с индивидуальным подходом к каждому заказчику и неизменно высоким качеством выполения дизайн-проектов.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="font-primary">
        <ReduxProvider>
          <Navbar />
          <PageLoadingBar />
        </ReduxProvider>
        {children}
        <Footer />
      </body>
    </html>
  );
}
