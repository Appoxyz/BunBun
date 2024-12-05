import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ backgroundColor: '#FBF7F5' }}> {/* Adding background color */}
      <Component {...pageProps} />
      {/*} <Analytics /> */}
    </div>
  );
}

