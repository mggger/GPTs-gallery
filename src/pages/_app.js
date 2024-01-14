import '@/styles/globals.css'
import GoogleAnalytics from "@/components/analyse";

export default function App({ Component, pageProps }) {
  return (
  <div>
    <GoogleAnalytics/>
    <Component {...pageProps} />
  </div>
  )
}
