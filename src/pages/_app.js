import '@/styles/globals.css'
import GoogleAnalytics from "@/components/analyse";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function App({Component, pageProps}) {
    return (
        <div>
            <GoogleAnalytics/>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </div>
    )
}
