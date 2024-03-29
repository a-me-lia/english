import type { Metadata } from 'next'
import { Be_Vietnam_Pro, IBM_Plex_Sans, Inter } from 'next/font/google'
import './globals.css'

import Navbar from './components/navbar'
import Footer from './components/footer'

const vietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-vietnam",
});

const plexMono = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://english.matthewguo.com'),
  title: "Matthew Guo | English",
  description: "My website for English 10 final project",
  openGraph: {
    title: "Matthew Guo",
    description: "Matthew Guo's internet home ",
    url: "https://english.matthewguo.com",
    images: "https://english.matthewguo.com/favicon.ico",
    siteName: "English",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${vietnam.variable} font-sans text-neutral-800  ${plexMono.variable} font-ibm bg-white `}
      >
        <Navbar/>
          {children}
        <Footer/>
        <div className='md:hidden fixed top-0 left-0 h-screen w-screen  z-[60] bg-white flex flex-row items-center justify-center px-6'>
          <div>Sorry, this website is not yet available for mobile. Please check back later.</div>
        </div>
      </body>
    </html>
  );
}
