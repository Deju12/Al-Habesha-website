import localFont from "next/font/local";
import "./globals.css";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Al Habesha",
  description: "Al Habesha ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-heroImage bg-cover bg-center h-screen bg-fixed`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
