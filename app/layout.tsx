import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Caleb Wodi: Systems Engineer & Builder',
  description: 'Systems engineer building open source developer tools and infrastructure. Focus on depth, fundamentals, and first-principles thinking. ExplainThisRepo, TwitterXScraper, and more.',
  keywords: 'systems engineer, developer tools, open source, WodiPortfolio, Python, TypeScript, Rust, Go, C',
  metadataBase: new URL('https://calebwodi.com'),
  openGraph: {
    type: 'website',
    url: 'https://calebwodi.com',
    title: 'Caleb Wodi: Systems Engineer & Builder',
    description: 'Systems engineer building open source developer tools and infrastructure. Focus on depth, fundamentals, and first-principles thinking. ExplainThisRepo, TwitterXScraper, and more.',
    images: [
      {
        url: '/calebwodi.png',
        width: 160,
        height: 160,
        alt: 'Caleb Wodi',
      },
    ],
  },
  twitter: {
    card: 'summary',
    creator: '@calchiwo',
    title: 'Caleb Wodi: Systems Engineer & Builder',
    description: 'Systems engineer building open source developer tools and infrastructure. Focus on depth, fundamentals, and first-principles thinking. ExplainThisRepo, TwitterXScraper, and more.',
    images: ['/calebwodi.png'],
  },
  icons: {
    icon: 'favicon.ico',
    apple: 'favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
