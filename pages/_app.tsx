// pages/_app.tsx
import type { AppProps } from "next/app"
import dynamic from 'next/dynamic'
import "../styles/globals.css"

const TinaCMS = dynamic(
  () =>
    import('tinacms').then((mod) => ({
      default: mod.default,
    })),
  { ssr: false }
)

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {process.env.NODE_ENV === 'development' && <TinaCMS />}
    </>
  )
}

export default App
