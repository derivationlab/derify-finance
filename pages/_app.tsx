import { AppProps } from 'next/app'
import 'animate.css'
import 'swiper/css'
import '@/public/font.css'
// import '@/public/style.css'
import '@/style/style.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
