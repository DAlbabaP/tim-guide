import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/navigation/header'
import dynamic from 'next/dynamic'

const SearchModal = dynamic(() => import('@/components/search/search-modal'), { ssr: false })
const PageTransition = dynamic(() => import('@/components/layout/page-transition').then(mod => mod.PageTransition), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'ТимГид | Справочник абитуриента РГАУ-МСХА | Полный гайд для поступающих',
    template: '%s | ТимГид'
  },
  description: 'Исчерпывающий путеводитель для поступающих в РГАУ-МСХА имени К.А. Тимирязева. Все этапы от подачи документов до адаптации в университете.',
  keywords: ['ТимГид', 'РГАУ-МСХА', 'абитуриент', 'поступление', 'университет', 'студент', 'Тимирязевка'],
  authors: [{ name: 'РГАУ-МСХА' }],
  creator: 'РГАУ-МСХА',
  publisher: 'РГАУ-МСХА',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dalbabap.github.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ТимГид - Справочник абитуриента РГАУ-МСХА',
    description: 'Полный гайд для поступающих в РГАУ-МСХА имени К.А. Тимирязева',
    url: 'https://timguide.ru',
    siteName: 'ТимГид',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ТимГид - Справочник абитуриента РГАУ-МСХА',
    description: 'Полный гайд для поступающих в РГАУ-МСХА имени К.А. Тимирязева',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="icon" href="/tim-guide/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/tim-guide/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/tim-guide/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/tim-guide/favicon-16x16.png" />
        <link rel="manifest" href="/tim-guide/site.webmanifest" />
        <meta name="theme-color" content="#3d7648" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white">
          <Header />
          <SearchModal />
          <main className="overflow-hidden">
            <PageTransition>{children}</PageTransition>
          </main>
        </div>
      </body>
    </html>
  )
} 