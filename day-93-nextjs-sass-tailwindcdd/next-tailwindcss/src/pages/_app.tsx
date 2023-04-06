import TopBar from '@/components/Topbar'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <TopBar />
      <Component {...pageProps} />
    </ThemeProvider>

  )

}
