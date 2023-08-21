import Navbar from "./navbar";
import Footer from "./footer";

import "./global.css";

export const metadata = {
  title: "Chikindin-design",
};

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
