import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <Head>
        <GA />
      </Head>
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}

function GA() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-HJ07ZDPPH1" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-HJ07ZDPPH1');`}</Script>
    </>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://ffimg.com' : 'http://localhost:3000'),
  title: 'FF Image Clip',
  description: 'ff14のスクリーンショットをお手軽に加工するためのWebサービス',
  viewport: {
    width: 'device-width'
  },
  openGraph: {
    url: './',
    type: 'website',
    siteName: 'ffimg'
  }
}
