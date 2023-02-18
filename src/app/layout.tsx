"use client"

import createEmotionCache from '@/utils/createEmotionCache'
import { theme } from '@/utils/theme'
import { CacheProvider } from '@emotion/react'
import { Button, ThemeProvider } from '@mui/material'
import { Inter } from '@next/font/google'
import MarqueeStyled from './components/ui/MarqueeStyled'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const clientSideEmotionCache = createEmotionCache();


export default function RootLayout({
  children,
  emotionCache = clientSideEmotionCache,
}: {
  children: React.ReactNode,
  emotionCache?: any
}) {

  return (
    <html 
      lang="en"
      className={`${inter.className}`}
    >
      <head />
      <body
        className='w-full h-[100vh]'
      >
        <CacheProvider
          value={emotionCache}
        >

        </CacheProvider>
        <ThemeProvider
          theme={theme}
        >
          <>
            <MarqueeStyled>
              <h2>Next.js + Tailwind CSS + TypeScript</h2>
            </MarqueeStyled>
            {
              children
            }
          </>
        </ThemeProvider>
      </body>
    </html>
  )
}
