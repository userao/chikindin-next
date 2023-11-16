import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoadingBar from "@/components/PageLoadingBar";
import ReduxProvider from "@/components/ReduxProvider";
import "./globals.css";

export const metadata = {
  title: "Chikindin-design",
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
