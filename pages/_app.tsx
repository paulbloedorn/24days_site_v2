// pages/_app.tsx
import { TinaProvider, TinaCMS } from "tinacms"
import type { AppProps } from "next/app"

const cms = new TinaCMS({});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TinaProvider cms={cms}>
      <Component {...pageProps} />
    </TinaProvider>
  )
}
