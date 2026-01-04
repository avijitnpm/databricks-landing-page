import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Databricks: Leading Data and AI Platform for Enterprises',
  description: 'Databricks offers a unified platform for data, analytics and AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body data-gatsbystatus="loaded">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWTKQQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }} // Manually fixed as regex might miss this specific one
          ></iframe>
        </noscript>
        <div id="___gatsby">
          <div style={{ outline: 'none' }} tabIndex={-1} id="gatsby-focus-wrapper">
            <div data-cy="BaseLayout" className="flex flex-col lg:pt-8 pt-6 md:pt-7 general-page home-page-override">
              <a href="#main" className="focus:text-navy-06 sr-only focus:not-sr-only focus:absolute focus:left-1 focus:top-1 focus:z-[200] focus:bg-white focus:px-2">Skip to main content</a>
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
