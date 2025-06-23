import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hinário Adventista",
  description: "App para encontrar hinos do hinário adventista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav className="navbar bg-body-tertiary ">
          <div className="container-fluid justify-content-center ">
            <span className="navbar-brand mb-0 h1 ">Hinario Adventista</span>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
