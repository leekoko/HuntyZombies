import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hunty Zombies Codes 2025 - Latest Active Codes for Roblox Hunty Zombies Game',
  description: 'Get the latest active Hunty Zombies Codes for free coins, weapon spins, traits, and exclusive rewards in Roblox. Daily updated list of working Hunty Zombies Codes with step-by-step redemption guide. Find all active Hunty Zombies Codes and expired codes with rewards.',
  keywords: 'Hunty Zombies Codes, Roblox Hunty Zombies Codes, Hunty Zombies game codes, active Hunty Zombies Codes, working Hunty Zombies Codes, free Hunty Zombies Codes, Hunty Zombies redeem codes, Roblox codes, zombie survival codes, Hunty Zombies rewards, latest Hunty Zombies Codes 2025',
  openGraph: {
    title: 'Hunty Zombies Codes 2025 - Latest Active Codes for Free Rewards',
    description: 'Get all the latest working Hunty Zombies Codes for Roblox. Free coins, weapon spins, traits and exclusive rewards. Daily updated Hunty Zombies Codes list with redemption guide.',
    type: 'website',
    url: 'https://huntyZombies.codes',
    siteName: 'Hunty Zombies Codes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hunty Zombies Codes 2025 - Latest Working Codes',
    description: 'Get free rewards in Hunty Zombies with our daily updated Hunty Zombies Codes list. Active codes for coins, weapons, traits and more!',
  },
  alternates: {
    canonical: 'https://huntyZombies.codes',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              'name': 'Hunty Zombies Codes',
              'alternateName': ['Hunty Zombies Codes 2025', 'Latest Hunty Zombies Codes', 'Active Hunty Zombies Codes'],
              'url': 'https://huntyZombies.codes',
              'description': 'Latest active Hunty Zombies Codes for Roblox - daily updated with verified codes for free coins, weapon spins, traits and exclusive rewards in the zombie survival game.',
              'keywords': 'Hunty Zombies Codes, Roblox Hunty Zombies Codes, Hunty Zombies game codes, active codes, working codes, zombie game codes',
              'inLanguage': 'en-US',
              'potentialAction': {
                '@type': 'SearchAction',
                'target': 'https://huntyZombies.codes/?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              },
              'mainEntity': {
                '@type': 'VideoGame',
                'name': 'Hunty Zombies',
                'description': 'Popular Roblox zombie survival game where players can redeem Hunty Zombies Codes for free rewards',
                'gamePlatform': 'Roblox',
                'genre': 'Zombie Survival'
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': 'Hunty Zombies Codes',
              'url': 'https://huntyZombies.codes',
              'description': 'Your trusted source for the latest working Hunty Zombies Codes, updated daily with active and expired codes for the popular Roblox zombie survival game.',
              'logo': 'https://huntyZombies.codes/logo.png',
              'sameAs': [
                'https://www.roblox.com'
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}