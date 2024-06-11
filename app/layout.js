import { Inter } from "next/font/google";
import "./bootstrap-min.css";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from "./Component/Header";
import Footer from "./Component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Header />
              {children}
          <Footer />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
          <script src="/lib/easing/easing.min.js"></script>
          <script src="/lib/waypoints/waypoints.min.js"></script>
          <script src="/lib/owlcarousel/owl.carousel.min.js"></script>
          <script src="/lib/lightbox/js/lightbox.min.js"></script>
          {/* <script src="/js/main.js"></script> */}
          </body>
    </html>
  );
}
